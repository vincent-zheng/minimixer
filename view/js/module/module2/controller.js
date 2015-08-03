var fs = require('fs');

var nextButtonFunc = function () {
    var selector_checkbox = $('form input:checked');
    var select_arr = [];
    selector_checkbox.each(function () {
        select_arr.push(
            $(this).val()
        );
    });
    localStorage.setItem('modules', select_arr);
    location.href = '#module3';
};

var preButtonFunc = function () {
    history.go(-1);
}

var controller = function (appView) {
    var tpl = fs.readFileSync(__dirname + '/tpl.html', { encoding: 'utf-8' });
    var library  = localStorage.getItem('library');
    var _module = require('./../../../../template/' + library + '/_module');
    console.log(_module);
    appView.html($.template(tpl, {
        module: _module.modules
    }));
    $('#pre-button').bind('click', preButtonFunc);
    $('#next-button').bind('click', nextButtonFunc);
};

controller.onroutechange = function () {
    $('#pre-button').unbind('click', preButtonFunc);
    $('#next-button').unbind('click', nextButtonFunc);
};

module.exports = controller;