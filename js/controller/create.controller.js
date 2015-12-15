(function() {
	angular.module('cotas').controller('CreateCtrl', CreateCtrl);

	function CreateCtrl ($location, $firebaseArray) {
		var ref = new Firebase('https://cota-encente.firebaseio.com/cotas');
		
		var vm = this;
		vm.save = save;
		vm.cota;
		
		function save() {
			$firebaseArray(ref).$add(vm.cota);
			$location.path('/');
		};
	}
})();