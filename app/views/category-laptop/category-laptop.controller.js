angular.module('orionEcommerceApp')
    .controller('CategoryLaptopCtrl', function($filter, $timeout, $scope, productService, toastr, PRODUCT_LOAD_LIMIT) {
        var vm = this;
        var numberFilter = $filter('number');
        var currentOffset = 0;
        vm.isGettingProducts = true;
        vm.hasMoreProducts = false;

        // sort criteria

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

        vm.params = {
            offset: currentOffset,
            limit: PRODUCT_LOAD_LIMIT,
            sort: '-price',
            minPrice: 500000,
            maxPrice: 25000000,
            minRam: 0,
            maxRam: 8,
            minHddSize: 0,
            maxHddSize: 256,
            minPinCapacity: 1000,
            maxPinCapacity: 4000,
            minScreenSize: 2.5,
            maxScreenSize: 6
        };

        vm.getProducts = function() {
            vm.isGettingProducts = true;
            setMaker();

            if (currentOffset === 0) {
                vm.products = [];
            }

            productService.getProducts('laptop', vm.params)
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
                    toastr.error('Không thể lấy danh sách máy tính bảng');
                });
        };

        // preprocess function

        function setMaker() {
            if (vm.outputBrands.length > 0) {
                vm.params.maker = '';

                for (var i = 0; i < vm.outputBrands.length; i++) {
                    vm.params.maker = vm.params.maker + vm.outputBrands[i].name;

                    if (i < vm.outputBrands.length - 1) {
                        vm.params.maker = vm.params.maker + ',';
                    }
                }
            } else {
                delete vm.params.maker;
            }
        }

        vm.sortCriteriaChange = function() {
            currentOffset = 0;
            vm.getProducts();
        };

        // Brand select

        vm.inputBrands = [
            { icon: '<img src="img/brands/apple.png">', name: 'Apple', ticked: false },
            { icon: '<img src="img/brands/asus.png">', name: 'Asus', ticked: false },
            { icon: '<img src="img/brands/dell.png">', name: 'Dell', ticked: false },
            { icon: '<img src="img/brands/lenovo.jpg">', name: 'Lenovo', ticked: false },
            { icon: '<img src="img/brands/hp.png">', name: 'HP', ticked: false }
        ];

        vm.outputBrands = [];

        vm.onBrandSelect = function(data) {
            currentOffset = 0;
            vm.getProducts();
        };

        // Price slider

        vm.priceSlider = {
            options: {
                floor: 300000,
                ceil: 30000000,
                step: 250000,
                onEnd: function() {
                    currentOffset = 0;
                    vm.getProducts();
                },
                translate: function(value) {
                    return numberFilter(value) + ' đ';
                }
            }
        };

        // Screen size slider
        vm.screenSizeSlider = {
            options: {
                floor: 10,
                ceil: 16,
                step: 1,
                onEnd: function() {
                    currentOffset = 0;
                    vm.getProducts();
                },
                translate: function(value) {
                    return numberFilter(value) + '"';
                }
            }
        };

        // RAM size slider
        vm.ramSizeSlider = {
            options: {
                floor: 0,
                ceil: 32,
                step: 1,
                onEnd: function() {
                    currentOffset = 0;
                    vm.getProducts();
                },
                translate: function(value) {
                    return numberFilter(value) + ' GB';
                }
            }
        };

        // hard disk size slider
        vm.hddSizeSlider = {
            min: 0,
            max: 1024,
            options: {
                floor: 0,
                ceil: 1024,
                step: 64,
                onEnd: function() {
                    currentOffset = 0;
                    vm.getProducts();
                },
                translate: function(value) {
                    return numberFilter(value) + ' GB';
                }
            }
        };

        // Pin capacity slider
        vm.pinCapacitySlider = {
            min: 2,
            max: 12,
            options: {
                floor: 2,
                ceil: 12,
                step: 1,
                onEnd: function() {
                    currentOffset = 0;
                    vm.getProducts();
                },
                translate: function(value) {
                    return numberFilter(value) + ' cell';
                }
            }
        };

        // main

        function resetMultiSelect(input) {
            for (var i = 0; i < input.length; i++) {
                input[i].ticked = false;
            }
        }

        vm.resetFilter = function() {
            resetMultiSelect(vm.inputBrands);

            vm.params.minPrice = vm.priceSlider.options.floor;
            vm.params.maxPrice = vm.priceSlider.options.ceil;

            vm.params.minScreenSize = vm.screenSizeSlider.options.floor;
            vm.params.maxScreenSize = vm.screenSizeSlider.options.ceil;

            vm.params.minRam = vm.ramSizeSlider.options.floor;
            vm.params.maxRam = vm.ramSizeSlider.options.ceil;

            vm.params.minHddSize = vm.hddSizeSlider.options.floor;
            vm.params.maxHddSize = vm.hddSizeSlider.options.ceil;

            vm.params.minPinCapacity = vm.pinCapacitySlider.options.floor;
            vm.params.maxPinCapacity = vm.pinCapacitySlider.options.ceil;
        };

        vm.resetFilter();
        vm.getProducts();

        // DOM sidebar
        var openSidebarButton = document.getElementById('open-sidebar-button');
        var closeSidebarButton = document.getElementById('close-sidebar-button');
        var sidebar = document.querySelector(".sidebar");

        vm.refreshSlider = function() {
            $timeout(function() {
                $scope.$broadcast('rzSliderForceRender');
            }, 500);
        };

        function openSidebar() {
            sidebar.style.width = '280px';
        }

        function closeSidebar() {
            sidebar.style.width = "0px";
        }

        openSidebarButton.addEventListener('click', function() {
            openSidebar();
            vm.refreshSlider();
        });

        closeSidebarButton.addEventListener('click', closeSidebar);
    });
