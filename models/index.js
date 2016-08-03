/**
 * Created by zh on 2016/8/2.
 */
var mongoose = require('mongoose');
var config = require('../config');

mongoose.connect(config.mongodb,{
    server:{poolSize:20}
},function(err){
   if(err){
       console.log("Database connect err %s",err.message);
       process.exit(1);
   }
});

require('./UserModel');
exports.Users = mongoose.model("users");