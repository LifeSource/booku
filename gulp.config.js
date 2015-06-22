module.exports = function () {
	
	var temp = "./.tmp/",
		build = "./build/",
		server = "./src/server/",
		ignore = server + "node_modules/",
		client = "./src/client/",
		clientApp = client + "app/",
		css = client + "css/",
		siteCss = css + "site.css",
		styles = client + "styles/",
		stylus = styles + "site.styl",
		views = server + "views/",
		layout = views + "includes/layout.jade",
		jade = views + "index.jade",
		index = client + "index.html",
		nodeModules = "./node_modules/",
		bowerComponents = "./bower_components/",
		vendor = [nodeModules, bowerComponents];

	var config = {
		/*
		 * Build information
		 */
		port: process.env.PORT || 3000,
		nodeServer: server + "server.js",
		build: build,
		extensions: "js html css jade styl",
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
			client + "common/**/*.js",
			clientApp + "**/*.js",
			"!" + client + "**/*.spec.js"
		],
		server: server, 
		client: client,
		clientApp: clientApp,
		fonts: bowerComponents + "font-awesome/fonts/**/*.*",
		images: client + "images/**/*.*",
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
			directory: bowerComponents,
			ignore: "../.."
		},
		bowserReloadDelay: 1000,
		/*
		 * Karma and Tests
		 */
		serverIntegrationSpecs: [client + "tests/server-integration/**/*.spec.js"],

	};

	config.getWiredepDefaultOptions = function () {
		var options = {
			json: config.bower.json,
			directory: config.bower.directory,
			ignore: config.bower.ignore
		};
	};

	return config;

	// karma
	function getKarmaOptions() {
		var options = {
			files: [].concat(
				bowerFiles,
				config.specHelpers,
				clientApp + "app.js",
				client + "common/**/*.js",
				client + "**/*.js"
			),
			exclude: [],
			coverage: {
				dir: report + "coverage",
				reporters: [

				]
			}
		};

		return options;
	}
};
