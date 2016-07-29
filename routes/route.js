/**
 * Created by zh on 2016/7/29.
 */
var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
    res.render('login', { title: 'login' });
});

module.exports = router;