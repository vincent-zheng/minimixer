var minijQuery = (function () {
	
	var minijQuery = function (selector, context) {
		return new minijQuery.fn.Init(selector, context)
	};
	
	minijQuery.fn =  minijQuery.prototype = {
		constructor: minijQuery
	};
	
	var Init = minijQuery.fn.Init = function (selector, context) {
		this.context = [];
		if (typeof selector === 'string') {
			if (typeof context === 'object') {
				for (var i = 0; i < context.getLength(); ++i) {
					Array.prototype.push.apply(this.context, context.get(i).querySelectorAll(selector));
				}
			} else{
				Array.prototype.push.apply(this.context, document.querySelectorAll(selector));
			}
		} else if (selector.length) {
			Array.prototype.push.apply(this.context, selector);
		} else if (selector.nodeName) {
			this.context.push(selector);
		}
		return this;
	};
	
	Init.prototype = minijQuery.fn;
	

	return minijQuery;
})();