angular.module('orionEcommerceApp')
    .controller('ProductSearchCtrl', function($stateParams) {
        var vm = this;

        vm.query = $stateParams.query;

        vm.results = [{
            id: 'PK001',
            image: 'img/product/iphone-6s-plus.png',
            title: 'iPhone 6s Plus 128GB',
            price: 19000000,
            tags: ['Hot', 'Giảm giá']
        }, {
            id: 'PK001',
            image: 'img/product/iphone-6s-plus.png',
            title: 'iPhone 6s Plus 128GB',
            price: 19000000,
            tags: ['Hot', 'Giảm giá', 'Mới']
        }, {
            id: 'PK001',
            image: 'img/product/iphone-6s-plus.png',
            title: 'iPhone 6s Plus 128GB',
            price: 19000000,
            tags: ['Hot', 'Giảm giá', 'Mới']
        }, {
            id: 'PK001',
            image: 'img/product/iphone-6s-plus.png',
            title: 'iPhone 6s Plus 128GB',
            price: 19000000,
            tags: ['Hot', 'Giảm giá', 'Mới']
        }];
    });
