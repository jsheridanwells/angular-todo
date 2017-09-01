"use strict";

/*

    provide the data and functionality to handle the creation of new tasks
    using todoFactory to write to the database

 */

app.controller("addTaskCtrl", function($scope, todoFactory, $location){

	$scope.title = 'New Task';
	$scope.submitButtonTask = 'Add New Task';
	$scope.task = {
		assignedTo: '',
		dependencies: '',
		dueDate: '',
		urgency: 'high',
		task: '',
		isCompleted: false,
		location: ''

	};

    $scope.submitTask = function(){
    	todoFactory.addTask($scope.task)
    	.then((data) => {
    		$location.url('/task-list');
    	});
    };



});