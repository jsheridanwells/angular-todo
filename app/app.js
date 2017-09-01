"use strict";

const app = angular.module("TodoApp", ["ngRoute"]);

app.config(($routeProvider) => {
	$routeProvider
	.when('/', {
		templateUrl: 'partials/list.html',
		controller: 'listCtrl'
	})
	.when('/task-list', {
		templateUrl: 'partials/list.html',
		controller: 'listCtrl'
	})
	.when('/item/newItem', {
		templateUrl: 'partials/form.html',
		controller: 'addTaskCtrl'
	})
	.when('/task/:itemId', {
		templateUrl: 'partials/details.html',
		controller: 'detailTaskCtrl'
	})
	.when('/task/:itemId/edit', {
		templateUrl: 'partials/form.html',
		controller: 'editTaskCtrl'
	})
	.otherwise('/');
});

app.run(($location, FBCreds) => {
	let creds = FBCreds;
	let authConfig = {
		apiKey: creds.apiKey,
		authDomain: creds.authDomain,
		databaseURL: creds.databaseURL
	};

	firebase.initializeApp(authConfig);
});