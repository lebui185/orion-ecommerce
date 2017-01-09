angular.module('orionEcommerceApp')
    .controller('CheckoutLoginCtrl', function($state, $rootScope, EVENT, authService, toastr) {
        var vm = this;
        $rootScope.$emit(EVENT.CHECKOUT_STEP_LOADED, 'Đăng nhập');

        vm.loginUsername = '';
        vm.loginPassword = '';

        vm.registerUsername = '';
        vm.registerPassword = '';
        vm.registerName = '';

        vm.isAuthenticating = false;
        vm.isRegistering = false;

        vm.login = function() {

            vm.isAuthenticating = true;
            authService.authenticate(vm.loginUsername, vm.loginPassword)
                .then(function() {
                    vm.isAuthenticating = false;

                }, function() {
                    vm.isAuthenticating = false;
                    toastr.error('Đăng nhập thất bại');
                });
        };

        vm.loginFacebook = function() {

            vm.isAuthenticating = true;
            authService.authenticateFacebook()
                .then(function(res) {
                    vm.isAuthenticating = false;
                })
                .catch(function(res) {
                    vm.isAuthenticating = false;
                    toastr.error('Đăng nhập thất bại');
                });
        };

        vm.register = function() {
            vm.isRegistering = true;
            authService.register({
                customerName: vm.registerName,
                username: vm.registerUsername,
                password: vm.registerPassword
            }).then(function(res) {
                vm.isRegistering = false;
                toastr.success('Đăng ký thành công');

                authService.authenticate(vm.registerUsername, vm.registerPassword)
                    .then(function() {
                        
                    }, function() {
                        toastr.error('Đăng nhập thất bại');
                    });
            }, function(res) {
                vm.isRegistering = false;
                toastr.error('Đăng ký thất bại');
            });
        }


        $rootScope.$on(EVENT.AUTH_SUCCESS, function(event, data) {
            $state.go('checkout.address');
        });
    });
