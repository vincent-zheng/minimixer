# 设计方案

## 使用方法
点击[这里](https://raw.githubusercontent.com/vincent-zheng/miniJQuery/master/dist/minijquery.min.js)下载js文件，然后加入到文档中
```
直接使用$变量
```
详细使用可以先参考public/test.html

## 设计目标
1. 针对Android和iOS设备的浏览器，轻量级
2. 可扩展性   
## 兼容目标
Android: 原生webkit、UC浏览器、QQ浏览器、chrome    
iOS: safiri、UC浏览器、QQ浏览器、chrome

## 构建工具
gulp

## 模块化
~~ADM的requireJS~~     
自定义闭包实现

## TODO
1. dom操作
2. ajax封装
3. 事件绑定
4. 轻量级模版引擎
