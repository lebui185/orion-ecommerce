angular.module('orionEcommerceApp')
    .controller('HomeCtrl', function($state, $scope, productService, toastr) {
        var vm = this;
        vm.featuredProducts = null;

        vm.isGettingFeaturedProducts = true;

        productService.getFeaturedProducts()
            .then(function(res) {

                setTimeout(function() {
                	console.log(res.data);

                	vm.isGettingFeaturedProducts = false;
                    vm.featuredProducts = res.data;

                    $scope.$apply();
                }, 1000);

            }, function(res) {
                toastr.error('Không thể lấy danh sách sản phẩm nổi bật');
            });
    });
