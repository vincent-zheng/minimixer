var app = require('app');

var BrowserWindow = require('browser-window');

require('crash-reporter').start();

var loginWindow = null;

app.on('window-all-closed', function () {
   if (process.platform != 'darwin') {
       app.quit();
   } 
});

app.on('ready', function () {
   var atomScreen = require('screen');
   loginWindow = new BrowserWindow({
        'min-width': 600,
        'min-height': 450,
       width: 600,
       height: 450
   });
   loginWindow.loadUrl('file://' + __dirname + '/../view/index.html');
    //启动调试inspector
   //loginWindow.openDevTools({
   //    detach: false
   //});
   loginWindow.on('end', function () {
      loginWindow = null; 
   });
});

