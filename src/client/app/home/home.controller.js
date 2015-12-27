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
            { id: "mongo", name: "MongoDB", type: "Database" },
            { id: "express", name: "ExpressJS", type: "Web Framework" },
            { id: "angular", name: "AngularJS", type: "Client Framework" },
            { id: "node", name: "NodeJS", type: "Server" },
            { id: "gulp", name: "GulpJS", type: "Build Automation" },
            { id: "git", name: "Git", type: "Source Control" }
        ];
    }

})();
