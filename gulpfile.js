var gulp = require("gulp"),
	del = require("del"),
	args = require("yargs").argv,
	wiredep = require("wiredep"),
	runSequence = require("run-sequence"),
	browserSync = require("browser-sync");

var $ = require("gulp-load-plugins")({ lazy: true });
var config = require("./gulp.config")();
var port = process.env.PORT || 3000;

gulp.task("default", ["build"]);
gulp.task("help", $.taskListing);

gulp.task("build", function (done) {
	runSequence("lint",
		"jade", "dev", done);
});

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

gulp.task("clean-styles", function (done) {
	log("*** Cleaning out the css");
	clean(config.css + "**/*.*", done);
});

// Jade templates
gulp.task("jade", ["clean-jade"], function () {
	log("*** Compiling Jade --> HTML");
	return gulp.src(config.jade)
		.pipe($.plumber())
		.pipe($.jade({ 
			pretty: true 
		}))
		.pipe(gulp.dest(config.client));
});

gulp.task("clean-jade", function (done) {
	log("*** Cleaning out the html files");
	clean(config.client + "**/*.html", done);
});

// Wiring up dependencies
gulp.task("wiredep", ["jade"], function () {
	log("*** Wire up bower css js and custom js");

	var wiredep = require("wiredep").stream;
	var options = config.getWiredepDefaultOptions();

	return gulp.src(config.index)
		.pipe(wiredep(options))
		.pipe($.inject(gulp.src(config.js)))
		.pipe(gulp.dest(config.client));
});

gulp.task("inject", ["wiredep", "styles"], function () {
	return gulp.src(config.index)
		.pipe($.inject(gulp.src(config.siteCss)))
		.pipe(gulp.dest(config.client));
});

// nodemon
gulp.task("dev", ["inject"], function () {

	var isDev = true;

	return $.nodemon({
		script: config.server + "server.js",
		ext: config.extensions,
		env: { 
			"PORT": config.port,
			"NODE_ENV" : isDev ? "development" : "production" 
		},
		watch: [config.server],
		ignore: config.ignore
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
		startBrowserSync();
	})
	.on("crash", function () {
		log("*** nodemon crashed: script crashed for some reason");
	})
	.on("exit", function () {
		log("*** nodemon exited cleanly");
	});
});

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

function startBrowserSync() {
	if (args.nosync || browserSync.active) {
		return;
	}
	
	log("Starting browser-sync on port " + port);

	gulp.watch(config.styles + "**/*.styl", ["styles"])
		.on("change", function (event) {
			changeEvent(event);
		});

	var options = {
		proxy: "localhost:" + port,
		port: 8000,
		files: [
			config.client + "**/*.*", 
			config.client + "**/*.jade",
			config.views + "**/*.*",
			"!" + config.stylus,
			config.css + "**/*.css"
		],
		ghostMode: {
			clicks: true,
			location: false,
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
