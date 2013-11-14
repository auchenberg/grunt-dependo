/*
 * Grunt Task File
 * ---------------
 *
 * Task: dependo
 * Description: Generate graph for CommonJS or AMD module dependencies.
 *
 */

'use strict';

module.exports = function(grunt) {

  grunt.registerMultiTask("dependo", "Run dependo", function() {

    var Dependo = require("dependo");
    var path = require('path');
    var config = grunt.config('dependo');

    // Paths
    var targetPath = grunt.file.isPathAbsolute(config.targetPath) ? config.targetPath : path.resolve(config.targetPath);
    var baseOutputPath = grunt.file.isPathAbsolute(config.outputPath) ? config.outputPath : path.resolve(config.outputPath);
    var outputFilename = config.outputFilename || 'index.html';
    var outputPath = path.join(baseOutputPath, outputFilename);


    // Fire up an dependo instance
    var dependo = new Dependo(targetPath, {
      format: config.format,
      exclude: config.exclude
    });

    // Write HTML
    var html = dependo.generateHtml();
    grunt.file.write(outputPath, html);

    // Done
    grunt.log.ok("Generated graph into " + outputPath + " - Check.");

  });

};
