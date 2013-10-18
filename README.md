dannyp.net
==========

This is the git repo for my public website hosted at [http://dannyp.net](http://dannyp.net)

## Prerequisites
- Node.JS (for npm)
- Grunt
- Bower 

## Getting Started (developers)
1. Clone this git repository.
2. Open a terminal window to run node.js commands.
3. Run `npm install` to download and install grunt.
4. Run `bower install` to download and install all required dependencies.
5. Run `grunt`. This will export all needed files to the the /build directory.
6. The website can be accessed from the build/ directory.

## Deployment
Assumes that steps above have been run
1. Run `grunt deploy`.
2. Upload to hosting provider.