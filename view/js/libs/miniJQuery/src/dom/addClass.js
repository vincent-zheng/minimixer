(function (minijquery) {
	function add(className, dom) {
		dom.className += ' ' + className;
	}
	
	function addClassName(className, dom) {
		if (dom) {
			if (dom.length) {	
				for(var i = 0; i < dom.length; ++i) {
					add(className, dom[i]);
				}
			} else {
				add(className, dom);
			}
			return dom;
		} else {
			return false;
		}	
	};
	
	var addClass =  function (className, dom) {
		if (Array.isArray(className)) {
			addClassName(className.join(' '), dom);
		} else {
			addClassName(className, dom);
		}
	};
	
	minijquery.fn.addClass = function (className) {
		addClass(className, this.context);
	};
})(minijQuery);