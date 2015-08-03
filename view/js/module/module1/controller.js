var fs = require('fs');

var nextFunc = function () {
    var checked_radio = $('form input:checked');
    if (!checked_radio.getLength()) {
        alert('至少选择一个类型');
        return;
    }
    var value = checked_radio.val();
    localStorage.setItem('library', value);
    location.href = "#module2";
};

var controller = function (appView) {
    var tpl = fs.readFileSync(__dirname + '/tpl.html', {encoding: 'utf-8'});
    var list = fs.readdirSync('./template');
    appView.html($.template(tpl, {
        list: list
    }));
    
    $('#next-button').bind('click', nextFunc);
};

controller.onroutechange = function () {
    $('#next-button').bind('click', nextFunc);
};

module.exports = controller;