"use strict";

/*

    handle data and functionality needed in list.html
    using todoFactory and userFactory to interact with the database

 */

app.controller("listCtrl", function($scope, todoFactory, userFactory){

	$scope.tasks = [];

    const showAllTasks = function(){
    	todoFactory.getAllTasks()
    	.then((tasks) => {
    		console.log("showAllTasks from Promise", tasks);
    		$scope.tasks = tasks;
    	});
    };


    $scope.deleteTask = function(id){
        todoFactory.deleteTask(id)
        .then(() => {
            showAllTasks();
        });
    };

    //TODO fix this toggle happens to quick
    $scope.toggleDoneTask = function(obj){
        console.log("toggleDoneTask obj", obj);
        let status = obj.isCompleted ? true : false;
        let tmpObj = {isCompleted:status};
        todoFactory.editTask(obj.id, tmpObj)
        .then(()=>{
            console.log("toggleDoneTask is updated");
            showAllTasks();
        });
    };

    showAllTasks();

});