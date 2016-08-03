/**
 * Created by zh on 2016/7/29.
 */
var express = require('express');
var router = express.Router();
var UserController = require('../controllers/UserController');

router.get('/', function(req, res, next) {
    res.render('login', { title: 'login' });
});

router.get('/calendar', function(req, res, next) {
    res.render('calendar', { title: 'calendar' });
});

router.get('/registeIndex', function(req, res, next) {
    res.render('registe', { title: 'registe' });
});

router.get('/registe',UserController.registe);

router.get('/welcome', UserController.login );

router.get('/header', function(req, res, next) {
    if(!req.session.user){
      return res.redirect('/');
    }
    res.render('header', { title: 'header' });
});

module.exports = router;
