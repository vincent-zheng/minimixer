var Router = require('./libs/router');
var fs = require('fs');
//设置一个路由信息表
//var routes = {
//    'module1': './../module/module1',
//    'module2': './../module/module2',
//    'module3': './../module/module3'
//};

var routes = {};
var module_list = fs.readdirSync(__dirname + '/module');
module_list.forEach(function (item) {
    routes[item] = __dirname +'/module/' + item
    console.log(routes[item]);
});

module.exports = Router(routes);