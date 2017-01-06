angular.module('orionEcommerceApp')
	.controller('CategoryCaseCtrl', function($filter, $scope, $timeout) {
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

        // capacity slider
        // vm.capacitySlider = {
        //     min: 0,
        //     max: 512,
        //     options: {
        //         floor: 0,
        //         ceil: 512,
        //         step: 8,
        //         onEnd: function() {

        //         },
        //         translate: function(value) {
        //             return numberFilter(value) + ' GB';
        //         }
        //     }
        // };

        // Price slider

        vm.priceSlider = {
            min: 250000,
            max: 30000000,
            options: {
                floor: 250000,
                ceil: 30000000,
                step: 250000,
                onEnd: function() {

                },
                translate: function(value) {
                    return numberFilter(value) + ' đ';
                }
            }
        };
	});