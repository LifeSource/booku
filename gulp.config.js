module.exports = function () {

    var env = process.env.NODE_ENV || "dev",
        port = process.env.PORT || 3000;
	
	var root = "./",
	    src = root + "src/",
	    temp = root + "tmp/",
	    dist = root + "dist/",    
		server = src + "server/",
		client = src + "/client/",
		clientApp = client + "app/",
		css = client + "css/",
		styles = src + "styles/",
        images = client + "images/",
		nodeModules = "./node_modules/",
		bowerComponents = "./bower_components/",
		ignore = [nodeModules, bowerComponents];

	var config = {
		/*
		 * Build information
		 */
		port: process.env.PORT || 3000,
		nodeServer: server + "server.js",
		extensions: "js html css jade styl",
		/* File paths */
		root: root,
		src: src,
		css: css,
		styles: styles,
		server: server, 
		client: client,
		ignore: ignore,
		clientApp: clientApp,
		index: client + "index.html",
		stylus: styles + "**/*.styl",
		alljs: [
			client + "**/*.js",
			root + "*.js"
		],
		js: [
		    clientApp + "**/*.module.js",
		    clientApp + "**/*.service.js",
			clientApp + "**/*.js",
			client + "**/*.js",
			"!" + client + "**/*.spec.js"
		],
		fonts: bowerComponents + "font-awesome/fonts/**/*.*",
		images: images + "**/*.*",
		/* Stylus and Jade */
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
