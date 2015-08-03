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
})(serialize, minijQuery);