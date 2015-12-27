var path = require("path"),
    rootPath = path.normalize(__dirname + "/../../");

module.exports = {

    development: {
        port: process.env.PORT || 3000,
        rootPath: rootPath,
        db: "mongodb://localhost:27017/bookuu"
    },
    production: {
        port: process.env.PORT || 80,
        rootPath: rootPath,
        db: "mongodb://bookuu:#hyegyo86kW@ds031581.mongolab.com:31581/bookuu"
    }

};
