angular.module('orionEcommerceApp')
    .controller('IndexCtrl', function($scope, $state, toastr, authService, cartService, authService, $rootScope, EVENT, userService) {
        var vm = this;
        vm.productSearchQuery = '';
        vm.loginUsername = '';
        vm.loginPassword = '';
        vm.cartItems = [];
        vm.cartItemsCount = 0;
        vm.totalPrice = 0;
        vm.isAddingToCart = false;
        vm.userName = 'Tài khoản';

        vm.getTagLabelClass = function(tag) {
            switch (tag.tagName.toLocaleLowerCase()) {
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

        vm.login = function(username, password) {
            authService.authenticate(username, password)
                .then(function() {
                    $('#login-modal').modal('hide');
                    toastr.success('Đăng nhập thành công');
                }, function() {
                    toastr.error('Đăng nhập thất bại');
                });
        };

        vm.loginFacebook = function() {
            authService.authenticateFacebook()
                .then(function(res) {
                    $('#login-modal').modal('hide');
                    toastr.success('Đăng nhập thành công');
                })
                .catch(function(res) {
                    toastr.error('Đăng nhập thất bại');
                });
        };

        vm.isAuthenticated = authService.isAuthenticated;

        vm.logout = function() {
            authService.logout();
            toastr.success('Đăng xuất thành công');

            if ($state.current.authRequired) {
                $state.go('home');
            }
        };

        vm.getTotalCartItems = function() {
            return cartService.getTotalItems();
        };

        vm.addItemToCart = function(item, quantity) {
            vm.isAddingToCart = true;
            cartService.addItem(item, quantity)
                .then(function(res) {
                    // add item to cart items list
                    for (var i = 0; i < vm.cartItems.length; i++) {
                        if (vm.cartItems[i].id === res.data.id) {
                            vm.cartItems[i].quantity += res.data.quantity;
                            break;
                        }
                    }

                    if (i === vm.cartItems.length) {
                        vm.cartItems.push(res.data);
                    }

                    $scope.$watch(function() {
                        return res.data;
                    }, function(newVal, oldVal) {
                        if (newVal !== oldVal) {
                            cartService.updateItem(newVal, newVal.quantity)
                                .then(function(res) {

                                    // update item to cart items list
                                    for (var i = 0; i < vm.cartItems.length; i++) {
                                        if (vm.cartItems[i].id === res.data.id) {
                                            vm.cartItems[i].quantity = res.data.quantity;
                                            break;
                                        }
                                    }

                                    vm.cartItemsCount = getCartItemsCount();
                                    vm.totalPrice = getTotalCartPrice();

                                    toastr.success("Cập nhật thông tin giỏ hàng thành công");
                                }, function(res) {
                                    toastr.error("Không thể cập nhật thông tin giỏ hàng");
                                });
                        }
                    }, true);

                    // update quantity
                    vm.cartItemsCount += quantity;

                    // update total price
                    vm.totalPrice += res.data.quantity * res.data.price;

                    vm.isAddingToCart = false;
                    toastr.success('Thêm vào giỏ hàng thành công');
                })
                .catch(function(res) {
                    console.log(res);
                    vm.isAddingToCart = false;
                    toastr.error("Không thể đưa sản phẩm vào giỏ hàng");
                });

        };

        vm.removeItemFromCart = function(id) {
            console.log(id);
            cartService.removeItem(id)
                .then(function(res) {
                    toastr.success('Bỏ khỏi giỏ hàng thành công');

                    // remove item to cart items list
                    for (var i = 0; i < vm.cartItems.length; i++) {
                        if (vm.cartItems[i].id === id) {
                            // update quantity
                            vm.cartItemsCount -= vm.cartItems[i].quantity;

                            // update total price
                            vm.totalPrice -= vm.cartItems[i].quantity * vm.cartItems[i].price;

                            vm.cartItems.splice(i, 1);
                            break;
                        }
                    }

                })
                .catch(function(res) {
                    console.log(res);
                    toastr.error("Không thể đưa bỏ sản phẩm khỏi giỏ hàng");
                });
        };

        vm.test = function() {
            console.log('click');
        };

        function getCartItemsCount() {
            var count = 0;
            for (var i = 0; i < vm.cartItems.length; i++) {
                count += vm.cartItems[i].quantity;
            }
            return count;
        }

        function getTotalCartPrice() {
            var price = 0;
            for (var i = 0; i < vm.cartItems.length; i++) {
                price += vm.cartItems[i].quantity * vm.cartItems[i].price;
            }
            return price;
        }

        function getCartItems() {
            cartService.getItems()
                .then(function(res) {
                    vm.cartItems = res.data;
                    vm.cartItemsCount = getCartItemsCount();
                    vm.totalPrice = getTotalCartPrice();

                    // add watches
                    vm.cartItems.forEach(function(item) {
                        $scope.$watch(function() {
                            return item;
                        }, function(newVal, oldVal) {
                            if (newVal !== oldVal) {
                                cartService.updateItem(newVal, newVal.quantity)
                                    .then(function(res) {

                                        // update item to cart items list
                                        for (var i = 0; i < vm.cartItems.length; i++) {
                                            if (vm.cartItems[i].id === res.data.id) {
                                                vm.cartItems[i].quantity = res.data.quantity;
                                                break;
                                            }
                                        }

                                        vm.cartItemsCount = getCartItemsCount();
                                        vm.totalPrice = getTotalCartPrice();

                                        toastr.success("Cập nhật thông tin giỏ hàng thành công");
                                    }, function(res) {
                                        toastr.error("Không thể cập nhật thông tin giỏ hàng");
                                    });
                            }

                        }, true);
                    });
                })
                .catch(function(res) {
                    toastr.error("Không thể lấy thông tin giỏ hàng");
                });
        }

        function getUserInfo() {
            userService.getUserInfo()
                .then(function(res) {
                    vm.userName = res.data.customerName;
                }, function(res) {
                    toastr.error('Không thể lấy thông tin user');
                });
        }

        getCartItems();

        if (authService.isAuthenticated()) {
            getUserInfo();
        }

        $rootScope.$on(EVENT.AUTH_SUCCESS, function(event, data) {
            getUserInfo();
            var backup = vm.cartItems;
            vm.cartItems = [];
            vm.cartItemsCount = 0;
            vm.totalPrice = 0;

            getCartItems();

            backup.forEach(function(item) {
                vm.addItemToCart(item, item.quantity);
            });
        });

        $rootScope.$on(EVENT.LOGOUT, function(event, data) {
            vm.userName = 'Tài khoản';
            vm.cartItems = [];
            vm.cartItemsCount = 0;
            vm.totalPrice = 0;
            cartService.clearLocal();
        });

    });
