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
		$scope.todos.splice($index, 1);
	};
	$scope.saveTodo = function(todo){
		dataService.saveTodo(todo);
	};
});