define(function () {
	function object(o) {
		var F = function (){};
		F.prototype = new o();
		return new F();
	}
	function extendObject(obj, parent) {
		obj.prototype = object(parent);
		obj.protytype.contructor = obj;
		return obj;
	}
	function deepCopy(temp, obj) {
		for (var key in obj) {
			if (typeof obj[key] === 'object') {
				temp[key] = deepCopy({}, obj[key]);
			} else {
				temp[key] = obj[key];
			}
		}
		return temp;
	}
	function extend(obj1, obj2) {
		if (Array.isArray(obj1) && Array.isArray(obj2)) {
			var tempArr = [];
			Array.prototype.push.apply(tempArr, obj1);
			Array.prototype.push.apply(tempArr, obj2);
			return tempArr;
		}
		if (typeof obj1 === 'function' && typeof obj2 === 'function') {
			return extendObject(obj1, obj2);
		}
		if (typeof obj1 === 'object' && typeof obj2 === 'object') {
			var tempObj = {};
			deepCopy(tempObj, obj1);
			deepCopy(tempObj, obj2);
			return tempObj;
		}
		return {};
	}
	
	return extend;
})