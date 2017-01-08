angular.module('orionEcommerceApp')
    .controller('CheckoutAddressCtrl', function($state, $rootScope, EVENT) {
        var vm = this;

        $rootScope.$emit(EVENT.CHECKOUT_STEP_LOADED, 'Địa chỉ giao hàng');

        vm.deliveryProfiles = [{
            name: 'Nguyễn Văn A',
            phoneNumber: '0936864853',
            address: '12345678 Đường Nào Đó, phường 1, Quận X, TP. Hồ Chí Minh'
        }, {
            name: 'Nguyễn Văn A',
            phoneNumber: '0936864853',
            address: '12345678 Đường Nào Đó, phường 1, Quận X, TP. Hồ Chí Minh'
        }];

        vm.createAddressProfile = function() {
            vm.deliveryProfiles.push({
                name: '',
                phoneNumber: '',
                address: ''
            });
        };

        vm.deleteAddressProfile = function(profile) {
            var toBeDeletedIndex = vm.deliveryProfiles.indexOf(profile);
            if (toBeDeletedIndex > -1) {
                vm.deliveryProfiles.splice(toBeDeletedIndex, 1);
            }

            console.log(vm.deliveryProfiles);
        };

    });
