'use strict';

const through = require("through2");
const Vinyl = require('vinyl');
const PluginError = require('plugin-error');
const rs = require('replacestream');

const anyrepalce = function (callback, _replacement) {
  var PLUGIN_NAME = 'gulp-anyrepalce';
  return through.obj(function (file, enc, cb) {
    if (file.isNull()) {
      cb(null, file);
      return;
    }
    if (file.isStream()) {
      file.contents = file.contents.pipe(rs(callback, replacement));
      return cb(null, file);
    }

    file = new Vinyl(file);
    if (callback instanceof RegExp) {
      let replacement = _replacement;
      if (typeof _replacement === 'function') {
        replacement = _replacement.bind({ file: file });
      }
      file.contents = Buffer.from(String(file.contents).replace(callback, replacement));
    } else if (typeof callback == 'function') {
      file.contents = Buffer.from(callback(String(file.contents)));
    } else {
      cb(new PluginError(PLUGIN_NAME, 'Option just support fucntion or regexp'));
      return;
    }
    cb(null, file);
  })
}
module.exports = anyrepalce;