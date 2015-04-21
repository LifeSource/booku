var gulp = require("gulp"),
    watch = require("gulp-watch"),
    jshint = require("gulp-jshint"),
    concat = require("gulp-concat"),
    uglify = require("gulp-uglify"),
    nodemon = require("gulp-nodemon");

var config = require("./gulp.config");

gulp.task("default", function() {

	nodemon({
		file: "server.js",
		ext: "js jade styl html css",
		ignore: [config.jsVendor]
	});
});
