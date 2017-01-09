angular.module('orionEcommerceApp')
    .controller('AccountInfoCtrl', function($rootScope, userService, toastr) {
        var vm = this;
        vm.isUpdatingUserProfile = false;

        vm.updateProfile = function() {
        	vm.isUpdatingUserProfile = true;

            var profileData = {
                customerName: $rootScope.userProfileTemp.customerName,
                identifyNumber: $rootScope.userProfile.identifyNumber,
                email: $rootScope.userProfile.email,
                phone: $rootScope.userProfileTemp.phone,
                address: $rootScope.userProfileTemp.address,
            }

            console.log(profileData);

            userService.updateProfile(profileData)
                .then(function(res) {
                	vm.isUpdatingUserProfile = false;
                	$rootScope.userProfile = angular.copy($rootScope.userProfileTemp);
                    toastr.success('Cập nhật thông tin người dùng thành công');
                }, function() {
                	vm.isUpdatingUserProfile = false;
                    toastr.error('Không thể cập nhật thông tin người dùng');
                });
        };
    });
