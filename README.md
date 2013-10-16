dannyp.net
==========

This is the git repo for my public website hosted at [http://dannyp.net](http://dannyp.net)

## Prerequisites
- Node.JS (specifically npm)
- Grunt
- Bower (used for development only).

## Getting Started
1. Clone this git repository.
2. Open a terminal window to run node.js commands.
3. Run `npm install` to download and install grunt.
4. Run `bower install` to download and install all required dependencies.
5. Run `grunt init`. This will copy dependencies from the bower_components directory to the src directory.
6. Run `grunt`. This will compile the less to css and minify the javascript and create the /build directory.
7. The website can be accessed from the build/ directory.