angular.module('orionEcommerceApp')
    .controller('AccessorySearchCtrl', function($stateParams) {
        var vm = this;

        vm.query = $stateParams.query;

        vm.getTagLabelClass = function(tag) {
            switch (tag.toLocaleLowerCase()) {
                case 'hot':
                    return 'label label-danger';
                case 'giảm giá':
                    return 'label label-primary';
                case 'mới':
                    return 'label label-info';
            }
        };

        vm.results = [{
            title: 'tai nghe',
            products: [{
                id: 'PK001',
                image: 'img/product/accessory/headphone/awei-gold-avatar.jpg',
                title: 'Tai nghe EP Awei ES979 Vi Gold',
                price: 100000,
                tags: ['Hot', 'Giảm giá']
            }, {
                id: 'PK001',
                image: 'img/product/accessory/headphone/awei-gold-avatar.jpg',
                title: 'Tai nghe EP Awei ES979 Vi Gold',
                price: 100000,
                tags: ['Hot', 'Giảm giá', 'Mới']
            }, {
                id: 'PK001',
                image: 'img/product/accessory/headphone/awei-gold-avatar.jpg',
                title: 'Tai nghe EP Awei ES979 Vi Gold',
                price: 100000,
                tags: ['Hot', 'Giảm giá', 'Mới']
            }, {
                id: 'PK001',
                image: 'img/product/accessory/headphone/awei-gold-avatar.jpg',
                title: 'Tai nghe EP Awei ES979 Vi Gold',
                price: 100000,
                tags: ['Hot', 'Giảm giá', 'Mới']
            }]
        }, {
            title: 'ốp lưng',
            products: [{
                id: 'PK001',
                image: 'img/product/accessory/case/oppo-a39-soft-plastic.jpg',
                title: 'Ốp lưng Oppo A39 dựa dẻo ilike xám',
                price: 200000,
                tags: ['Hot', 'Giảm giá']
            }, {
                id: 'PK001',
                image: 'img/product/accessory/case/oppo-a39-soft-plastic.jpg',
                title: 'Ốp lưng Oppo A39 dựa dẻo ilike xám',
                price: 200000,
                tags: ['Hot', 'Giảm giá', 'Mới']
            }, {
                id: 'PK001',
                image: 'img/product/accessory/case/oppo-a39-soft-plastic.jpg',
                title: 'Ốp lưng Oppo A39 dựa dẻo ilike xám',
                price: 200000,
                tags: ['Hot', 'Giảm giá', 'Mới']
            }, {
                id: 'PK001',
                image: 'img/product/accessory/case/oppo-a39-soft-plastic.jpg',
                title: 'Ốp lưng Oppo A39 dựa dẻo ilike xám',
                price: 200000,
                tags: ['Hot', 'Giảm giá', 'Mới']
            }]
        }, {
            title: 'cáp sạc',
            products: [{
                id: 'PK001',
                image: 'img/product/accessory/connector/micro-usb-20cm.jpg',
                title: 'Cáp Micro USB 20cm Eco MU09-200',
                price: 300000,
                tags: ['Hot', 'Giảm giá']
            }, {
                id: 'PK001',
                image: 'img/product/accessory/connector/micro-usb-20cm.jpg',
                title: 'Cáp Micro USB 20cm Eco MU09-200',
                price: 300000,
                tags: ['Hot', 'Giảm giá', 'Mới']
            }, {
                id: 'PK001',
                image: 'img/product/accessory/connector/micro-usb-20cm.jpg',
                title: 'Cáp Micro USB 20cm Eco MU09-200',
                price: 300000,
                tags: ['Hot', 'Giảm giá', 'Mới']
            }, {
                id: 'PK001',
                image: 'img/product/accessory/connector/micro-usb-20cm.jpg',
                title: 'Cáp Micro USB 20cm Eco MU09-200',
                price: 300000,
                tags: ['Hot', 'Giảm giá', 'Mới']
            }]
        }];
    });
