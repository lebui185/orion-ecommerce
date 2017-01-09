angular.module('orionEcommerceApp')
    .factory('paymentService', function($http, API_ENDPOINT) {
    	function checkout(checkoutData) {
    		return $http({
    			method: 'POST',
    			url: API_ENDPOINT + '/me/cart/checkout',
    			data: checkoutData
    		});
    	}

    	return {
    		checkout: checkout
    	};
    });