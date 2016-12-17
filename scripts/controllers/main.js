'use strict';
angular.module("todoListApp")
.controller('mainCtrl', function($scope, dataService){
	$scope.addTodo = function(){
		var todo = {task: "New Task"};
		$scope.todos.unshift(todo);
	};
	dataService.getTodos(function(res) {
		$scope.todos = res.data;
	});
	$scope.deleteTodo = function(todo, $index){
		dataService.deleteTodo(todo);
		$scope.todos = $scope.todos.filter(function(val) {
		    return !(val.task === todo.task);
		});
	};
	$scope.saveTodo = function(todo){
		dataService.saveTodo(todo);
	};
});