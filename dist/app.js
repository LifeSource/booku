!function(){var e=angular.module("booku",["ngResource","ngRoute"]);e.config(function(e){e.when("/",{templateUrl:"/partials/main"}).otherwise({redirectTo:"/"})})}();