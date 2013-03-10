module.exports = function(grunt) {

  grunt.initConfig({

    dependo: {
      targetPath: '/Users/auchenberg/Development/example-multipage/www',
      outputPath: './example',
      format: 'amd'
    }

  });

  grunt.loadTasks('tasks');


};
