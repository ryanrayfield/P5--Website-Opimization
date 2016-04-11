
var mozjpeg = require('imagemin-mozjpeg');

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.initConfig({
        imagemin: {                          // Task
            static: {                          // Target
                options: {                       // Target options
                    optimizationLevel: 7,
                    svgoPlugins: [{ removeViewBox: false }],
                    use: [mozjpeg()]
                },
                files: {                         // Dictionary of files
                    'frontend-nanodegree-mobile-portfolio/dist/views/images/pizzeria.jpg': 'frontend-nanodegree-mobile-portfolio/src/views/images/pizzeria.jpg', // 'destination': 'source'
                    'frontend-nanodegree-mobile-portfolio/dist/views/images/pizza.png': 'frontend-nanodegree-mobile-portfolio/src/views/images/pizza.png', // 'destination': 'source'

                }
                // },
                // dynamic: {                         // Another target
                //     files: [{
                //         expand: true,
                //         cwd: 'frontend-nanodegree-mobile-portfolio/src/views/images/',
                //         src: ['**/*.{png,jpg,gif,jpeg}'],
                //         dest: 'frontend-nanodegree-mobile-portfolio/dist/views/images/'
                //     }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.registerTask('default', ['imagemin']);
}