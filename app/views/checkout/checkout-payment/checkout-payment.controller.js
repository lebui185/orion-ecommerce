angular.module('orionEcommerceApp')
    .controller('CheckoutPaymentCtrl', function($state, $rootScope, paymentService, toastr, EVENT) {
        var vm = this;

        vm.isCheckingout = false;

        $rootScope.$emit(EVENT.CHECKOUT_STEP_LOADED, 'Thanh toán');

        vm.checkout = function() {
            vm.isCheckingout = true;

            var checkoutData = {
                receiverName: $rootScope.userProfileTemp.customerName,
                receiverPhone: $rootScope.userProfileTemp.phone,
                receiverAddress: $rootScope.userProfileTemp.address
            };

            paymentService.checkout(checkoutData)
                .then(function(res) {
                	vm.isCheckingout = false;
                	$rootScope.bill = res.data;
                	$state.go('checkoutFinish');
                }, function(res) {
                    vm.isCheckingout = false;
                    toastr.error('Thanh toán thất bại');
                });
        }
    });
