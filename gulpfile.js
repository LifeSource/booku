var gulp = require("gulp"),
    args = require("yargs").argv;
var $ = require("gulp-load-plugins")({ lazy: true});

var config = require("./gulp.config")();

gulp.task("vet", function  () {
	return	gulp.src(config.allJs)
	//	.pipe(jscs())
		.pipe($.if(args.verbose, $.print()))
		.pipe($.jshint())
		.pipe($.jshint.reporter("jshint-stylish", { verbose: true }))
		.pipe($.jshint.reporter("fail"));
});

gulp.task("default", function() {

	nodemon({
		file: "server.js",
		ext: "js jade styl html css",
		ignore: [config.jsVendor]
	});
});
