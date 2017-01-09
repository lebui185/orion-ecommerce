angular.module('orionEcommerceApp')
    .controller('HomeCtrl', function($state, $scope, productService, toastr) {
        var vm = this;
        vm.featuredProducts = null;

        vm.isGettingFeaturedProducts = true;

        productService.getFeaturedProducts()
            .then(function(res) {
                vm.isGettingFeaturedProducts = false;
                vm.featuredProducts = res.data;

            }, function(res) {
                toastr.error('Không thể lấy danh sách sản phẩm nổi bật');
            });
    });
