angular.module("todoListApp", [])
.controller('mainCtrl', function($scope, dataService){
	$scope.addTodo = function(){
		var todo = {task: "New Task"};
		$scope.todos.push(todo);
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
})
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