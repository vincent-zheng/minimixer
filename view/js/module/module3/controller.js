var fs = require('fs');

var generate = function (dir) {

    var options = {};
    var library = localStorage.getItem('library');
    var _module = require('./../../../../template/' + library + '/_module');
    options.modules = localStorage.getItem('modules').split(',');
    options.core = _module.core;
    options.dependencies = _module.dependencies;
    options.dir = dir;
    var _ = require('./../../../../template/' + library + '/_');
    if (typeof _ === 'function') {
        _(options);
    }
};

var preButtonFunc = function () {
    history.go(-1);
};

var generateButtonFunc = function () {
    var dir = $('#path-input').val();
    if (!dir) {
        alert('没有选择目录');
        return false;
    }
    dir = dir.replace(/\\/g, '/');
    generate(dir);
    alert('success');
};

var controller = function (appView) {
    var _template = fs.readFileSync(__dirname + '/tmpl.html', {
        encoding: 'utf-8'
    });

    appView.html($.template(
        _template,
        {

        }
    ));

    $('#pre-button').bind('click', preButtonFunc);
    $('#generate-button').bind('click', generateButtonFunc);
};

controller.onroutechange = function () {
    $('#pre-button').unbind('click', preButtonFunc);
    $('#generate-button').unbind('click', generateButtonFunc);
};

module.exports = controller;