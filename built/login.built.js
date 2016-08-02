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
/***/ function(module, exports) {

	var login = {
		focusPlaceholder: function () {
			$('.login-text').on("focus", function () {
				$(this).next().css({"top": "-30px", "opacity": "0"});

				$('.login-text').off("blur").on("blur", function () {
					var $text = $(this);

					if (!$text.html() && !$text.val()) {
						$(this).next().attr("style", "");
					}
				});
			});
		},
		loginClick: function () {
			var $login = $(".login-item-button");
			$login.on("click", function () {
				if ($login.attr("disabled")) {
					return;
				}

				$login
					.html('<i class="iconfont">&#xe60b;</i>')
					.attr("disabled", true)
					.addClass("button-disabled");
			});
		},
		setInit: function () {
			var $text = $('.login-text');

			var i = 0;

			while (i < $text.length) {
				var $item = $text.eq(i);
				if (!$item.val()) {
					$item.next().css("display", "block");
				}
				i++;
			}
		},
	};

	login.focusPlaceholder();
	setTimeout(login.setInit, 200)
	login.loginClick();


/***/ }
/******/ ]);