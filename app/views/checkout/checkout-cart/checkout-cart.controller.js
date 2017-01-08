angular.module('orionEcommerceApp')
    .controller('CheckoutCartCtrl', function($state, $scope, $rootScope, EVENT, toastr, $controller) {
        var vm = this;

        var indexCtrl = $controller('IndexCtrl', {$scope: $scope});

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

        vm.next = function() {
            if (indexCtrl.cartItems.length > 0) {
                $state.go('checkout.login');
            } else {
                toastr.info('Giỏ hàng rỗng');
            }
        }
    });
