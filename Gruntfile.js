module.exports = function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // browserify: {
    //     dist: {
    //         files: {
    //             // destination for transpiled js : source js
    //             'dist/myproject.js': 'src/index.es6'
    //         },
    //         options: {
    //             transform: [['babelify', { presets: "es2015" }]],
    //             browserifyOptions: {
    //                 debug: true
    //             }
    //         }
    //     }
    // },
    uglify: {
      build: {
        src: ['client/scripts/*.js',
              'client/scripts/**/*.js'],
        dest: 'server/public/scripts/client.min.js'
      }
    },
    copy: {
      html: {
        expand: true,
        cwd: 'client/views',
        src: ['index.html',
              '**/*.html'],
        dest: 'server/public/views/'
      },
      css: {
        expand: true,
        cwd: 'client/styles',
        src: ['style.css'],
        dest: 'server/public/styles/'
      },
      angular: {
        expand: true,
        cwd: 'node_modules/angular/',
        src: ['angular.js',
              'angular.min.js',
              'angular.min.js.map'],
        dest: 'server/public/vendors/angular/'
      },
      angularRoute: {
        expand: true,
        cwd: 'node_modules/angular-route/',
        src: ['angular-route.js',
              'angular-route.min.js',
              'angular-route.min.js.map'],
        dest: 'server/public/vendors/angular-route/'
      },
   }, // end copy
    watch: {
      files: [
        'client/**/*.*'
      ],
      tasks: ['uglify', 'copy']
    }
  });

  // grunt.loadNpmTasks('browserify:dist');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['uglify', 'copy', 'watch']);
};
