angular.module('orionEcommerceApp')
	.controller('CategoryPhoneCtrl', function($filter, $scope, $timeout) {
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
        },{
            key: '3',
            value: 'Cũ nhất'
        }];

        // Brand select

        vm.inputBrands = [
            { icon: '<img src="img/brands/apple.png">', name: 'Apple', ticked: false },
            { icon: '<img src="img/brands/samsung.png">', name: 'Samsung', ticked: false },
            { icon: '<img src="img/brands/sony.png">', name: 'Sony', ticked: false },
            { icon: '<img src="img/brands/oppo.png">', name: 'Oppo', ticked: false }
        ];

        vm.outputBrands = [];


        vm.onBrandSelect = function(data) {
            console.log(vm.outputBrands);
        };

        // Price slider

        vm.priceSlider = {
            min: 500000,
            max: 25000000,
            options: {
                floor: 500000,
                ceil: 25000000,
                step: 250000,
                onEnd: function() {

                },
                translate: function(value) {
                    return numberFilter(value) + ' đ';
                }
            }
        };

        // OS Select
        vm.inputOSs = [
            { icon: '<img src="/app/img/oss/android.png">', name: 'Android', ticked: false },
            { icon: '<img src="/app/img/oss/ios.png">', name: 'iOS', ticked: false },
        ];

        vm.outputOSs = [];


        vm.onOSSelect = function(data) {
            console.log(vm.outputOSs);
        };

        // Screen size slider
        vm.screenSizeSlider = {
            min: 2.5,
            max: 6,
            options: {
                floor: 2.5,
                ceil: 6,
                step: 0.5,
                precision: 1,
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
            max: 8,
            options: {
                floor: 0,
                ceil: 8,
                step: 1,
                onEnd: function() {

                },
                translate: function(value) {
                    return numberFilter(value) + ' GB';
                }
            }
        };

        // Internal memory size slider
        vm.internalMemSizeSlider = {
            min: 0,
            max: 256,
            options: {
                floor: 0,
                ceil: 256,
                step: 2,
                onEnd: function() {

                },
                translate: function(value) {
                    return numberFilter(value) + ' GB';
                }
            }
        };

        // Front camera res slider
        vm.frontCameraResSlider = {
            min: 1,
            max: 8,
            options: {
                floor: 1,
                ceil: 8,
                step: 1,
                onEnd: function() {

                },
                translate: function(value) {
                    return numberFilter(value) + ' MP';
                }
            }
        };

        // Back camera res slider
        vm.backCameraResSlider = {
            min: 1,
            max: 24,
            options: {
                floor: 1,
                ceil: 24,
                step: 1,
                onEnd: function() {

                },
                translate: function(value) {
                    return numberFilter(value) + ' MP';
                }
            }
        };

        // Pin capacity slider
        vm.pinCapacitySlider = {
            min: 1000,
            max: 4000,
            options: {
                floor: 1000,
                ceil: 4000,
                step: 250,
                onEnd: function() {

                },
                translate: function(value) {
                    return numberFilter(value) + ' mAh';
                }
            }
        };

        // number of SIM select
        vm.inputNumOfSims = [
            { name: '1 SIM', ticked: false },
            { name: '2 SIM', ticked: false },
        ];

        vm.outputNumOfSims = [];

        vm.onNumOfSimsSelect = function(data) {
            console.log(vm.outputNumOfSims)
        };

        // Features select
        vm.inputFeatures = [
            { name: 'Chống nước', ticked: false },
            { name: 'Bảo mật vân tay', ticked: false },
        ];

        vm.outputFeatures = [];

        vm.onFeatureSelect = function(data) {
            console.log(vm.outputFeatures)
        };

        // private function

        function _resetMultiSelect(input) {
            for (var i = 0; i < input.length; i++) {
                input[i].ticked = false;
            }
        }

        // main

        vm.resetFilter = function() {
            _resetMultiSelect(vm.inputBrands);
            _resetMultiSelect(vm.inputOSs);
            _resetMultiSelect(vm.inputNumOfSims);
            _resetMultiSelect(vm.inputFeatures);

            vm.priceSlider.min = vm.priceSlider.options.floor;
            vm.priceSlider.max = vm.priceSlider.options.ceil;         

            vm.screenSizeSlider.min = vm.screenSizeSlider.options.floor;
            vm.screenSizeSlider.max = vm.screenSizeSlider.options.ceil;

            vm.ramSizeSlider.min = vm.ramSizeSlider.options.floor;
            vm.ramSizeSlider.max = vm.ramSizeSlider.options.ceil;

            vm.internalMemSizeSlider.min = vm.internalMemSizeSlider.options.floor;
            vm.internalMemSizeSlider.max = vm.internalMemSizeSlider.options.ceil;

            vm.frontCameraResSlider.min = vm.frontCameraResSlider.options.floor;
            vm.frontCameraResSlider.max = vm.frontCameraResSlider.options.ceil;

            vm.backCameraResSlider.min = vm.backCameraResSlider.options.floor;
            vm.backCameraResSlider.max = vm.backCameraResSlider.options.ceil;

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