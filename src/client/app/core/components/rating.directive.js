(function () {
    "use strict";

    angular
        .module("app.core")
        .directive("starRating", starRating);

    starRating.inject = [];

    function starRating() {

        var directive = {
            restrict: "A",
            template: '<ul class="rating">' +
                        '<li ng-repeat="star in stars" ng-class="star">' +
                        '\u2605' +
                        '</li>' +
                        '</ul>',
            scope: {
                ratingValue: "=",
                max: "="
            },
            link: function link(scope, elem, attrs) {
            
                scope.stars = [];

                for (var i = 0; i < scope.max; i++) {
                    scope.stars.push({ filled: i < scope.rating });
                }
            }
        };

        return directive;

        function link(scope, elem, attrs) {
            
            scope.stars = [];

            for (var i = 0; i < scope.max; i++) {
                scope.stars.push({
                    filled: i < scope.rating
                });
            }
        }
    }

})();
