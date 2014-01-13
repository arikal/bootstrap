module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');

    grunt.initConfig({
        bower : {
            update : {
                options : {
                    cleanBowerDir : false,
                    copy          : false,
                    install       : true
                }
            }
        },

        clean : {
            bower : ['bower_components/'],
            dist  : ['dist/']
        },

        copy : {
            bootstrap : {
                files : [
                    {
                        expand  : true,
                        flatten : true,
                        src     : ['bower_components/bootstrap/dist/js/**'],
                        dest    : 'dist/js/',
                        filter  : 'isFile'
                    }, {
                        expand  : true,
                        flatten : true,
                        src     : ['bower_components/bootstrap/dist/fonts/**'],
                        dest    : 'dist/fonts',
                        filter  : 'isFile'
                    }
                ]
            }
        },

        cssmin : {
            bootstrap : {
                options : {
                    keepSpecialComments : 0
                },
                files : {
                    'dist/css/bootstrap.min.css' : ['dist/css/bootstrap.css']
                }
            }
        },

        less : {
            bootstrap : {
                options : {
                    cleancss : false
                },
                files : {
                    'dist/css/bootstrap.css' : 'src/bootstrap.less'
                }
            }
        }
    });

    grunt.registerTask('update', [
        'clean:bower',
        'bower:update'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'copy:bootstrap',
        'less:bootstrap',
        'cssmin:bootstrap'
    ]);
};
