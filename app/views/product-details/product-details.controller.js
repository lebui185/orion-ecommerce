angular.module('orionEcommerceApp')
    .controller('ProductDetailsCtrl', function($stateParams) {
        var vm = this;
        vm.sliderImages = null;

        // dom
        var overlaySlider = document.getElementById('overlay-image-slider');
        var overlayFullDetails = document.getElementById('overlay-full-details');

        vm.openOverlaySlider = function() {
            overlaySlider.style.height = '100%';
        };

        vm.closeOverlaySlider = function() {
            overlaySlider.style.height = '0%';
        };

        vm.openOverlayFullDetails = function() {
            overlayFullDetails.style.height = '100%';
        };

        vm.closeOverlayFullDetails = function() {
            overlayFullDetails.style.height = '0%';
        };

        vm.openSliderImages = function(color) {
            switch (color) {
                case 'gold':
                    vm.sliderImages = [
                        'img/product/iphone-7/iphone-7-vang-dong-1.jpg',
                        'img/product/iphone-7/iphone-7-vang-dong-2.jpg',
                        'img/product/iphone-7/iphone-7-vang-dong-3.jpg'
                    ];
                    break;
                case 'pink':
                    vm.sliderImages = [
                        'img/product/iphone-7/iphone-7-vang-hong-1.jpg',
                        'img/product/iphone-7/iphone-7-vang-hong-2.jpg',
                        'img/product/iphone-7/iphone-7-vang-hong-3.jpg'
                    ];
                    break;
                case 'black':
                    vm.sliderImages = [
                        'img/product/iphone-7/iphone-7-den-1.jpg',
                        'img/product/iphone-7/iphone-7-den-2.jpg',
                        'img/product/iphone-7/iphone-7-den-3.jpg'
                    ];
                    break;
                case 'box':
                    vm.sliderImages = [
                        'img/product/iphone-7/iphone-7-box.jpg',
                    ];
                    break;
            }

            vm.openOverlaySlider();
        };

        vm.relatedAccessories = [{
            id: 'PK001',
            image: 'img/product/accessory/headphone/awei-gold-avatar.jpg',
            title: 'Tai nghe EP Awei ES979 Vi Gold',
            price: 200000
        }, {
            id: 'PK002',
            image: 'img/product/accessory/connector/micro-usb-20cm.jpg',
            title: 'Cáp Micro USB 20cm Eco MU09-200',
            price: 200000
        }, {
            id: 'PK003',
            image: 'img/product/accessory/case/oppo-a39-soft-plastic.jpg',
            title: 'Ốp lưng Oppo A39 dựa dẻo ilike xám',
            price: 200000
        }, {
            id: 'PK003',
            image: 'img/product/accessory/case/oppo-a39-soft-plastic.jpg',
            title: 'Ốp lưng Oppo A39 dựa dẻo ilike xám',
            price: 200000
        }];

        vm.relatedProducts = [{
            id: 'PK001',
            image: 'img/product/iphone-6s-plus.png',
            title: 'iPhone 6s Plus 128GB',
            price: 19000000
        }, {
            id: 'PK001',
            image: 'img/product/iphone-6s-plus.png',
            title: 'iPhone 6s Plus 128GB',
            price: 19000000
        }, {
            id: 'PK001',
            image: 'img/product/iphone-6s-plus.png',
            title: 'iPhone 6s Plus 128GB',
            price: 19000000
        }, {
            id: 'PK001',
            image: 'img/product/iphone-6s-plus.png',
            title: 'iPhone 6s Plus 128GB',
            price: 19000000
        }];

    });
