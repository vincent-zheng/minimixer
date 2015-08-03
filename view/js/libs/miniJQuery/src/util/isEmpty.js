define(function (){
	function isEmpty(obj) {
		if (Array.isArray(obj)) {
			return obj.length <= 0;
		}
		for (var key in obj) {
			return false;
		}
		return true;
	}
	return isEmpty;
});