angular.module('textApp', [])
	.controller('myCtrl', function($scope) {
		var myForm = {
			femaleName: "",
			jobTitle: "",
			tediousTask: "",
			dirtyTask: "",
			celebrity: "",
			uselessSkill: "",
			adjective: "",
			obnoxiousCelebrity: "",
			hugeNumber: ""
		};
		$scope.myForm = myForm;
	});
