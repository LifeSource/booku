(function () {
	"use strict";

	var module = angular.module("common.services");

	var bookResource = function($resource) {
		return $resource("/api/books/:bookId");
	};

	module.factory("bookResource", ["$resource", bookResource]);
}());