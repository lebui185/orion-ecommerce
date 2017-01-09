angular.module('orionEcommerceApp')
    .factory('userService', function($http, API_ENDPOINT, authService, $rootScope, EVENT, toastr) {
        var apiUser = API_ENDPOINT + '/me';

        function resetUserProfile() {
            $rootScope.userProfile = {
                customerName: 'Tài khoản'
            };
        }

        function getUserProfile() {
            return $http({
                method: 'GET',
                url: apiUser
            }).then(function(res) {
                console.log(res.data);
                $rootScope.userProfile = res.data;
                $rootScope.userProfileTemp = angular.copy(res.data);
            }, function(res) {
                console.log(res);
                toastr.error('Không thể lấy thông tin user');
            });
        }

        function getUserProfileAssign() {
            return $http({
                method: 'GET',
                url: apiUser
            });
        }

        function getOrders() {
            return $http({
                method: 'GET',
                url: apiUser + '/bills',
            });
        }

        function updateProfile(profileData) {
            return $http({
                method: 'PUT',
                url: apiUser + '/profile',
                data: profileData
            });
        }

        function changePassword(oldPasword, newPassword) {
            return $http({
                method: 'PUT',
                url: apiUser + '/password',
                data: {
                    oldPasword: oldPasword,
                    newPassword: newPassword
                }
            });
        }

        $rootScope.$on(EVENT.AUTH_SUCCESS, function() {
            getUserProfile();
        });

        $rootScope.$on(EVENT.LOGOUT, function() {
            resetUserProfile();
        });

        resetUserProfile();

        return {
            getUserProfile: getUserProfile,
            getUserProfileAssign: getUserProfileAssign,
            getOrders: getOrders,
            updateProfile: updateProfile,
            changePassword: changePassword
        };
    });
