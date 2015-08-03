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