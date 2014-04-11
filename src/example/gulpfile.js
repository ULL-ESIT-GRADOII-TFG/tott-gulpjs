var gulp = require('gulp'),
	gutil = require('gulp-util'),
	jade = require('gulp-jade'),
	less = require('gulp-less'),
	jshint = require('gulp-jshint'),
	stylish = require('jshint-stylish'),
	imgmin = require('gulp-imagemin');

var preview = require('./preview');

var cfg = {
	output: '../../example/',

	jade: 'src/*.jade',
	less: 'src/css/*.less',
	img: 'src/img/*'
};

gulp.task('build', function() {
	// clean previous build

	// render jade templates
	gulp.src(cfg.jade)
		.pipe(jade({
			data: {
				name: 'Michael Coleman',
				nickname: 'MC',
				portrait: 'img/ryan-gosling.jpg',
				github: 'Coalman',
				email: 'mkcolema@cs.unc.edu'
			}
		}))
		.pipe(gulp.dest(cfg.output));

	// process less files
	gulp.src(cfg.less)
		.pipe(less())
		.pipe(gulp.dest(cfg.output + 'css'));

	gulp.src('src/vendor/fontawesome/fonts/*')
		.pipe(gulp.dest(cfg.output + 'fonts'));

	gulp.src(cfg.img)
		.pipe(imgmin())
		.pipe(gulp.dest(cfg.output + 'img'));
});

gulp.task('serve', function() {
	preview.serve(3434, cfg.output);
});

gulp.task('lint', function() {
	gulp.src('gulpfile.js')
		.pipe(jshint())
		.pipe(jshint.reporter(stylish));
});

gulp.task('default', function() {
	console.log('Edit the gulpfile.js file!');
});