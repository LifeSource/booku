var gulp = require("gulp"),
	browserSync = require("browser-sync"),
	reload = browserSync.reload;

var $ = require("gulp-load-plugins")({ lazy: true });
var config = require("./gulp.config")();

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
	.on("restart", function () {
	});
});

gulp.task("default", ["minify","watch", "dev"]);
