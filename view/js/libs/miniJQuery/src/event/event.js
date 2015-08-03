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