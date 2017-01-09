angular.module('orionEcommerceApp')
    .controller('AccountOrderCtrl', function(userService, toastr) {
        var vm = this;

        vm.isGettingOrder = true;

        function convertStringToDate(data, attr) {
            data.forEach(function(item) {
                item[attr] = new Date(item[attr]);
            });
        }

        userService.getOrders()
            .then(function(res) {
                convertStringToDate(res.data, 'orderDate');
                vm.orders = res.data;
                vm.isGettingOrder = false;
            }, function() {
                vm.isGettingOrder = false;
                toastr.error('Không thể lấy danh sách đơn đặt hàng');
            });


    });
