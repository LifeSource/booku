module.exports = function () {
	
	var temp = "./.tmp/",
		server = "./",
		ignore = server + "node_modules/",
		client = "./public/",
		clientApp = client + "app/",
		css = client + "css/",
		siteCss = css + "site.css",
		styles = client + "styles/",
		stylus = styles + "site.styl",
		views = server + "views/",
		layout = views + "includes/layout.jade",
		jade = views + "index.jade",
		index = client + "index.html",
		vendor = [server + "node_modules/**/*", client + "lib/**/*"];

	var config = {
		/*
		 * Build information
		 */
		port: process.env.PORT || 3000,
		nodeServer: server + "server.js",
		build: server + "build/",
		extensions: "js jade styl",
		ignore: vendor,
		/*
		 * File paths
		 */
		alljs: [
			clientApp + "**/*.js",
			server + "*.js",
			"!" + vendor 
		],
		js: [
			clientApp + "**/*.js"
		],
		server: server, 
		client: client,
		clientApp: clientApp,
		/*
		 * Stylus and Jade
		 */
		css: css,
		siteCss: siteCss,
		styles: styles,
		stylus: stylus,
		jade: jade,
		index: index,
		layout: layout,
		/*
		 * Bower and NPM packages
		 */
		bower: {
			json: "./bower.json",
			directory: client + "lib/",
			ignore: "../.."
		},
		bowserReloadDelay: 1000
	};

	config.getWiredepDefaultOptions = function () {
		var options = {
			json: config.bower.json,
			directory: config.bower.directory,
			ignore: config.bower.ignore
		};
	};

	return config;
};
