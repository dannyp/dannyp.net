module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      main: {
        files: [
          {expand: true, cwd: 'bower_components/bootstrap/', src: ['less/*.less',  'img/*'], dest: 'src/', filter: 'isFile'}, // includes files in path
          {expand: true, cwd: 'bower_components/bootstrap/js/', src: ['*.js'], dest: 'src/js/bootstrap/', filter: 'isFile'}, // includes files in path
          {expand: true, cwd: 'bower_components/font-awesome/', src: ['less/*.less'], dest: 'src/less/font-awesome', filter: 'isFile'}, // includes files in path
          {expand: true, cwd: 'bower_components/font-awesome/', src: [ 'font/*'], dest: 'src/', filter: 'isFile'}, // includes files in path
          {expand: true, cwd: 'bower_components/jquery/', src: ['jquery.js'], dest: 'src/js/', filter: 'isFile'}
          
          //{src: ['path/**'], dest: 'dest/'}, // includes files in path and its subdirs
          //{expand: true, cwd: 'path/', src: ['**'], dest: 'dest/'}, // makes all src relative t cwd
          //{expand: true, flatten: true, src: ['path/**'], dest: 'dest/', filter: 'isFile'} // flattens results to a single level
        ]
      },
      build : {
        files : [
          {expand: true, cwd: 'src/', src: [ 'font/*'], dest: 'build/', filter: 'isFile' },
          {expand: true, cwd: 'src/', src: [ '*.html','*.png','*.txt'], dest: 'build/', filter: 'isFile' }
        ]
      },
      basic : {
        files : [
          {expand: true, cwd: 'bower_components/bootstrap/dist', src:['css/*', 'js/*'], dest:'build/', filter:'isFile'},
          {expand: true, cwd: 'bower_components/bootstrap/dist', src:['css/*', 'js/*'], dest:'build/', filter:'isFile'},
          {expand: true, cwd: 'bower_components/font-awesome/', src: [ 'font/*'], dest: 'build/', filter: 'isFile'}, 
          {expand: true, cwd: 'bower_components/chartjs/', src: [ '*.js'], dest: 'build/js/', filter: 'isFile'}, 
          {expand: true, cwd: 'bower_components/respond/', src:['respond.src.js'], dest:'build/js/', filter:'isFile'},
          {expand: true, cwd: 'bower_components/html5shiv/dist', src:['*.js'], dest:'build/js/', filter:'isFile'},
          {expand: true, cwd: 'src/', src:['*.html', '*.ico', 'img/*', 'js/*.js', 'css/*.css'], dest:'build/', filter:'isFile'},
          {expand: true, cwd: 'bower_components/jquery/', src: ['jquery.js'], dest: 'build/js/', filter: 'isFile'}
        ]
      }
      
    },
    concat: {
      options: {
        // define a string to put between each file in the concatenated output
        separator: ';'
      },
      dist: {
        // bootstrap{
        //   // the files to concatenate
        //   src: ['src/js/bootstrap/*.js'],
        //   // the location of the resulting JS file
        //   dest: 'build/js/bootstrap.js'
        // },
        // jquery{
        //   // the files to concatenate
        //   src: ['src/js/jquery.js'],
        //   // the location of the resulting JS file
        //   dest: 'build/js/jquery.js'
        // }
        files: {
          'build/js/ck/bootstrap.js': ['src/js/bootstrap/*.js'],
          'build/js/ck/jquery.js': ['src/js/jquery.js']
        }
        
      }
    },
    uglify: {
      options: {
        // the banner is inserted at the top of the output
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'build/js/min/bootstrap.min.js': ['build/js/ck/bootstrap.js'],
          'build/js/min/jquery.min.js': ['build/js/ck/jquery.js']
        }
      }
    },
    jshint: {
      // define the files t lint
      files: ['gruntfile.js'],
      // configure JSHint (documented at http://www.jshint.com/docs/)
      options: {
        // more options here if you want to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      }
    },
	replace : {
		"bootstrap-less" : {
			src : ['src/less/bootstrap.less'],
			dest : ['src/less/bootstrap.less'],
			replacements : [{
				from : 'glyphicons.less',
				to : 'font-awesome/less/font-awesome.less'
			}]
		}
	},
	less : {
		development : {
			options : {
				paths: ['build/less']
			},
			files : {
				'build/css/bootstrap.css' : ['src/less/bootstrap.less'],
				'build/css/font-awesome.css' : ['src/less/font-awesome/less/font-awesome.less']
			}
		},
		production : {
			options : {
				paths: ['build/less'],
				yuicompress : true
			},
			files : {
				'build/css/bootstrap-min.css' : ['src/less/bootstrap.less'],
				'build/css/font-awesome-min.css' : ['src/less/font-awesome/less/font-awesome.less']
			}
		}
	},
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'concat', 'uglify']
    }
  });
 
  // Load libs
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-text-replace');

  // Register the default tasks
//  grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'less', 'copy:build']);
  grunt.registerTask('default', ['copy:basic']);
 
  // Register building task
  grunt.registerTask('init', ['copy:main','replace']);
 
};
