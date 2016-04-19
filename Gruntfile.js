
var mozjpeg = require('imagemin-mozjpeg');

module.exports = function(grunt) {


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
                    'frontend-nanodegree-mobile-portfolio/dist/img/2048.png': 'frontend-nanodegree-mobile-portfolio/src/img/2048.png', // 'destination': 'source'
                    'frontend-nanodegree-mobile-portfolio/dist/img/cam_be_like.jpg': 'frontend-nanodegree-mobile-portfolio/src/img/cam_be_like.jpg', // 'destination': 'source'
                    'frontend-nanodegree-mobile-portfolio/dist/img/mobilewebdev.png': 'frontend-nanodegree-mobile-portfolio/src/img/mobilewebdev.png', // 'destination': 'source'
                    'frontend-nanodegree-mobile-portfolio/dist/img/profilepic.jpg': 'frontend-nanodegree-mobile-portfolio/src/img/profilepic.jpg', // 'destination': 'source'
                                    }
                 },
            //     dynamic: {                         // Another target
            //         files: [{
            //             expand: true,
            //             cwd: 'frontend-nanodegree-mobile-portfolio/src/img/',
            //             src: ['**/*.{png,jpg,gif,jpeg}'],
            //             dest: 'frontend-nanodegree-mobile-portfolio/dist/img/'
            //         }]
            // }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.registerTask('default', ['imagemin']);

}