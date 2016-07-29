/**
 * Created by zh on 2016/7/29.
 */
var express = require('express');
var app = express();
var config = require('./config');
var route = require('./routes/route');
var path = require("path");
var ejs = require("ejs");

app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'built')));
app.use(express.static(path.join(__dirname, 'lib')));
app.set('views',path.join(__dirname,'pages'));
app.engine('html',ejs.__express);
app.set('view engine', 'html');

app.use(route);

var server = app.listen(config.port,function(){
   console.log('server start...');
});
