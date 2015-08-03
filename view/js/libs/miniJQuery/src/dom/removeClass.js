(function (minijquery) {
	function remove(className, dom) {
		dom.className = dom.className.replace(new RegExp('\\b' + className + '\\b', "g"), '');
	}
	var removeClass = function (className, dom) {
		if (!Array.isArray(className)) {
			className = [className];
		}
		if (!dom) {
			return false;
		}
		if (dom.length) {
			for (var i = 0; i < dom.length; ++i) {
				remove(className, dom[i]);
			}
		} else {
			remove(className, dom);
		}
	};
	
	minijquery.fn.removeClass = function (className) {
		removeClass(className, this.context);
	};
})(minijQuery);