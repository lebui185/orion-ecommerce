angular.module('orionEcommerceApp')
    .controller('CategoryHeadphoneCtrl', function($filter, $timeout, $scope, productService, toastr, PRODUCT_LOAD_LIMIT) {
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
            setType();

            if (currentOffset === 0) {
                vm.headphones = [];
            }

            productService.getProducts('headphone', vm.params)
                .then(function(res) {


                    vm.isGettingProducts = false;
                    var remaining = res.headers('remaining');
                    currentOffset += res.data.length;

                    for (var i = 0; i < res.data.length; i++) {
                        vm.headphones.push(res.data[i]);
                    }

                    if (remaining !== '0') {
                        vm.hasMoreProducts = true;
                    } else {
                        vm.hasMoreProducts = false;
                    }

                }, function(res) {
                    vm.isGettingProducts = false;
                    toastr.error('Không thể lấy danh sách tai nghe');
                });
        };

        // preprocess function

        function setType() {
            if (vm.outputTypes.length > 0) {
                vm.params.type = '';

                for (var i = 0; i < vm.outputTypes.length; i++) {
                    vm.params.type = vm.params.type + vm.outputTypes[i].name;

                    if (i < vm.outputTypes.length - 1) {
                        vm.params.type = vm.params.type + ',';
                    }
                }
            } else {
                delete vm.params.type;
            }
        }

        // type select

        vm.inputTypes = [
            { name: 'Tai nghe có dây', ticked: false },
            { name: 'Tai nghe bluetooth', ticked: false },
        ];

        vm.outputTypes = [];

        vm.onTypeSelect = function(data) {
            currentOffset = 0;
            vm.getProducts();
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
