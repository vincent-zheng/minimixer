var gutil = require('gulp-util');
var PluginError = gutil.PluginError;
var through = require('through2');

var PLUGIN_NAME = "ADDHEADER";

module.exports = function (_header, _footer) {
    function hehe (file, encoding, callback) {
        if (file.isNull()) {
            return callback(null, file);
        }
        if (file.isStream()) {
            return callback(new PluginError(PLUGIN_NAME, "Error"));
        }
        var header = new Buffer(
            _header 
        );
        var footer = new Buffer(
           _footer  
        );
        file.contents = Buffer.concat([header, file.contents]);
        file.contents = Buffer.concat([file.contents, footer]);
        callback(null, file);
    }
    return through.obj(hehe); 
};