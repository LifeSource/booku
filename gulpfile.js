var gulp = require("gulp"),
	del = require("del"),
	args = require("yargs").argv,
	wiredep = require("wiredep"),
	browserSync = require("browser-sync");

var $ = require("gulp-load-plugins")({ lazy: true });
var config = require("./gulp.config")();
var port = process.env.PORT || 3000;

gulp.task("default", ["help"]);
gulp.task("help", $.taskListing);

// Linting
gulp.task("lint", function () {
	log("*** Linting scripts for errors");
	return gulp.src(config.alljs)
		.pipe($.jshint())
		.pipe($.jshint.reporter("jshint-stylish", {verbose: true}))
		.pipe($.jshint.reporter("fail"));
});

// Stylesheets
gulp.task("styles", ["clean-styles"], function () {
	log("*** Compiling Stylus --> CSS");
	return gulp.src(config.stylus)
		.pipe($.plumber())
		.pipe($.stylus())
		.pipe(gulp.dest(config.css));
});

gulp.task("watch-styles", function () {
	gulp.watch(config.stylus, ["styles"]);
});

// fonts
gulp.task("fonts", ["clean-fonts"], function () {
	log("*** Copying fonts");
	return gulp.src(config.fonts)
		.pipe(gulp.dest(config.dist + "fonts"));
});

// images
gulp.task("images", ["clean-images"], function () {
	log("*** Copying  and compression the images");	
	return gulp.src(config.images)
		.pipe($.imagemin({ optimizationlevel: 4 }))
		.pipe(gulp.dest(config.build + "images"));
});

gulp.task("clean", function (done) {
	var delconfig = [].concat(config.dist, config.css);
	log("Cleaning: " +  $.util.colors.blue(delconfig));
	del(delconfig, done);
});

gulp.task("clean-fonts", function (done) {
	log("*** Cleaning out the fonts");
	clean(config.dist + "fonts/**/*.*", done);
});

gulp.task("clean-images", function (done) {
	log("*** Cleaning out the images");
	clean(config.dist + "images/**/*.*", done);
});

gulp.task("clean-styles", function (done) {
	log("*** Cleaning out the css");
	clean(config.css + "**/*.*", done);
});

// Wiring up dependencies
gulp.task("wiredep", ["styles"], function () {
	log("*** Wire up bower css js and custom js");

	var wiredep = require("wiredep").stream,
        options = config.getWiredepDefaultOptions();

	return gulp.src(config.index)
		.pipe(wiredep(options))
		.pipe($.inject(gulp.src(config.js)))
		.pipe(gulp.dest(config.client));
});

gulp.task("inject", ["wiredep"], function () {
	return gulp.src(config.index)
		.pipe($.inject(gulp.src(config.css + "**/*.css")))
		.pipe(gulp.dest(config.client));
});

// tests
gulp.task("test", ["lint"], function () {
	startTest(true, done);
});

// Serve to production and development environment
gulp.task("serve", ["serve-dev"]);

gulp.task("serve-dev", ["inject"], function () {
    serve(true);
});

gulp.task("serve-build", ["optimize"], function () {
    serve(false);
});

function serve(isDev) { 

	return $.nodemon({
		script: config.nodeServer,
		delayTime: 1,
		env: { 
			"PORT": config.port,
			"NODE_ENV" : isDev ? "dev" : "production" 
		},
		watch: [config.server]
	})
	.on("restart", function (ev) {
		log("*** nodemon restarted");
		log("files changed on restart:\n" + ev);
		setTimeout(function () {
			browserSync.notify("reloading now ...");
			browserSync.reload({ stream: false });
		}, config.browserReloadDelay);
	})
	.on("start", function () {
		log("*** nodemon started.");
		startBrowserSync(isDev);
	})
	.on("crash", function () {
		log("*** nodemon crashed: script crashed for some reason");
	})
	.on("exit", function () {
		log("*** nodemon exited cleanly");
	});
}

// --------------------------------------------------------
// Utility Functions
// --------------------------------------------------------

function clean(path, done) {
	del(path, done);	
}

function log(msg) {
	if (typeof(msg) === 'object') {
		for (var item in msg) {
			if (msg.hasOwnProperty(item)) {
				$.util.log($.util.colors.blue(msg[item]));
			}		
		}
	} else {
		$.util.log($.util.colors.blue(msg));	
	}
}

function changeEvent(event) {
	var srcPattern = new RegExp("/.*(?=/" + config.server + ")/");	
	log("File " + event.path.replace(srcPattern, "") + " " + event.type);
}

function startBrowserSync(isDev) {
	if (args.nosync || browserSync.active) {
		return;
	}
	
	log("Starting browser-sync on port " + config.port);

    if (isDev) {
        gulp.watch(config.styles + "**/*.styl", ["styles"])
            .on("change", function (event) { changeEvent(event); });
    } else {

    }

	var options = {
		proxy: "localhost:" + config.port,
		port: 8000,
		files: [
			config.client + "**/*.*" 
		],
		ghostMode: {
			clicks: true,
			forms: true,
			scroll: true
		},
		injectChanges: true,
		logFileChanges: true,
		logLevel: "debug",
		logPrefix: "gulp-patterns",
		notify: true,
		reloadDelay: 1000 
	};

	browserSync(options);
}

function startTests(singleRun, done) {
	
	var karma = require("karma").server;
	var excludeFiles = [];
	var serverSpecs = config.serverIntegrationSpecs;

	excludeFiles = serverSpecs;

	karma.start({
		configFile: __dirname + "/karma.config/js",
		exclude: execludeFiles,
		singleRun: !!singleRun
	}, karmaCompleted);
	
	function karmaCompleted(karmaResult) {
		log("Karma completed!");
		if (karmaResult === 1) {
			done("karma: tess failed with code " + karmaResult);
		} else {
			done();
		}
	}
}
