angular.module('orionEcommerceApp')
    .controller('CategoryLaptopCtrl', function($filter, $scope, $timeout) {
        var vm = this;
        var numberFilter = $filter('number');

        // sort criteria

        vm.sortCriteriaOptions = [{
            key: '0',
            value: 'Giá thấp cao đến thấp'
        }, {
            key: '1',
            value: 'Giá thấp thấp đến cao'
        }, {
            key: '2',
            value: 'Mới nhất'
        }, {
            key: '3',
            value: 'Cũ nhất'
        }];

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
            console.log(vm.outputBrands);
        };

        // Price slider

        vm.priceSlider = {
            min: 300000,
            max: 30000000,
            options: {
                floor: 300000,
                ceil: 30000000,
                step: 250000,
                onEnd: function() {

                },
                translate: function(value) {
                    return numberFilter(value) + ' đ';
                }
            }
        };

        // Screen size slider
        vm.screenSizeSlider = {
            min: 10,
            max: 16,
            options: {
                floor: 10,
                ceil: 16,
                step: 1,
                onEnd: function() {

                },
                translate: function(value) {
                    return numberFilter(value) + '"';
                }
            }
        };

        // RAM size slider
        vm.ramSizeSlider = {
            min: 0,
            max: 32,
            options: {
                floor: 0,
                ceil: 32,
                step: 1,
                onEnd: function() {

                },
                translate: function(value) {
                    return numberFilter(value) + ' GB';
                }
            }
        };

        // hard disk size slider
        vm.hardDiskSizeSlider = {
            min: 0,
            max: 1024,
            options: {
                floor: 0,
                ceil: 1024,
                step: 64,
                onEnd: function() {

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

                },
                translate: function(value) {
                    return numberFilter(value) + ' cell';
                }
            }
        };

        // Features select
        vm.inputFeatures = [
            { name: 'Card đồ họa rời', ticked: false },
            { name: 'Màn hình cảm ứng', ticked: false },
            { name: 'Ổ cứng SSD', ticked: false }
        ];

        vm.outputFeatures = [];

        vm.onFeatureSelect = function(data) {
            console.log(vm.outputFeatures);
        };

        // main

        function resetMultiSelect(input) {
            for (var i = 0; i < input.length; i++) {
                input[i].ticked = false;
            }
        }

        vm.resetFilter = function() {
            resetMultiSelect(vm.inputBrands);
            resetMultiSelect(vm.inputFeatures);

            vm.priceSlider.min = vm.priceSlider.options.floor;
            vm.priceSlider.max = vm.priceSlider.options.ceil;

            vm.screenSizeSlider.min = vm.screenSizeSlider.options.floor;
            vm.screenSizeSlider.max = vm.screenSizeSlider.options.ceil;

            vm.ramSizeSlider.min = vm.ramSizeSlider.options.floor;
            vm.ramSizeSlider.max = vm.ramSizeSlider.options.ceil;

            vm.hardDiskSizeSlider.min = vm.hardDiskSizeSlider.options.floor;
            vm.hardDiskSizeSlider.max = vm.hardDiskSizeSlider.options.ceil;

            vm.pinCapacitySlider.min = vm.pinCapacitySlider.options.floor;
            vm.pinCapacitySlider.max = vm.pinCapacitySlider.options.ceil;
        };

        // DOM sidebar
        var openSidebarButton = document.getElementById('open-sidebar-button');
        var closeSidebarButton = document.getElementById('close-sidebar-button');
        var sidebar = document.querySelector(".sidebar");
        var sidebarBody = sidebar.querySelector('.sidebar-body');

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
