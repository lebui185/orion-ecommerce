angular.module('orionEcommerceApp')
    .controller('CheckoutPaymentCtrl', function($state, $rootScope, EVENT) {
        var vm = this;

        vm.title = 'Payment';
        $rootScope.$emit(EVENT.CHECKOUT_STEP_LOADED, 'Thanh toán');
    });
