angular.module('orionEcommerceApp')
    .controller('CheckoutCtrl', function($state, $rootScope, $timeout, EVENT) {
        var vm = this;
        vm.userProfile;

        vm.steps = [{
            name: 'Kiểm tra giỏ hàng',
            state: 'nonVisited'
        }, {
            name: 'Đăng nhập',
            state: 'nonVisited'
        }, {
            name: 'Địa chỉ giao hàng',
            state: 'nonVisited'
        }, {
            name: 'Thanh toán',
            state: 'nonVisited'
        }];

        var setCurrentStep = function(stepName) {
            var i;

            for (i = 0; i < vm.steps.length; i++) {
                if (vm.steps[i].name !== stepName) {
                    vm.steps[i].state = 'complete';
                } else {
                    break;
                }
            }

            if (i < vm.steps.length) {
                vm.steps[i].state = 'active';

                for (i = i + 1; i < vm.steps.length; i++) {
                    vm.steps[i].state = 'nonVisited';
                }
            }
        };

        // potential memory leak (must manually unsubscribe event on $rootScope)
        $rootScope.$on(EVENT.CHECKOUT_STEP_LOADED, function(event, data) {
            setCurrentStep(data);
        });

        // UI fix
        $('[data-toggle="popover"]').popover('hide');
    });
