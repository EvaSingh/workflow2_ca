module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'dist/css/styles.css' : 'sass/styles.scss'
                }
            }
        },
                     
        cssmin: {
           minify: {
               src: 'dist/css/styles.css',
               dest: 'dist/css/minified/style.min.css'
           }
       },
                   
        watch: {
            css: {
                files: 'sass/styles.scss',
                tasks: ['sass', 'cssmin']   
            }
        },

        browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'dist/css/*.css',
                        'dist/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './'
                }
            }
        },

        imagemin: {
            jpgs: {
                options: {
                    progressive: true
                },
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['*.jpg', '*.png'],
                    dest: 'dist/images/'
                }]
            }
        }
  });
    
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-browser-sync');
    
  grunt.registerTask('default', ['browserSync', 'watch']);
};