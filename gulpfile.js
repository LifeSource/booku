var gulp = require("gulp"),
	browserSync = require("browser-sync"),
	reload = browserSync.reload;

var $ = require("gulp-load-plugins")({ lazy: true });
var config = require("./gulp.config")();

var port = process.env.PORT || 3000;

// Javascript minification
gulp.task("minify", function () {
	return gulp.src(config.clientApp + "**/*.js")
			.pipe($.uglify())
			.pipe(gulp.dest("./dist"));
});

// CSS pre-processing
gulp.task("styles", function () {
	return gulp.src(config.styles + "**/*.styl")
			.pipe($.stylus())
			.pipe(gulp.dest(config.styles));
});

gulp.task("watch", function () {
	gulp.watch(config.styles + "**/*.styl", ["styles"]);
	gulp.watch(config.server + "views/**/*.jade", reload);
	gulp.watch(config.clientApp + "**/*.js", ["minify"]);
});

// nodemon
gulp.task("dev", function () {
	return $.nodemon({
		script: config.server + "server.js",
		ext: config.extensions,
		env: { "NODE_ENV" : "development" },
		ignore: config.ignores
	})
	.on("restart", function (ev) {
		log("*** nodemon restarted");
		log("files changed on restart:\n" + ev);
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

gulp.task("default", ["minify","watch", "dev"]);

// --------------------------------------------------------
// Utility Functions
// --------------------------------------------------------

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
	if (browserSync.active) {
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
			"!" + config.styles + "site.styl",
			config.styles + "**/*.css"
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
		reloadDelay: 0 
	};

	browserSync(options);
}
