/**
 * Created by zh on 2016/7/29.
 */
var model = require("../models/index");
var User = model.Users;

exports.findUserByName = function(userName, callback){
    if (userName.length === 0) {
        return callback(null, []);
    }
    User.findOne({username: userName}, callback);
}

exports.newAndSave = function(userName, password, loginName, photo, groupId, callback){
    var user = new User();
    user.username = userName;
    user.password = password;
    user.loginName = loginName;
    user.photo = photo;
    user.groupId = groupId;
    user.save(callback);
}