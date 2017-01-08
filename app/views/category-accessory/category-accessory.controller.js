angular.module('orionEcommerceApp')
    .controller('CategoryAccessoryCtrl', function($state, $scope, $filter, productService, toastr) {
        var vm = this;

        vm.featuredAccessories = null;
        vm.isGettingFeaturedAccessories = true;

        productService.getFeaturedAccessories()
            .then(function(res) {

                setTimeout(function() {
                    console.log(res.data);

                    vm.isGettingFeaturedAccessories = false;
                    vm.featuredAccessories = res.data;

                    $scope.$apply();
                }, 1000);

            }, function(res) {
                toastr.error('Không thể lấy danh sách sản phẩm nổi bật');
            });

    });
