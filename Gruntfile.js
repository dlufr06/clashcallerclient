/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            bower: {
                files: [
                    {src: 'public_html/bower_components/bootstrap/dist/css/bootstrap.min.css', dest: 'public_html/css/bootstrap.min.css'},
                    {src: 'public_html/bower_components/bootstrap/dist/js/bootstrap.min.js', dest: 'public_html/js/bootstrap.min.js'},
                    {src: 'public_html/bower_components/jquery/dist/jquery.min.js', dest: 'public_html/js/jquery.min.js'},
                    {src: 'public_html/bower_components/mustache.js/mustache.min.js', dest: 'public_html/js/mustache.min.js'}
                ]
            }
        },
        uglify: {
            options: {
                mangle: false //behåll inte variabelnamn
            },
            war: {
                files: {
                    'public_html/js/script.min.js': [
                        'public_html/src/js/script.js',
                        'public_html/src/js/basenr_image.js',
                        'public_html/src/js/url.js',
                        'public_html/src/js/updatewar.js'
                    ]
                }
            },
            index:{
                  files: {
                    'public_html/js/index.min.js': [
                        'public_html/src/js/createwar.js',
                        'public_html/src/js/joinwar.js'
                    ]
                }
            }
        }, //end uglify
        cssmin: {
            war: {
                files: {
                    'public_html/css/war.min.css': ['public_html/src/css/war.css']
                }
            },
            index:{
                 files: {
                    'public_html/css/index.min.css': ['public_html/src/css/index.css']
                }
            }
        } //end cssmin
    });

    //ladda plugins
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('build', ['copy', 'uglify', 'cssmin']);

};
