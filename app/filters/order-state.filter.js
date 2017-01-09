angular.module('orionEcommerceApp')
    .filter('orderState', function() {
    	var state = [null, 'Chờ giao hàng', 'Đã giao hàng thành công', 'Hủy đơn hàng', 'Đơn hàng bị hoàn trả' ]

        return function(stateCode) {
            return state[stateCode];
        }

    });
