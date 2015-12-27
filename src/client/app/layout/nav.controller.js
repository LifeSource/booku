(function () {


    angular
        .module("app.core")
        .controller("NavController", NavController);

    NavController.inject = [];

    function NavController() {
        var vm = this;
       
        vm.navs = [

            { name: "Home", state: "home" },
            { name: "Book List", state: "bookList" },
            { name: "Kenrick Wu", state: "about" }

        ];
    }

})();
