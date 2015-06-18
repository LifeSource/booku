(function() {

	"use strict";

	describe("bookAddController Tests", function() {

		var scope,
			$controllerConstructor;

		beforeEach(inject(function($controller) {
			$controllerConstructor = $controller;
		}));

		it("should be defined", function() {

			var ctrl = $controllerConstructor("bookAddController", {
				bookService: {},
				$state: {}
			});
			
			expect(scope.book).toBeDefined();
		});
	});

}());
