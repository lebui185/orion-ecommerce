angular.module('orionEcommerceApp')
    .controller('CategoryAccessoryCtrl', function($state, $scope, $filter, productService, toastr) {
        var vm = this;

        vm.featuredAccessories = null;
        vm.isGettingFeaturedAccessories = true;

        if ($state.current.name === 'category.accessory') {
            productService.getFeaturedAccessories()
                .then(function(res) {
                    vm.isGettingFeaturedAccessories = false;
                    vm.featuredAccessories = res.data;

                }, function(res) {
                    toastr.error('Không thể lấy danh sách sản phẩm nổi bật');
                });
        }
    });
