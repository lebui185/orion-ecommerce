angular.module('orionEcommerceApp')
	.constant('API_ENDPOINT', 'http://118.68.226.86:8001/Web_Final_Ecomerce/public/api')
	.constant('PRODUCT_LOAD_LIMIT', 8)
	.constant('EVENT', {
		CHECKOUT_STEP_LOADED: 'CHECKOUT_CART_LOADED',
		AUTH_SUCCESS: 'AUTH_SUCCESS',
		LOGOUT: 'LOGOUT',
	});