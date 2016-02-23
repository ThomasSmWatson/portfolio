var app = angular.module("about",[]);

app.controller('AboutController',["$scope",function($scope){
	$scope.consultants = [
		{
			showDetail: false,
			img_src: "https://scontent-lhr3-1.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/12108078_10205023476378668_2351755957653627514_n.jpg?oh=7b999f4a22718125b6d0b77c00c203ad&oe=5757F595",
			name: "Thomas Watson",
			description: "Hello! It's a pleasure for you to visit my website! I have been programming for 4 years now (since i have been 15) and have managed to persue what started as a fun hoby, into a cereer.",
			hobbies: ["Web Development", "Swimming", "Scripting/Automating things", "Martial Arts"]
		},
		{
			showDetail: false,
			img_src: "https://scontent-lhr3-1.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/66027_4041365164574_1543902893_n.jpg?oh=1b02e02788733a442e6b69487dd2d0b5&oe=5728196F",
			name: "Bowie",
			description: "This is my cat! She loves being lazy and biting feet... She is now named after the singer, just got the name because it just fits.",
			hobbies: ["Meowing", "Eating allot", "Sleeping", "walking over keyboards"]
		}
		]
	
}]);