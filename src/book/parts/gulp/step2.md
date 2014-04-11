# Define some tasks

The first step is to create a `gulpfile.js` at the root of the 
project with the following contents:

```
var gulp = require('gulp'),
	preview = require('./preview');

gulp.task('build', function() {
	// build jade templates
	// build less files
	// copy any assets we need to the output dir
});

gulp.task('serve', function() {
	// start up the preview server
	preview.serve(3434, '../');

	// watch for file changes
});

gulp.task('default', function() {

});
```

Now, it's time to write the code for these different tasks.

## Jade Templates

Install the [gulp-jade](https://www.npmjs.org/package/gulp-jade) plugin.
The readme has plenty of information for implementing this build step in
the build task.

## Less files

Simply put, Less is a css preprocessor. It extends the css language with 
a few features, like variables and mixins.

Install the [gulp-less](https://www.npmjs.org/package/gulp-less) plugin.
Put this code below the code for the jade templates.

## Livereload

Livereload watches for changes in your files and then refreshes your 
browsers view of them. This step requires that you install a browser 
plugin to see the reloads.

Install the [gulp-livereload](https://www.npmjs.org/package/gulp-livereload)
plugin. Put this code at the bottom of the `serve` task.