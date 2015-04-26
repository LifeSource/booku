module.exports = function () {
	
	var temp = "./.tmp/";
	var server = "./";
	var client = "./public/";
	var clientApp = client + "app/";
	var styles = client + "styles/";
	var vendor = ["node_modules/**", "public/lib/**"];

	var config = {
		server: server, 
		client: client,
		clientApp: clientApp,
		ignores: vendor,
		extensions: "js jade styl",
		styles: styles,
		bowserReloadDelay: 1000
	};

	return config;
};
