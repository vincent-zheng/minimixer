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