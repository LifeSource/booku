var gulp = require("gulp"),
    del = require("del"),
    path = require("path"),
    args = require("yargs").argv,
    browserSync = require("browser-sync"),
    $ = require("gulp-load-plugins")({ lazy: true });

var config = require("./config")();

gulp.task("default", ["help"]);
gulp.task("help", $.taskListing);

gulp.task("clean", function(done) {
    var path = [].concat(config.dist , config.css);
    clean(path, done);
});

gulp.task("clean-fonts", function(done) {
    clean(config.dist + "fonts/**/*.*", done);
});

gulp.task("clean-images", function(done) {
    clean(config.dist + "images/**/*.*", done);
});

gulp.task("clean-styles", function(done) {
    clean(config.css + "**/*.css", done);
});

gulp.task("clean-code", function(done) {
    var files = [].concat(
        config.css + "**/*.css",
        config.temp + "**/*.js",
        config.dist + "**/*.html",
        config.dist + "js/**/*.js"
    );
    clean(files, done);
});

gulp.task("fonts", ["clean-fonts"], function() {
    log("*** Copying fonts");
    return gulp.src(config.fonts)
        .pipe(gulp.dest(config.dist + "fonts"));
});

gulp.task("images", ["clean-images"], function() {
    log("*** Copying and compressing the images");
    return gulp.src(config.images)
        .pipe($.imagemin({ optimizationLevel: 4 }))
        .pipe(gulp.dest(config.dist + "images"));
});

gulp.task("styles", ["clean-styles"], function() {
    log("*** Compiling Stylus to CSS");
    return gulp.src(config.stylus)
        .pipe($.plumber())
        .pipe($.stylus())
        .pipe($.autoprefixer({ browsers: ["Last 2 version", "> 5%"] }))
        .pipe(gulp.dest(config.css));
});

gulp.task("lint", function() {
    log("*** Linting all JS files");
    return gulp.src(config.js)
        .pipe($.if(args.verbose, $.print()))
        .pipe($.jshint())
        .pipe($.jshint.reporter("jshint-stylish", { verbose: true }))
        .pipe($.jshint.reporter("fail"));
});

gulp.task("wiredep", ["lint", "styles"], function() {
    log("*** Wiring up bower css, js and custom js files into the index.html file");
    var wiredep = require("wiredep").stream,
        options = config.getWiredepDefaultOptions();

    return gulp.src(config.index)
        .pipe(wiredep(options))
        .pipe($.inject(gulp.src(config.js)))
        .pipe(gulp.dest(config.client));
});

gulp.task("templatecache", function() {

    log("Creating Angular template cache.");
    return gulp.src(config.htmlTemplates)
        .pipe($.htmlmin({ collapseWhitespace: true }))
        .pipe($.angularTemplatecache(
            config.templateCache.file,
            config.templateCache.options
        ))
        .pipe(gulp.dest(config.temp));
});


gulp.task("inject", ["wiredep", "templatecache"], function() {
    log("*** Injecting custom css files.");
    return gulp.src(config.index)
        .pipe($.inject(gulp.src(config.css + "**/*.css")))
        .pipe(gulp.dest(config.client));
});


gulp.task("optimize", ["inject", "fonts", "images"], function() {

    log("*** Optimizing the javascripts, css and html");
    var assets = $.useref.assets({ searchPath: config.root });
    var templateCache = config.temp + config.templateCache.file;
    var cssFilter = $.filter("**/*.css", { restore: true });
    var jsLibFilter = $.filter("**/" + config.optimized.lib, { restore: true });
    var jsAppFilter = $.filter("**/" + config.optimized.app, { restore: true });

    return gulp.src(config.index)
        .pipe($.plumber())
        .pipe($.inject(
            gulp.src(templateCache, {read: false}), {
            starttag: "<!-- inject:templates.js -->"
        }))
        .pipe(assets)
        .pipe(cssFilter)
        .pipe($.csso())
        .pipe(cssFilter.restore())
        .pipe(jsLibFilter)
        .pipe($.uglify())
        .pipe(jsLibFilter.restore())
        .pipe(jsAppFilter)
        .pipe($.ngAnnotate())
        .pipe($.uglify())
        .pipe(jsAppFilter.restore())
        .pipe($.rev())
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe($.revReplace())
        .pipe(gulp.dest(config.dist))
        .pipe($.rev.manifest())
        .pipe(gulp.dest(config.dist));
});

gulp.task("build", ["optimize", "images", "fonts"], function(done) {
    log("Building all assets and compiling all scripts");
    del(config.temp).then(function() {
        done();
    });
});

gulp.task("bump", function() {
    var msg = "Bumping versions";
    var type = args.type;
    var version = args.version;
    var options = { };

    if (version) {
        options.version = version;
        msg += " to " + version;
    } else {
        options.type = type;
        msg += " for a " + type;
    }
    log(msg);
    return gulp.src(config.packages)
        .pipe($.bump(options))
        .pipe(gulp.dest(config.root));
});

/**
 * Run specs once and exit
 * To start servers and run midway specs as well:
 *    gulp test --startServers
 * @return {Stream}
 */
gulp.task("test", ["lint", "templatecache"], function(done) {
    startTests(true /*singleRun*/ , done);
});

/**
 * Run specs and wait.
 * Watch for file changes and re-run tests on each change
 * To start servers and run midway specs as well:
 *    gulp autotest --startServers
 */
gulp.task("autotest", function(done) {
    startTests(false /*singleRun*/ , done);
});

/**
 * Run the spec runner
 * @return {Stream}
 */
gulp.task("serve-specs", ["build-specs"], function(done) {
    log("run the spec runner");
    serve(true /* isDev */ , true /* specRunner */ );
    done();
});

/**
 * Inject all the spec files into the specs.html
 * @return {Stream}
 */
gulp.task("build-specs", ["templatecache"], function(done) {
    log("building the spec runner");

    var wiredep = require("wiredep").stream;
    var templateCache = config.temp + config.templateCache.file;
    var options = config.getWiredepDefaultOptions();
    var specs = config.specs;

    options.devDependencies = true;

    if (args.startServers) {
        specs = [].concat(specs, config.serverIntegrationSpecs);
    }

    return gulp
        .src(config.specRunner)
        .pipe(wiredep(options))
        .pipe($.inject(gulp.src(config.testlibraries), {
            name: "inject:testlibraries",
            read: false
        }))
        .pipe($.inject(gulp.src(config.js)))
        .pipe($.inject(gulp.src(specs), {
            name: "inject:specs",
            read: false
        }))
        .pipe($.inject(gulp.src(config.temp + config.templateCache.file), {
            name: "inject:templates",
            read: false
        }))
        .pipe(gulp.dest(config.client));
});


gulp.task("serve", ["serve-dev"]);
gulp.task("serve-build", ["build"], function(isDev) {
    serve(false /* isDev */ );
});
gulp.task("serve-dev", ["inject"], function() {
    serve(true /* isDev */ );
});

function serve(isDev, specRunner) {
    var options = {
        script: config.nodeServer,
        delayTime: 1,
        env: {
            "PORT": config.port,
            "NODE_ENV": isDev ? "dev" : "production"
        },
        watch: [config.server]
    };

    $.nodemon(options)
        .on("restart", function(ev) {
            log("*** nodemon restarted.");
            log("files changed on restart: " + ev);

            setTimeout(function() {
                browserSync.notify("Reloading now...");
                browserSync.reload({ stream: false });
            }, config.browserReloadDelay);
        })
        .on("start", function() {
            log("*** nodemon started.");
            startBrowserSync(isDev, specRunner);
        })
        .on("crash", function() {
            log("*** nodemon crashed due to unexpected reason(s).");
        })
        .on("exit", function() {
            log("*** nodemon exited successfully!.");
        });
}

// Utilities Functions

function changeEvent(event) {
    var srcPattern = new RegExp("/.*(?=/" + config.source + ")/");
    log("File " + event.path.replace(srcPattern, "") + " " + event.type);
}

function startBrowserSync(isDev, specRunner) {
    log("*** Starting browser sync");
    if (browserSync.active || args.nosync) {
        return;
    }

    if (isDev) {
        gulp.watch([config.stylus], ["styles"])
            .on("change", function(event) {
                changeEvent(event);
            });
    } else {
        gulp.watch([config.styles, config.js, config.html], ["optimize", browserSync.reload])
            .on("change", function(event) {
                changeEvent(event);
            });
    }

    var options = {
        proxy: "localhost:" + config.port,
        port: 8000,
        files: isDev ? [
            config.client + "**/*.*",
            "!" + config.styles,
            config.css + "**/*.css"
        ] : [],
        ghostMode: {
            clicks: true,
            scroll: true,
            location: false,
            forms: true
        },
        injectChanges: true,
        logFileChanges: true,
        logLevel: "debug",
        logPrefix: "gulp-bs",
        notify: true,
        reloadDelay: 1,
    };

    if (specRunner) {
        options.startPath = config.specRunner;
    }
    browserSync(options);
}

function startTests(singleRun, done) {
    var child;
    var excludeFiles = [];
    var fork = require("child_process").fork;
    var karma = require("karma").server;
    var serverSpecs = config.serverIntegrationSpecs;

    if (args.startServers) {
        log("Starting servers");
        var savedEnv = process.env;
        savedEnv.NODE_ENV = "dev";
        savedEnv.PORT = 8888;
        child = fork(config.nodeServer);
    } else {
        if (serverSpecs && serverSpecs.length) {
            excludeFiles = serverSpecs;
        }
    }

    karma.start({
        configFile: __dirname + "/karma.conf.js",
        exclude: excludeFiles,
        singleRun: !!singleRun
    }, karmaCompleted);

    ////////////////

    function karmaCompleted(karmaResult) {
        log("Karma completed");
        if (child) {
            log("shutting down the child process");
            child.kill();
        }
        if (karmaResult === 1) {
            done("karma: tests failed with code " + karmaResult);
        } else {
            done();
        }
    }
}

function clean(path, done) {
    del(path).then(function() {
        log("Cleaning: " + $.util.colors.blue(path));
        done();
    });
}

function log(msg) {
    if (typeof msg === "object") {
        for (var item in msg) {
            if (item.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(msg[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(msg));
    }
}
