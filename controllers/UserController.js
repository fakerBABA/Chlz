/**
 * Created by zh on 2016/7/29.
 */
var UserDao = require('../Dao/UserDao');
var crypto = require('crypto');

exports.login = function(req, res, next){
    var userName = req.query.username;
    var password = req.query.password;
    var md5 =crypto.createHash('md5');
   //console.log(md5.update(password).digest('hex'));
    UserDao.findUserByName(userName, function(err, user){
        if (err) {
            return  next(err);
        }
        if (!user) {
            console.log('用户不存在');
            return;
        }
        if (password != user.password){
            console.log('密码错误');
            return;
        }
        req.session.user = user;
        req.session.save();
        res.render('welcome', { title: 'welcome' });
    });
};

exports.registe = function(req, res, next){
    var username = req.query.username;
    var password = req.query.password;
    var loginName = req.query.loginName;
    var photo = req.query.photo;
    var groupId = req.query.groupId;
    UserDao.findUserByName(username, function(err, user){
        if (err) {
            return next(err);
        }
        if (user) {
            console.log('用户已经存在');
        }
        UserDao.newAndSave(username, password, loginName, photo, groupId, function(err, user){
                if(err){
                    console.log('注册失败');
                }
            return res.redirect('/');
        });
    });


}