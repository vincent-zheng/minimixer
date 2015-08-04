var template = require('./../../libs/template');
var fs = require('fs');
var exec = require('child_process').exec;

module.exports = function (options) {
    var _template = fs.readFileSync(__dirname + '/_gulpfile.tpl', {
        encoding: 'utf-8'
    });
    fs.writeFileSync(__dirname + '/gulpfile.js' ,template(_template, options));
    exec('cd ' + __dirname + ' & gulp build');
};