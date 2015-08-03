(function(){ "use strict";var minijQuery = (function () {
	
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
// @TODO: on bind live 等方�?
(function (minijquery) {
	minijquery.fn.bind = function (event, callback) {
		if (typeof event === 'string' && typeof callback === 'function') {
			for(var i = 0; i < this.getLength(); ++i) {
				this.get(i).addEventListener(event, callback, false);
			}
		}
	};
	
	minijquery.fn.unbind = function (event, callback) {
		for(var i = 0; i < this.getLength(); ++i) {
			this.get(i).addEventListener(event, callback, false);
		}
	};
})(minijQuery);
(function ($) {
	$.template =  function (template, data) {
		data = data || {};
		var funcStr = ["var __=[];"],
		reg = /([\s\S]*?)(?:(?:<%([^=][\s\S]*?)%>)|(?:<%=([\s\S]+?)%>)|$)/g;
		reg.lastIndex = 0;
		var a = reg.exec(template || "");
		while (a && (a[1] || a[2] || a[3])) {
			a[1] && funcStr.push("__.push('", a[1].replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/\r/g, "").replace(
			/\t/g, "\t").replace(/\//g, "\\/").replace(/'/g, "\\'").replace(/"/g, '\\"'), "');");
			a[2] && funcStr.push(a[2]);
			a[3] && funcStr.push("__.push(", a[3], ");");
			a = reg.exec(template);
		}
		funcStr.push("return __.join('');");
		var argvName = [],
		argv = [];
		for (var h in data) {
			argvName.push(h);
			argv.push(data[h])
		}
		var func = new Function(argvName.join(","), funcStr.join(""));
		return func.apply(null, argv)
	}
})(minijQuery);
var serialize = (function () {
	var serialize = function(json) {
		if (typeof json === 'string') {
			return json;
		}
		if (typeof json === 'object' && !json.prototype) {
			var result = '';
			for (var key in json) {
				if (result === '') {
					result += key + '=' + json[key];
				} else {
					result += '&' + key + '=' + json[key];
				}
			}
			return result;
		}
		return '';
	}
	return serialize;
})();
(function (serialize, $) {
	var fn = function (){};
	var ajax = function (options) {
		options = options || {};
		if (!options.url) {
			return false;
		}
		var async = options.async || true,
			url = options.url,
			method = (options.method || 'GET').toUpperCase(),
			data = serialize(options.data) || null,
			success = (typeof options.success === 'function') ? options.success : fn,
			error = (typeof options.error === 'function') ? options.success : fn;
		
		var xmlHttp = new XMLHttpRequest();
		xmlHttp.onreadystatechange = function () {
			if (xmlHttp.readyState === 4) {
				var status = xmlHttp.status;
				if (status >= 200 && status <= 304) {
					success(xmlHttp.response);
				} else {
					error('error');
				}
			}
		}
		if (method === 'GET') {
			url += '?' + decodeURIComponent(data);
		}
		xmlHttp.open(method, url, async);
		if (method === 'POST') {
			xmlHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		}
		xmlHttp.send(data);
	}

	$.ajax = ajax;

	$.get = function (url, success, error) {
		ajax({
			url: url,
			type: 'get',
			success: success,
			error: error
		});
	};

	$.post = function (url, data, success, error) {
		ajax({
			url: url,
			type: 'post',
			data: data,
			success: success,
			error: error
		});
	};

	$.fn.load = function (url) {
		var that = this;
		ajax({
			url: url,
			type: 'get',
			success: function (data) {
				that.html(data);
			}
		});
	};
})(serialize, minijQuery);;window.$ = minijQuery;})();