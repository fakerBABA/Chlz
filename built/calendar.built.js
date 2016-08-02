/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var sdate = __webpack_require__(1);
	var S = __webpack_require__(2);
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


/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * @module date
	 * @description 时间处理
	 * 移植于r4.js
	 */

	/**
	 * 时间相减
	 * @param {Object} sDate1
	 * @param {Object} sDate2
	 */
	var _dateDiff = function(sDate1, sDate2) {
		var arrDate, objDate1, objDate2, intDays;
		arrDate = sDate1.split("-");
		objDate1 = new Date(arrDate[1] + '-' + arrDate[2] + '-' + arrDate[0]);
		arrDate = sDate2.split("-");
		objDate2 = new Date(arrDate[1] + '-' + arrDate[2] + '-' + arrDate[0]);
		intDays = parseInt(Math.abs(objDate1 - objDate2) / 1000 / 60 / 60 / 24);
		return intDays;
	};

	/**
	 * 时间相加
	 * @param {Object} str
	 * @param {Object} AddDayCount
	 */
	var _dateAdd = function(str, AddDayCount) {
		var stra = str.replace(/-/g, "/");
		var dd = new Date(stra);
		dd.setDate(dd.getDate() + AddDayCount); //获取AddDayCount天后的日期
		var y = dd.getFullYear();
		var m = dd.getMonth() + 1; //获取当前月份的日期
		var d = dd.getDate();
		return y + "-" + m + "-" + d;
	};

	/*
	 * date.format
	 */
	Date.prototype.format = function(fmt) {
		var o = {
			"M+": this.getMonth() + 1, //月份
			"d+": this.getDate(), //日
			"h+": this.getHours() % 12 == 0 ? 12 : this.getHours() % 12, //小时
			"H+": this.getHours(), //小时
			"m+": this.getMinutes(), //分
			"s+": this.getSeconds(), //秒
			"q+": Math.floor((this.getMonth() + 3) / 3), //季度
			"S": this.getMilliseconds() //毫秒
		};
		var week = {
			"0": "/u65e5",
			"1": "/u4e00",
			"2": "/u4e8c",
			"3": "/u4e09",
			"4": "/u56db",
			"5": "/u4e94",
			"6": "/u516d"
		};
		if (/(y+)/.test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
		}
		if (/(E+)/.test(fmt)) {
			fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468") : "") + week[this.getDay() + ""]);
		}
		for (var k in o) {
			if (new RegExp("(" + k + ")").test(fmt)) {
				fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
			}
		}
		return fmt;
	}

	try{
		exports.dateDiff = _dateDiff;
		exports.dateAdd = _dateAdd;
	}catch(e){
		//TODO handle the exception
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	

/***/ }
/******/ ]);