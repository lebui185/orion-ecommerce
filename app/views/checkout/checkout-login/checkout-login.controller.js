angular.module('orionEcommerceApp')
    .controller('CheckoutLoginCtrl', function($state, $rootScope, EVENT) {
        var vm = this;

        vm.title = 'lebui';

        $rootScope.$emit(EVENT.CHECKOUT_STEP_LOADED, 'Đăng nhập');

    });