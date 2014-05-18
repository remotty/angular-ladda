module.exports = function(grunt) {

  // load packages
  grunt.loadNpmTasks('grunt-ngmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: ['src/**/*.js']
    },
    ngmin: {
      directives: {
        expand: true,
        cwd: 'src',
        src: ['angular-ladda.js'],
        dest: '.tmp'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= pkg.version %> */\n'
      },
      build: {
        src: '.tmp/<%= pkg.name %>.js',
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    }
  });

  grunt.registerTask('default', [
    'ngmin',
    'uglify'
  ]);

  grunt.registerTask('test', [
    'jshint'
  ]);
};