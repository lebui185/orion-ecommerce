angular.module('orionEcommerceApp')
    .controller('ProductDetailsCtrl', function($state, $stateParams, $rootScope, $filter, $timeout, $scope, productService, toastr) {
        var vm = this;
        vm.sliderImages = null;
        vm.product = null;
        vm.quantity = 1;

        vm.isGettingRelatedProducts = true;
        vm.isGettingRelatedAccessories = true;

        vm.getProduct = function getProduct(id) {
            productService.getProduct($stateParams.productId)
                .then(function(res) {
                    console.log(res.data);
                    vm.product = res.data;

                    productService.getRelatedProducts(vm.product.id)
                        .then(function(res) {
                            vm.isGettingRelatedProducts = false;
                            vm.relatedProducts = res.data;

                        }, function(res) {
                            vm.isGettingRelatedProducts = false;
                            toastr.error('Không thể lấy sản phẩm liên quan');
                        });

                    if (vm.product.categoryName === 'Phone' || vm.product.categoryName === 'Laptop' || vm.product.categoryName === 'Tablet') {
                        productService.getRelatedAccessories(vm.product.id)
                            .then(function(res) {
                                vm.isGettingRelatedAccessories = false;
                                vm.relatedAccessories = res.data;

                            }, function(res) {
                                vm.isGettingRelatedAccessories = false;
                                toastr.error('Không thể lấy phụ kiện liên quan');
                            });
                    }

                }, function(res) {
                    toastr.error('Không thể lấy chi tiết sản phẩm');
                });
        };

        vm.callback = function() {
            $state.go('checkout.cart');
        }
        // dom
        // var overlaySlider = document.getElementById('overlay-image-slider');
        // var overlayFullDetails = document.getElementById('overlay-full-details');

        // vm.openOverlaySlider = function() {
        //     overlaySlider.style.height = '100%';
        // };

        // vm.closeOverlaySlider = function() {
        //     overlaySlider.style.height = '0%';
        // };

        // vm.openOverlayFullDetails = function() {
        //     overlayFullDetails.style.height = '100%';
        // };

        // vm.closeOverlayFullDetails = function() {
        //     overlayFullDetails.style.height = '0%';
        // };

        // vm.openSliderImages = function(color) {
        //     switch (color) {
        //         case 'gold':
        //             vm.sliderImages = [
        //                 'img/product/iphone-7/iphone-7-vang-dong-1.jpg',
        //                 'img/product/iphone-7/iphone-7-vang-dong-2.jpg',
        //                 'img/product/iphone-7/iphone-7-vang-dong-3.jpg'
        //             ];
        //             break;
        //         case 'pink':
        //             vm.sliderImages = [
        //                 'img/product/iphone-7/iphone-7-vang-hong-1.jpg',
        //                 'img/product/iphone-7/iphone-7-vang-hong-2.jpg',
        //                 'img/product/iphone-7/iphone-7-vang-hong-3.jpg'
        //             ];
        //             break;
        //         case 'black':
        //             vm.sliderImages = [
        //                 'img/product/iphone-7/iphone-7-den-1.jpg',
        //                 'img/product/iphone-7/iphone-7-den-2.jpg',
        //                 'img/product/iphone-7/iphone-7-den-3.jpg'
        //             ];
        //             break;
        //         case 'box':
        //             vm.sliderImages = [
        //                 'img/product/iphone-7/iphone-7-box.jpg',
        //             ];
        //             break;
        //     }

        //     vm.openOverlaySlider();
        // };

        vm.getProduct();


    });
