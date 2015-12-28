(function () {
    "use strict";

    var app = angular.module("booku", ["app.core", "book.module"]);

    //app.constant("toastr", toastr);
    app.config(configuration);

    configuration.$inject = [];

    function configuration() {
        configureToastrMessages();
    }

    function configureToastrMessages(argument) {
        toastr.timeOut = 4000;
        toastr.options.positionClass = "toast-bottom-right";
    }
})();
