angular.module('orionEcommerceApp')
    .controller('IndexCtrl', function($state, toastr, authService) {
        var vm = this;
        vm.productSearchQuery = '';
        vm.loginUsername = '';
        vm.loginPassword = '';

        vm.getTagLabelClass = function(tag) {
            switch (tag.toLocaleLowerCase()) {
                case 'hot':
                    return 'label label-danger';
                case 'giảm giá':
                    return 'label label-primary';
                case 'mới':
                    return 'label label-info';
            }
        };

        vm.searchProduct = function() {
            if (vm.productSearchQuery !== '') {
                $state.go('productSearch', { query: vm.productSearchQuery });
            }
        };

        vm.login = function() {
            authService.authenticate(vm.loginUsername, vm.loginPassword);
            $('#login-modal').modal('hide');
            toastr.success('Đăng nhập thành công');
        }

        vm.isAuthenticated = authService.isAuthenticated;
        vm.logout = function() {
            authService.logout();
            toastr.success('Đăng xuất thành công');
        };
    });
