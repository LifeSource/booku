(function(module) {
    "use strict";

    angular
        .module("book.module")
        .factory("bookService", bookService);

    bookService.$inject = ["$http", "$q"];

    function bookService($http, $q) {

        var apiUrl = "/api/books/";

        return {
            query: query,
            get: get,
            post: post,
            put: put,
            remove: remove
        };

        function onComplete(response) {
            return response.data;
        }

        function onError(error) {
            return error;
        }

        function query() {
            return $http.get(apiUrl)
                .then(onComplete)
                .catch(onError);
        }

        function get(id) {
            return $http.get(apiUrl + id)
                .then(onComplete)
                .catch(onError);
        }

        function post(book) {
            return $http.post(apiUrl, book)
                .then(onComplete)
                .catch(onError);
        }

        function put(id, book) {
            return $http.put(apiUrl + id, book)
                .then(onComplete)
                .catch(onError);
        }

        function remove(id) {
            return $http.delete(apiUrl + id)
                .then(onComplete)
                .catch(onError);
        }
    }
})();
