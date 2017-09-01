"use strict";

/*

    handle data and provide functionality to edit a task

 */

app.controller("editTaskCtrl", function($scope, todoFactory, $routeParams, $location){
	$scope.title = 'Edit Task';
	$scope.submitButtonText = 'Edit Item';
	$scope.task = {
		assignedTo: '',
		dependencies: '',
		dueDate: '',
		urgency: '',
		task: '',
		isCompleted: ''
	};

    const showEditTask = function(){
    	todoFactory.getSingleTask($routeParams.itemId)
    	.then((data) => {
    		console.log("data in showEditTask", data);
    		$scope.task = data;
    		$scope.task.id = $routeParams.itemId;
    	});
    };

    $scope.submitTask = function(){
    	todoFactory.editTask($routeParams.itemId, $scope.task)
    	.then((data) => {
    		$location.path('/task-list');
    	});
    };

    showEditTask();

});