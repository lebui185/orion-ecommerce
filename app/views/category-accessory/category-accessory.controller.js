angular.module('orionEcommerceApp')
	.controller('CategoryAccessoryCtrl', function($filter, $state) {
		var vm = this;
        var numberFilter = $filter('number');

        vm.accessorySearchQuery = '';

        vm.searchAccessory = function() {
            if (vm.accessorySearchQuery !== '') {
                $state.go('accessorySearch', { query: vm.accessorySearchQuery });    
            }
        };
	});