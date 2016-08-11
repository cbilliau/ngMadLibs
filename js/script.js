angular.module('textApp', [ 'ngMessages' ])
	.controller('RootCtrl', [ '$scope', function($scope) {
		//Example of tieing data to script
		this.msg='Automate This!';
		$scope.showResults = false;
		$scope.showForm = true;

		//Eval data submitted from madForm
		$scope.submit = function(){
			if( $scope.madForm.$valid ) {
			$scope.showResults = true;
			} else {
			$scope.showResults = false;
			}
		}
	}]);
