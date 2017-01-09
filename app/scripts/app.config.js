angular.module('orionEcommerceApp')
    .config(function($stateProvider, $authProvider, toastrConfig, API_ENDPOINT) {

        // route

        $stateProvider.state({
            name: 'home',
            url: '/home',
            templateUrl: 'views/home/home.html',
            controller: 'HomeCtrl',
            controllerAs: 'homeVm',
            authRequired: false
        });

        $stateProvider.state({
            name: 'account',
            url: '/account',
            templateUrl: 'views/account/account.html',
            controller: 'AccountCtrl',
            controllerAs: 'accountVm',
            authRequired: true
        });

        $stateProvider.state({
            name: 'account.changePass',
            url: '/change-pass',
            templateUrl: 'views/account/account-change-pass/account-change-pass.html',
            controller: 'AccountChangePassCtrl',
            controllerAs: 'accountChangePassVm',
            authRequired: true
        });

        $stateProvider.state({
            name: 'account.info',
            url: '/info',
            templateUrl: 'views/account/account-info/account-info.html',
            controller: 'AccountInfoCtrl',
            controllerAs: 'accountInfoVm',
            authRequired: true
        });

        $stateProvider.state({
            name: 'account.order',
            url: '/order',
            templateUrl: 'views/account/account-order/account-order.html',
            controller: 'AccountOrderCtrl',
            controllerAs: 'accountOrderVm',
            authRequired: true
        });

        $stateProvider.state({
            name: 'checkout',
            url: '/checkout',
            templateUrl: 'views/checkout/checkout.html',
            controller: 'CheckoutCtrl',
            controllerAs: 'checkoutVm',
            authRequired: false
        });

        $stateProvider.state({
            name: 'checkout.cart',
            url: '/cart',
            templateUrl: 'views/checkout/checkout-cart/checkout-cart.html',
            controller: 'CheckoutCartCtrl',
            controllerAs: 'checkoutCartVm',
            authRequired: false
        });

        $stateProvider.state({
            name: 'checkout.login',
            url: '/login',
            templateUrl: 'views/checkout/checkout-login/checkout-login.html',
            controller: 'CheckoutLoginCtrl',
            controllerAs: 'checkoutLoginVm',
            authRequired: false
        });

        $stateProvider.state({
            name: 'checkout.address',
            url: '/address',
            templateUrl: 'views/checkout/checkout-address/checkout-address.html',
            controller: 'CheckoutAddressCtrl',
            controllerAs: 'checkoutAddressVm',
            authRequired: true
        });

        $stateProvider.state({
            name: 'checkout.payment',
            url: '/payment',
            templateUrl: 'views/checkout/checkout-payment/checkout-payment.html',
            controller: 'CheckoutPaymentCtrl',
            controllerAs: 'checkoutPaymentVm',
            authRequired: true
        });


        $stateProvider.state({
            name: 'checkoutFinish',
            url: '/checkout-finish',
            templateUrl: 'views/checkout-finish/checkout-finish.html',
            controller: 'CheckoutFinishCtrl',
            controllerAs: 'checkoutFinishVm',
            authRequired: true
        });


        $stateProvider.state({
            name: 'productSearch',
            url: '/product-search?query',
            templateUrl: 'views/product-search/product-search.html',
            controller: 'ProductSearchCtrl',
            controllerAs: 'productSearchVm',
            authRequired: false
        });

        $stateProvider.state({
            name: 'accessorySearch',
            url: '/accessory-search?query',
            templateUrl: 'views/accessory-search/accessory-search.html',
            controller: 'AccessorySearchCtrl',
            controllerAs: 'accessorySearchVm',
            authRequired: false
        });

        $stateProvider.state({
            name: 'category',
            abstract: true,
            url: '/category',
            template: '<div ui-view><div class="spinner margin-top-lg"></div><div>',
        });

        $stateProvider.state({
            name: 'category.phone',
            url: '/phone',
            templateUrl: 'views/category-phone/category-phone.html',
            controller: 'CategoryPhoneCtrl',
            controllerAs: 'categoryPhoneVm',
            authRequired: false
        });

        $stateProvider.state({
            name: 'category.tablet',
            url: '/tablet',
            templateUrl: 'views/category-tablet/category-tablet.html',
            controller: 'CategoryTabletCtrl',
            controllerAs: 'categoryTabletVm',
            authRequired: false
        });

        $stateProvider.state({
            name: 'category.laptop',
            url: '/laptop',
            templateUrl: 'views/category-laptop/category-laptop.html',
            controller: 'CategoryLaptopCtrl',
            controllerAs: 'categoryLaptopVm',
            authRequired: false
        });

        $stateProvider.state({
            name: 'category.accessory',
            url: '/accessory',
            templateUrl: 'views/category-accessory/category-accessory.html',
            controller: 'CategoryAccessoryCtrl',
            controllerAs: 'categoryAccessoryVm',
            authRequired: false
        });

        $stateProvider.state({
            name: 'category.accessory.case',
            url: '/case',
            templateUrl: 'views/category-case/category-case.html',
            controller: 'CategoryCaseCtrl',
            controllerAs: 'categoryCaseVm',
            authRequired: false
        });

        $stateProvider.state({
            name: 'category.accessory.connector',
            url: '/connector',
            templateUrl: 'views/category-connector/category-connector.html',
            controller: 'CategoryConnectorCtrl',
            controllerAs: 'categoryConnectorVm',
            authRequired: false
        });


        $stateProvider.state({
            name: 'category.accessory.headphone',
            url: '/headphone',
            templateUrl: 'views/category-headphone/category-headphone.html',
            controller: 'CategoryHeadphoneCtrl',
            controllerAs: 'categoryHeadphoneVm',
            authRequired: false
        });

        $stateProvider.state({
            name: 'category.accessory.flashdisk',
            url: '/flashdisk',
            templateUrl: 'views/category-flashdisk/category-flashdisk.html',
            controller: 'CategoryFlashdiskCtrl',
            controllerAs: 'categoryFlashdiskVm',
            authRequired: false
        });

        $stateProvider.state({
            name: 'category.accessory.mouse',
            url: '/mouse',
            templateUrl: 'views/category-mouse/category-mouse.html',
            controller: 'CategoryMouseCtrl',
            controllerAs: 'categoryMouseVm',
            authRequired: false
        });

        $stateProvider.state({
            name: 'category.accessory.usb',
            url: '/usb',
            templateUrl: 'views/category-usb/category-usb.html',
            controller: 'CategoryUsbCtrl',
            controllerAs: 'categoryUsbVm',
            authRequired: false
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
            authRequired: false
        });

        // Facebook
        $authProvider.facebook({
            clientId: '1102384113204168',
            name: 'facebook',
            url: API_ENDPOINT + '/facebook/login',
            authorizationEndpoint: 'https://www.facebook.com/dialog/oauth?',
            redirectUri: window.location.origin + '/orion/app/index.html',
            scope: ['public_profile'],
            display: 'popup',
            oauthType: '2.0',
    
        });


        // $authProvider.oauth2({
        //     name: 'orion',
        //     url: '/auth/foursquare',
        //     clientId: 2,
        //     redirectUri: window.location.origin,
        //     authorizationEndpoint: 'https://foursquare.com/oauth2/authenticate',
        // });


        // toastr

        angular.extend(toastrConfig, {
            positionClass: 'toast-top-center',
            timeOut: 2000
        });
    });
