angular.module('textApp', ['ngMessages', 'ngAnimate'])
    .controller('RootCtrl', ['$scope', function($scope) {
        //Example of tieing data to script
        this.msg = 'Automate This!';
        $scope.showResults = false;
        $scope.showForm = true;

        //Eval data submitted from madForm
        $scope.submit = function() {
            if ($scope.madForm.$valid) {
                $scope.showResults = true;
            } else {
                $scope.showResults = false;
            }
        };

        // Reset madForm
        $scope.reset = function() {
            $scope.name = null;
            $scope.jobTitle = null;
            $scope.tediousTask = null;
            $scope.dirtyTask = null;
            $scope.celebrity = null;
            $scope.uselessSkill = null;
            $scope.adjective = null;
            $scope.obnoxiousCelebrity = null;
            $scope.hugeNumber = null;
        };
    }]);
