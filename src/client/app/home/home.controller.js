(function () {
    "use strict";

    angular
        .module("app.core")
        .controller("HomeController", HomeController);

    HomeController.inject = [];

    function HomeController() {

        var vm = this;
        vm.year = new Date().getFullYear();

        vm.meanList = [
            { id: "mongo", name: "MongoDB", type: "Database", href: "http://www.mongodb.org" },
            { id: "express", name: "Express", type: "Web Framework", href: "http://www.expressjs.org" },
            { id: "angular", name: "Angular", type: "Client Framework", href: "http://www.angularjs.org" },
            { id: "node", name: "Node", type: "Backend Server", href: "http://www.nodejs.org" },
            { id: "gulp", name: "Gulp", type: "Build Automation", href: "http://www.gulpjs.org"},
            { id: "git", name: "Git", type: "Source Control", href: "http://www.git.org" },
            { id: "stylus", name: "Stylus", type: "CSS Pre-Processor", href: "http://www.git.org" }
        ];
    }

})();
