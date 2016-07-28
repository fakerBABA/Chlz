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