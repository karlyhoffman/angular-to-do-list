angular.module("todoListApp", [])
.controller('mainCtrl', function($scope, dataService){
	
	dataService.getTodos(function(res) {
		$scope.todos = res.data;
	});

})
.service('dataService', function($http) {
	this.getTodos = function(callback) {
		$http.get('../data/todos.json')
		.then(callback)
	}
});