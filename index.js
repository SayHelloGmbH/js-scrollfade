/**
 * jQuery plugin to fade out specified elements
 * when scrolling down the page.
 */

(function ($) {

	var $win = $(window);

	$.extend($.fn, {
		sht_scrollfade: function () {
			var scroll = window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				window.oRequestAnimationFrame ||
				// IE Fallback, you can even fallback to onscroll
				function (callback) { window.setTimeout(callback, 1000 / 60) },
				$this = $(this);

			function loop() {

				var windowOffset = window.pageYOffset;

				if (windowOffset < $win.outerHeight()) {
					$this.css({
						'opacity': 1 - (windowOffset * 0.0025)
					});
				}

				scroll(loop)

			}
			loop();
			return this;
		}
	});

})(jQuery);
