angular.module('orionEcommerceApp')
    .controller('CheckoutFinishCtrl', function($rootScope, $scope, EVENT) {
        var vm = this;

        $rootScope.$emit(EVENT.CHECKOUT_FINISH, null);
    });
