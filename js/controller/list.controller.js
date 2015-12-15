(function() {
	'use_strict';
	
	angular.module('cotas')
		.controller('ListCtrl', ListCtrl);

	function ListCtrl($firebaseArray, $location) {
		var ref = new Firebase('https://cota-encente.firebaseio.com/cotas');

		var vm = this;
		vm.nivel;
		vm.nivelFilter = nivelFilter;
		vm.nova = nova;
		vm.cotas = $firebaseArray(ref);
		
		function nivelFilter (cota) {
			if(isNaN(Number(vm.nivel))) return true;
			return Number(cota.cota) >= Number(vm.nivel);
		};
		
		function nova() {
			$location.path('/new');
		}
	}
})();