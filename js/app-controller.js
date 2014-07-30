app.controller('ListCtrl', function($scope, Cotas) {
	$scope.cotas = Cotas;
	$scope.nivelFilter = function(cota) {
		if(isNaN(Number($scope.nivel))) return true;
		return Number(cota.cota) >= Number($scope.nivel);
	};
})
.controller('CreateCtrl', function($scope, $location, $timeout, Cotas) {
	$scope.save = function() {
		Cotas.$add($scope.cota, function() {
			$timeout(function() { $location.path('/'); });
		});
	};
})

.controller('EditCtrl', function($scope, $location, $routeParams, $firebase, fbURL) {
    var projectUrl = fbURL + $routeParams.projectId;
    $scope.cota = $firebase(new Firebase(projectUrl));
 
    $scope.destroy = function() {
		$scope.cota.$remove();
		$location.path('/');
	};
 
	$scope.save = function() {
		$scope.cota.$save();
		$location.path('/');
	};
});