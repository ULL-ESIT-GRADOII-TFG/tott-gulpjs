tott-gulpjs
===========

What is this?
-------------

This is an example project used for the gulp.js Tools of the Trade session.

Getting Started
---------------

After forking/cloning this git repository, you should have the following folders and files:

    |-src/                  # has jade templates that need to be rendered to html
    	|-includes/         # jade templates that should not generate pages
    		|-layout.jade   # the layout file for all of the web pages
    	|-about.jade        # the about page
    	|-index.jade        # the index page
    |-bower.json            # has bower dependencies (bootstrap)
    |-package.json          # has npm dependencies (gulp/plugins/utils)
    |-preview.js            # a simple static file server coded with express.js, can be useful for local preview
    |-readme.md             # the thing you are reading

You should first install the dependencies by running a `bower install` while your current working directory is the root folder of this project. This will retrieve jquery and bootstrap (this project only requires bootstrap) and place them in the `bower_components` folder.

Next, you should make sure you install the npm dependencies by running a `npm install` also inside the root folder of this project.