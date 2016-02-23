var app = angular.module("app",["ngRoute","ngAnimate"]);

app.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/',{
		templateUrl:'../views/home.html',
		controller: 'HomeController'
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
app.controller('HomeController',["$scope",function($scope){
	
}]);
app.controller('AboutController',["$scope",function($scope){
	$scope.consultant = 
		{
			showDetail: false,
			img_src: "https://scontent-lhr3-1.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/12108078_10205023476378668_2351755957653627514_n.jpg?oh=7b999f4a22718125b6d0b77c00c203ad&oe=5757F595",
			name: "Thomas Watson",
			description: "Hello! It's a pleasure for you to visit my website! I have been programming for 4 years now (since i have been 15) and have managed to persue what started as a fun hoby, into a cereer.",
			hobbies: ["Web Development", "Swimming", "Scripting/Automating things", "Martial Arts"]
		}
	
}]);