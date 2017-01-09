angular.module('orionEcommerceApp')
    .controller('CheckoutAddressCtrl', function($state, $rootScope, EVENT, userService) {
        var vm = this;

        vm.isLoadingUserProfile = true;

        $rootScope.$emit(EVENT.CHECKOUT_STEP_LOADED, 'Địa chỉ giao hàng');

        // userService.getUserProfileAssign()
        //     .then(function(res) {
        //     	vm.isLoadingUserProfile = false;
        //         $rootScope.userProfileTemp = res.data;
        //     }, function() {
        //     	vm.isLoadingUserProfile = false;
        //         toastr.error('Không thể lấy thông tin user');
        //     });
    });
