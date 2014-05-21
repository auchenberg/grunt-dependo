/*
 * Grunt Task File
 * ---------------
 *
 * Task: dependo
 * Description: Generate graph for CommonJS or AMD module dependencies.
 *
 */

'use strict';

module.exports = function (grunt) {

    grunt.registerMultiTask("dependo", "Run dependo", function () {

        var Dependo = require("dependo");
        var path = require('path');
        var options = this.options({
            outputPath: './',
            fileName: 'index.html',
            format: 'amd',
            targetPath: './',
            exclude: ''
        });

        // Paths
        var targetPath = grunt.file.isPathAbsolute(options.targetPath) ? options.targetPath : path.resolve(options.targetPath);
        var baseOutputPath = grunt.file.isPathAbsolute(options.outputPath) ? options.outputPath : path.resolve(options.outputPath);
        var outputPath = path.join(baseOutputPath, options.fileName);

        // Fire up an dependo instance
        var dependo = new Dependo(targetPath, options);

        // Write HTML
        var html = dependo.generateHtml();
        grunt.file.write(outputPath, html);

        // Done
        grunt.log.ok("Generated graph into " + outputPath + " - Check.");

    });

};
