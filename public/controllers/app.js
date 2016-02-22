var app = angular.module("app",["ngRoute","ngAnimate"]);

app.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/',{
		templateUrl:'../views/home.html',
		controller: 'HomeController'
	}).
	when('/about',{
		templateUrl:'../views/about.html'
	}).
	when('/portfolio',{
		templateUrl:'../views/portfolio.html'
	})
	.when('/contact',{
		templateUrl:'../views/contact.html'
	})
	.otherwise({
		redirectTo: '/'
	});
}]);
app.controller('HomeController',["$scope",function($scope){
	
}]);