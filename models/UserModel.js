/**
 * Created by zh on 2016/8/2.
 */
var mongoose =  require('mongoose');
var Schema  = mongoose.Schema;
var userSchema = new Schema({
    username: String,
    password: String,
    loginName: String,
    photo: String,
    groupId:String
});
mongoose.model("users",userSchema);
