angular.module('orionEcommerceApp')
    .config(function($stateProvider, toastrConfig) {

        $stateProvider.state({
            name: 'home',
            url: '/home',
            templateUrl: 'views/home/home.html',
            controller: 'HomeCtrl',
            controllerAs: 'homeVm',
        });

        $stateProvider.state({
            name: 'account',
            url: '/account',
            templateUrl: 'views/account/account.html',
            controller: 'AccountCtrl',
            controllerAs: 'accountVm',
        });

        $stateProvider.state({
            name: 'account.changePass',
            url: '/change-pass',
            templateUrl: 'views/account/account-change-pass/account-change-pass.html',
            controller: 'AccountChangePassCtrl',
            controllerAs: 'accountChangePassVm',
        });

        $stateProvider.state({
            name: 'account.info',
            url: '/info',
            templateUrl: 'views/account/account-info/account-info.html',
            controller: 'AccountInfoCtrl',
            controllerAs: 'accountInfoVm',
        });

        $stateProvider.state({
            name: 'account.order',
            url: '/order',
            templateUrl: 'views/account/account-order/account-order.html',
            controller: 'AccountOrderCtrl',
            controllerAs: 'accountOrderVm',
        });

        $stateProvider.state({
            name: 'checkout',
            url: '/checkout',
            templateUrl: 'views/checkout/checkout.html',
            controller: 'CheckoutCtrl',
            controllerAs: 'checkoutVm',
        });

        $stateProvider.state({
            name: 'checkout.cart',
            url: '/cart',
            templateUrl: 'views/checkout/checkout-cart/checkout-cart.html',
            controller: 'CheckoutCartCtrl',
            controllerAs: 'checkoutCartVm',
        });
        
        $stateProvider.state({
            name: 'checkout.login',
            url: '/login',
            templateUrl: 'views/checkout/checkout-login/checkout-login.html',
            controller: 'CheckoutLoginCtrl',
            controllerAs: 'checkoutLoginVm',
        });

        $stateProvider.state({
            name: 'checkout.address',
            url: '/address',
            templateUrl: 'views/checkout/checkout-address/checkout-address.html',
            controller: 'CheckoutAddressCtrl',
            controllerAs: 'checkoutAddressVm',
        });

        $stateProvider.state({
            name: 'checkout.payment',
            url: '/payment',
            templateUrl: 'views/checkout/checkout-payment/checkout-payment.html',
            controller: 'CheckoutPaymentCtrl',
            controllerAs: 'checkoutPaymentVm',
        });


        $stateProvider.state({
            name: 'checkoutFinish',
            url: '/checkout-finish',
            templateUrl: 'views/checkout-finish/checkout-finish.html',
            controller: 'CheckoutFinishCtrl',
            controllerAs: 'checkoutFinishVm',
        });


        $stateProvider.state({
            name: 'productSearch',
            url: '/product-search?query',
            templateUrl: 'views/product-search/product-search.html',
            controller: 'ProductSearchCtrl',
            controllerAs: 'productSearchVm',
        });

        $stateProvider.state({
            name: 'accessorySearch',
            url: '/accessory-search?query',
            templateUrl: 'views/accessory-search/accessory-search.html',
            controller: 'AccessorySearchCtrl',
            controllerAs: 'accessorySearchVm',
        });

        $stateProvider.state({
            name: 'category',
            abstract: true,
            url: '/category',
            template: '<ui-view></ui-view>',
        });

        $stateProvider.state({
            name: 'category.phone',
            url: '/phone',
            templateUrl: 'views/category-phone/category-phone.html',
            controller: 'CategoryPhoneCtrl',
            controllerAs: 'categoryPhoneVm',
        });

        $stateProvider.state({
            name: 'category.tablet',
            url: '/tablet',
            templateUrl: 'views/category-tablet/category-tablet.html',
            controller: 'CategoryTabletCtrl',
            controllerAs: 'categoryTabletVm',
        });

        $stateProvider.state({
            name: 'category.laptop',
            url: '/laptop',
            templateUrl: 'views/category-laptop/category-laptop.html',
            controller: 'CategoryLaptopCtrl',
            controllerAs: 'categoryLaptopVm',
        });

        $stateProvider.state({
            name: 'category.accessory',
            url: '/accessory',
            templateUrl: 'views/category-accessory/category-accessory.html',
            controller: 'CategoryAccessoryCtrl',
            controllerAs: 'categoryAccessoryVm',
        });

        $stateProvider.state({
            name: 'category.accessory.case',
            url: '/case',
            templateUrl: 'views/category-case/category-case.html',
            controller: 'CategoryCaseCtrl',
            controllerAs: 'categoryCaseVm',
        });

        $stateProvider.state({
            name: 'category.accessory.connector',
            url: '/connector',
            templateUrl: 'views/category-connector/category-connector.html',
            controller: 'CategoryConnectorCtrl',
            controllerAs: 'categoryConnectorVm',
        });


        $stateProvider.state({
            name: 'category.accessory.headphone',
            url: '/headphone',
            templateUrl: 'views/category-headphone/category-headphone.html',
            controller: 'CategoryHeadphoneCtrl',
            controllerAs: 'categoryHeadphoneVm',
        });

        $stateProvider.state({
            name: 'category.accessory.flashdisk',
            url: '/flashdisk',
            templateUrl: 'views/category-flashdisk/category-flashdisk.html',
            controller: 'CategoryFlashdiskCtrl',
            controllerAs: 'categoryFlashdiskVm',
        });

        $stateProvider.state({
            name: 'category.accessory.mouse',
            url: '/mouse',
            templateUrl: 'views/category-mouse/category-mouse.html',
            controller: 'CategoryMouseCtrl',
            controllerAs: 'categoryMouseVm',
        });

        $stateProvider.state({
            name: 'category.accessory.usb',
            url: '/usb',
            templateUrl: 'views/category-usb/category-usb.html',
            controller: 'CategoryUsbCtrl',
            controllerAs: 'categoryUsbVm',
        });

        $stateProvider.state({
            name: 'productDetails',
            abstract: true,
            url: '/product-details',
            template: '<ui-view></ui-view>',
        });

        $stateProvider.state({
            name: 'productDetails.productId',
            url: '/:productId',
            templateUrl: 'views/product-details/product-details.html',
            controller: 'ProductDetailsCtrl',
            controllerAs: 'productDetailsVm',
        });


        angular.extend(toastrConfig, {
            positionClass: 'toast-bottom-center',
            timeOut: 2000
        });
    });
