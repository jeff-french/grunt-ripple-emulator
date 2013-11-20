/*
 * grunt-ripple-emulator
 * https://github.com/jeff-french/grunt-ripple-emulator
 *
 * Copyright (c) 2013 Jeff French
 * Licensed under the MIT license.
 */

'use strict';
var ripple = require('ripple-emulator'),
    path = require('path'),
    open = require('open');

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('ripple', 'Grunt task for the ripple emulator for Cordova/PhoneGap projects.', function() {
      // Merge task-specific and/or target-specific options with these defaults.
      var options = this.options({
          path: 'www',
          keepAlive: false,
          open: true,
          port: 4400
      });

      var paths = [];
      paths.push(options.path);
      delete options.path;
      options.path = paths;

      var done = this.async();

      ripple.emulate.start(options);

      if(options.open){
          open('http://localhost:' + options.port + '?enableripple=cordova-3.0.0');
      }

      if(!options.keepAlive){
          done();
      } else {
          grunt.log.writeln('Waiting...');
          grunt.log.writeln('(Press Ctrl+C to exit)');
      }
  });

};
