angular.module('orionEcommerceApp')
    .controller('ProductSearchCtrl', function($stateParams, productService, toastr) {
        var vm = this;

        vm.query = $stateParams.query;
        vm.result = null;

        vm.isSearching = true;

        productService.searchProduct(vm.query)
            .then(function(res) {
                vm.isSearching = false;
                vm.results = res.data;

            }, function(res) {
                vm.isSearching = false;
            });
    });
