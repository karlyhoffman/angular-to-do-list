'use strict';

angular.module('todoListApp')
.service('dataService', function($http) {
	this.getTodos = function(callback) {
		$http.get('../data/todos.json')
		.then(callback)
	};
	this.deleteTodo = function(todo){
		console.log('"' + todo.task + '"' + " task was deleted.")
	};
	this.saveTodo = function(todo){
		console.log('"' + todo.task + '"' + " task was saved.")
	};
});