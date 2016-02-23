var app = angular.module("app",["about","ngRoute","ngAnimate"]);

app.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/',{
		templateUrl:'../views/home.html',
	}).
	when('/about',{
		templateUrl:'../views/about.html',
		controller:'AboutController'
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
