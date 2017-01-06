angular.module('orionEcommerceApp', [
		'ui.router',
		'toastr',
		'isteven-multi-select',
		'rzModule',
		'ram.touchspin'
	])
	.run(function($state) {
		$state.go('home');
	});

	//'ui.bootstrap'