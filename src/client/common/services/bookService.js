(function (module) {
	"use strict";


	var bookService = function ($http, $state) {
		
		var apiUrl = "/api/books/";

		var onComplete = function (response) {
			toastr.success("Book saved succesfully!");
			$state.go("bookList");
		};

		var onError = function (response) {
			console.log(response);
			toastr.error(response.data.message);
		};

		var query = function () {
			return $http.get(apiUrl)
				.then(function (response) {
					return response.data;
			});			
		};

		var get = function (id) {
			return $http.get(apiUrl + id)
				.then(function (response) {
					return response.data;
				});
		};

		var post = function (book) {
			// $http.post(apiUrl).then(onComplete, onError);
			return $http.post(apiUrl, book).then(function (response) {
				return response;
			});
		};

		var put = function (id, book) {
			return $http.put(apiUrl + id, book).then(function (response) {
				return response;
			});		
		};

		var remove = function (id) {
			return $http.delete(apiUrl + id).then(function (response) {
				return response;
			});
		}; 

		return {
			query: query,
			get: get,
			post: post,
			put: put,
			remove: remove
		};
	};

	module.factory("bookService",["$http", "$state", bookService]);

}(angular.module("common.services")));
