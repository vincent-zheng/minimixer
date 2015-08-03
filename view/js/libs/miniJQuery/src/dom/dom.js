// @TODO: each函数
(function (minijquery) {
	minijquery.fn.find = function (selector) {
		if (this.context.length) {
			return minijquery(selector, this);
		}
	};
	
	minijquery.fn.get = function (i) {
		if (typeof i === 'number') {
			return this.context[i] || null;
		}
		return this.context[0];
	};
	
	minijquery.fn.getLength = function () {
		return this.context.length;
	};
	
	minijquery.fn.attr = function (attr, value) {
		if (typeof html !== 'undefined' && typeof attr === 'string') {
			for (var i = 0; i < this.getLength(); ++i) {
				this.get(i).setAttribute(attr, value);
			}
			return this;
		}
		return this.get().getAttribute(attr);
	};
	
	minijquery.fn.removeAttr = function (attr) {
		if (typeof attr === 'string') {
			for (var i = 0; i < this.getLength(); ++i) {
				this.get(i).removeAttribute(attr);
			}
		}
		return this;
	};
	
	minijquery.fn.val = function (value) {
		if (typeof html !== 'undefined') {
			for (var i = 0; i < this.getLength(); ++i) {
				this.get(i).value = value;
			}
		}
		return this.get().value;
	};
	
	minijquery.fn.html = function (html) {
		if (typeof html !== 'undefined') {
			for (var i = 0; i < this.getLength(); ++i) {
				this.get(i).innerHTML = html;
			}
		}
		return this.get().innerHTML;
	};
	
	minijquery.fn.append = function (html) {
		if (typeof html !== 'undefined') {
			for (var i = 0; i < this.getLength(); ++i) {
				this.get(i).innerHTML += html;
			}
		}
		return this.get().innerHTML;
	};

	minijquery.fn.each = function (callback) {
		this.context.forEach(function (item, index) {
			callback.call(item, index, item);
		});
	};
})(minijQuery);