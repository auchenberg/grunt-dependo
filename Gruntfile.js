module.exports = function (grunt) {

    grunt.initConfig({

        dependo: {
            main: {
                fileName: 'main.html'
            },
            options: {
                targetPath: '/Users/auchenberg/Development/example-multipage/www',
                outputPath: './',
                fileName : 'dependencies.html',
                format: 'amd'
            }
        }

    });

    grunt.loadTasks('tasks');


};
