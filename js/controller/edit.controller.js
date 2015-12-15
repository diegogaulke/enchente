(function() {
	'use_strict';
	
	angular.module('cotas')
		.controller('EditCtrl', EditCtrl);

	function EditCtrl($scope, $location, $routeParams, $firebase) {
		var vm = this;
		vm.save = save;
		vm.destroy = destroy;
		vm.cota;
		
		var ref = new Firebase('https://cota-encente.firebaseio.com/cotas/' + $routeParams.id);
		
		ref.once("value", function(data) {
			vm.cota = data.val();
		});
	 
		function destroy() {
			if(confirm('Do you want to remove this register?')) {
				ref.remove();
				vm.cota = {};
				$location.path('/');
			}
		};
	 
		function save() {
			ref.set(vm.cota);
			$location.path('/');
		};
	}
})();