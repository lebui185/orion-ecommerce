angular.module('orionEcommerceApp')
    .controller('CheckoutCartCtrl', function($state, $rootScope, EVENT) {
        var vm = this;

        $rootScope.$emit(EVENT.CHECKOUT_STEP_LOADED, 'Kiểm tra giỏ hàng');

        vm.cart = {
        	total: 30000000,
        	items: [{
        		image: 'img/product/iphone-6s-plus.png',
        		title: 'iPhone 6 Plus',
        		quantity: 2,
        		price: 10000000
        	}, {
        		image: 'img/product/iphone-6s-plus.png',
        		title: 'iPhone 6 Plus',
        		quantity: 2,
        		price: 10000000
        	}, {
        		image: 'img/product/iphone-6s-plus.png',
        		title: 'iPhone 6 Plus',
        		quantity: 2,
        		price: 10000000
        	}, {
        		image: 'img/product/iphone-6s-plus.png',
        		title: 'iPhone 6 Plus',
        		quantity: 2,
        		price: 10000000
        	}]
        };

        
    });
