angular.module('orionEcommerceApp')
    .controller('CheckoutLoginCtrl', function($state, $rootScope, EVENT) {
        var vm = this;

        vm.title = 'lebui';

        $rootScope.$emit(EVENT.CHECKOUT_STEP_LOADED, 'Đăng nhập');

        vm.loginUsername = '';
        vm.loginPassword = '';

        vm.registerUsername = '';
        vm.registerPassword = '';
        vm.registerName = '';

        $rootScope.$on(EVENT.AUTH_SUCCESS, function(event, data) {
        	$state.go('checkout.address');
        });
    });