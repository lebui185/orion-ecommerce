angular.module('orionEcommerceApp')
    .controller('CategoryCaseCtrl', function($filter, $timeout, $scope, productService, toastr, PRODUCT_LOAD_LIMIT) {
        var vm = this;
        var numberFilter = $filter('number');
        var currentOffset = 0;
        vm.isGettingProducts = true;
        vm.hasMoreProducts = false;

        vm.sortCriteriaOptions = [{
            key: '-price',
            value: 'Giá cao đến thấp'
        }, {
            key: '+price',
            value: 'Giá thấp đến cao'
        }, {
            key: '-date',
            value: 'Mới nhất'
        }, {
            key: '+date',
            value: 'Cũ nhất'
        }];

        vm.sortCriteriaChange = function() {
            currentOffset = 0;
            vm.getProducts();
        };

        vm.params = {
            offset: currentOffset,
            limit: PRODUCT_LOAD_LIMIT,
            sort: '-price',
            minPrice: 0,
            maxPrice: 2000000,
            type: null
        };

        vm.getProducts = function() {
            vm.isGettingProducts = true;

            if (currentOffset === 0) {
                vm.products = [];
            }

            productService.getProducts('case', vm.params)
                .then(function(res) {

                    vm.isGettingProducts = false;
                    var remaining = res.headers('remaining');
                    currentOffset += res.data.length;

                    for (var i = 0; i < res.data.length; i++) {
                        vm.products.push(res.data[i]);
                    }

                    if (remaining !== '0') {
                        vm.hasMoreProducts = true;
                    } else {
                        vm.hasMoreProducts = false;
                    }

                }, function(res) {
                    vm.isGettingProducts = false;
                    toastr.info('Không tìm thấy sản phẩm theo yêu cầu');
                });
        };

        // Price slider

        vm.priceSlider = {
            options: {
                floor: 0,
                ceil: 2000000,
                step: 100000,
                onEnd: function() {
                    currentOffset = 0;
                    vm.getProducts();
                },
                translate: function(value) {
                    return numberFilter(value) + ' đ';
                }
            }
        };

        vm.getProducts();
    });
