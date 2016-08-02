/**
 * Created by zh on 2016/7/29.
 */
var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
    res.render('login', { title: 'login' });
});

router.get('/calendar', function(req, res, next) {
    res.render('calendar', { title: 'calendar' });
});

router.get('/welcome', function(req, res, next) {
    res.render('welcome', { title: 'welcome' });
});

module.exports = router;
