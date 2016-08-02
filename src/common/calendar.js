var sdate = require('sildate');
var S = require('./query');
S.one("asd");
function calendar(selecter) {
  this.selecter = selecter;
}

calendar.fn = calendar.prototype;

calendar.fn.init = function() {
};

calendar.fn.error = function(errorMsg) {
  console.error(errorMsg);
};

/**
 * 根据容器生成格子
 */
calendar.fn.htmler = function() {

};

calendar.fn.getNowTime = function() {

};

calendar.fn.formatter = function() {

};
