'use strict';

const through = require("through2");
const Vinyl = require('vinyl');
const PluginError = require('plugin-error');

const anyrepalce = function (callback) {
  var PLUGIN_NAME = 'gulp-anyrepalce';
  return through.obj(function (file, enc, cb) {
    if (file.isNull()) {
      cb(null, file);
      return;
    }
    if (file.isStream()) {
      cb(new PluginError(PLUGIN_NAME, 'Streaming not supported'));
      return;
    }
    file = new Vinyl(file);
    var fileContents = file.contents.toString('utf8');

    const result = callback(fileContents);
    if (result) {
      file.contents = Buffer.from(result);
    }
    this.push(file);
    cb();
  })
}
module.exports = anyrepalce;