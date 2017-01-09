angular.module('orionEcommerceApp')
    .controller('AccountChangePassCtrl', function(userService, authService, toastr) {
        var vm = this;
        
        vm.changePassword = function() {
        	if (vm.newPassword === vm.newpasswordConfirm) {
        		userService.changePassword(vm.oldPassword, vm.newPassword)
        			.then(function() {
        				toastr.success('Đổi mật khẩu thành công');
        			}, function() {
        				toastr.error('Đổi mật khẩu thất bại');
        			});
        	} else {
        		toastr.error('Xác nhận mật khẩu không trùng khớp');
        	}
        };
    });
