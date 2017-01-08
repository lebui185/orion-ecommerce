angular.module('orionEcommerceApp', [
		'ui.router',
		'toastr',
		'isteven-multi-select',
		'rzModule',
		'ram.touchspin',
		'satellizer',
		'LocalStorageModule'
	])
	.run(function($state, $rootScope, authService) {
		$state.go('home');

		$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
            if (toState.authRequired && !authService.isAuthenticated()) {
                // User isn’t authenticated
                $state.transitionTo('home');
                event.preventDefault();
            } else if (toState.name === 'checkout.login' && authService.isAuthenticated()) {
            	$state.transitionTo('checkout.address');
            	event.preventDefault();
            }
        });
	});