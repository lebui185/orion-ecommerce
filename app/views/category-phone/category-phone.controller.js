angular.module('orionEcommerceApp')
    .controller('CategoryPhoneCtrl', function($filter, $timeout, $scope, productService, toastr, PRODUCT_LOAD_LIMIT) {
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

        vm.params = {
            offset: currentOffset,
            limit: PRODUCT_LOAD_LIMIT,
            sort: '-price',
            minPrice: 500000,
            maxPrice: 40000000,
            minRam: 0,
            maxRam: 8,
            minInternalMemSize: 0,
            maxInternalMemSize: 256,
            minFrontCameraRes: 1,
            maxFrontCameraRes: 8,
            minBackCameraRes: 1,
            maxBackCameraRes: 24,
            minPinCapacity: 1000,
            maxPinCapacity: 4000,
            minScreenSize: 2.5,
            maxScreenSize: 6
        };

        vm.getProducts = function() {
            vm.isGettingProducts = true;
            setMaker();
            setOs();

            if (currentOffset === 0) {
                vm.phones = [];
            }

            productService.getProducts('phone', vm.params)
                .then(function(res) {


                    vm.isGettingProducts = false;
                    var remaining = res.headers('remaining');
                    currentOffset += res.data.length;

                    for (var i = 0; i < res.data.length; i++) {
                        vm.phones.push(res.data[i]);
                    }

                    if (remaining !== '0') {
                        vm.hasMoreProducts = true;
                    } else {
                        vm.hasMoreProducts = false;
                    }

                    //$scope.$apply();
                }, function(res) {
                    vm.isGettingProducts = false;
                    toastr.error('Không thể lấy danh sách điện thoại');
                });
        };

        vm.sortCriteriaChange = function() {
            currentOffset = 0;
            vm.getProducts();
        }

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

        function setOs() {
            if (vm.outputOSs.length > 0) {
                vm.params.os = '';

                for (var i = 0; i < vm.outputOSs.length; i++) {
                    vm.params.os = vm.params.os + vm.outputOSs[i].name;

                    if (i < vm.outputOSs.length - 1) {
                        vm.params.os = vm.params.os + ',';
                    }
                }
            } else {
                delete vm.params.os;
            }

        }

        // Brand select

        vm.inputBrands = [
            { icon: '<img src="img/brands/apple.png">', name: 'Apple', ticked: false },
            { icon: '<img src="img/brands/samsung.png">', name: 'Samsung', ticked: false },
            { icon: '<img src="img/brands/sony.png">', name: 'Sony', ticked: false },
            { icon: '<img src="img/brands/oppo.png">', name: 'Oppo', ticked: false }
        ];

        vm.outputBrands = [];

        vm.onBrandSelect = function() {
            currentOffset = 0;
            vm.getProducts();
        };

        // OS Select
        vm.inputOSs = [
            { icon: '<img src="/app/img/oss/android.png">', name: 'Android', ticked: false },
            { icon: '<img src="/app/img/oss/ios.png">', name: 'iOS', ticked: false },
        ];

        vm.outputOSs = [];


        vm.onOSSelect = function() {
            currentOffset = 0;
            vm.getProducts();
        };


        // Price slider

        vm.priceSlider = {
            options: {
                floor: 500000,
                ceil: 40000000,
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
                floor: 2.5,
                ceil: 6,
                step: 0.5,
                precision: 1,
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
                ceil: 8,
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

        // Internal memory size slider
        vm.internalMemSizeSlider = {
            options: {
                floor: 0,
                ceil: 256,
                step: 2,
                onEnd: function() {
                    currentOffset = 0;
                    vm.getProducts();
                },
                translate: function(value) {
                    return numberFilter(value) + ' GB';
                }
            }
        };

        // Front camera res slider
        vm.frontCameraResSlider = {
            options: {
                floor: 1,
                ceil: 8,
                step: 1,
                onEnd: function() {
                    currentOffset = 0;
                    vm.getProducts();
                },
                translate: function(value) {
                    return numberFilter(value) + ' MP';
                }
            }
        };

        // Back camera res slider
        vm.backCameraResSlider = {
            options: {
                floor: 1,
                ceil: 24,
                step: 1,
                onEnd: function() {
                    currentOffset = 0;
                    vm.getProducts();
                },
                translate: function(value) {
                    return numberFilter(value) + ' MP';
                }
            }
        };

        // Pin capacity slider
        vm.pinCapacitySlider = {
            options: {
                floor: 1000,
                ceil: 4000,
                step: 250,
                onEnd: function() {
                    currentOffset = 0;
                    vm.getProducts();
                },
                translate: function(value) {
                    return numberFilter(value) + ' mAh';
                }
            }
        };


        function resetMultiSelect(input) {
            for (var i = 0; i < input.length; i++) {
                input[i].ticked = false;
            }
        }

        vm.getProducts();

        // main

        vm.resetFilter = function() {
            resetMultiSelect(vm.inputBrands);
            vm.outputBrands = [];
            resetMultiSelect(vm.inputOSs);
            vm.outputOSs = [];

            vm.params.minPrice = vm.priceSlider.options.floor;
            vm.params.maxPrice = vm.priceSlider.options.ceil;

            vm.params.minScreenSize = vm.screenSizeSlider.options.floor;
            vm.params.maxScreenSize = vm.screenSizeSlider.options.ceil;

            vm.params.minRam = vm.ramSizeSlider.options.floor;
            vm.params.maxRam = vm.ramSizeSlider.options.ceil;

            vm.params.minInternalMemSize = vm.internalMemSizeSlider.options.floor;
            vm.params.maxInternalMemSize = vm.internalMemSizeSlider.options.ceil;

            vm.params.minFrontCameraRes = vm.frontCameraResSlider.options.floor;
            vm.params.maxFrontCameraRes = vm.frontCameraResSlider.options.ceil;

            vm.params.minBackCameraRes = vm.backCameraResSlider.options.floor;
            vm.params.maxBackCameraRes = vm.backCameraResSlider.options.ceil;

            vm.params.minPinCapacity = vm.pinCapacitySlider.options.floor;
            vm.params.maxPinCapacity = vm.pinCapacitySlider.options.ceil;

            currentOffset = 0;
            vm.getProducts();
        };

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
