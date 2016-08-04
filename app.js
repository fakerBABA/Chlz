/**
 * Created by zh on 2016/7/29.
 */
var express = require('express');
var app = express();
var config = require('./config');
var route = require('./routes/route');
var path = require("path");
var ejs = require("ejs");
var session = require('express-session');
var RedisStore = require('connect-redis')(session);


app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'built')));
app.use(express.static(path.join(__dirname, 'lib')));
app.set('views',path.join(__dirname,'pages'));
//app.engine('html',ejs.__express);
app.set('view engine', 'ejs');

//session
app.use(session({
   secret: 'Chlz',
   store:  new RedisStore({
      host:   '127.0.0.1',
      port:   6379,
      ttl: 60 * 60 * 24 * 1   //Session的有效期为7天
   }),
   resave: true,
   saveUninitialized: true
}));

app.use(route);

var server = app.listen(config.port,function(){
   console.log('server start...');
});
