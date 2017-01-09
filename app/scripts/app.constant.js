angular.module('orionEcommerceApp')
	.constant('API_ENDPOINT', 'https://fierce-springs-26637.herokuapp.com/api')
	.constant('PRODUCT_LOAD_LIMIT', 8)
	.constant('EVENT', {
		CHECKOUT_STEP_LOADED: 'CHECKOUT_CART_LOADED',
		CHECKOUT_FINISH: 'CHECKOUT_FINISH',
		AUTH_SUCCESS: 'AUTH_SUCCESS',
		LOGOUT: 'LOGOUT',
	});

	// =))