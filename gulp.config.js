module.exports = function () {
	
	var config = {
		jsVendor: ["node_modules/", "public/lib/"],
		allJs: [
			"./public/app/**/*.js",
			"./*.js"
		]
	};

	return config;
	
};