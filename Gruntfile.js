module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.initConfig({
        bower : {
            update : {
                options : {
                    cleanBowerDir : false,
                    copy          : false,
                    install       : true,
                    verbose       : true
                }
            }
        },

        clean : {
            bower : ['bower_components']
        }
    });

    grunt.registerTask('update', [
        'clean:bower',
        'bower:update'
    ]);

    grunt.registerTask('build', [
    ]);
};
