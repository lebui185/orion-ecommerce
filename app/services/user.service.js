angular.module('orionEcommerceApp')
    .factory('userService', function($q, $http, API_ENDPOINT, authService, $rootScope, EVENT) {
    	var apiUser = API_ENDPOINT + '/me';

    	function getUserInfo() {
    		return $http({
    			method: 'GET',
    			url: apiUser
    		});
    	}

    	return {
    		getUserInfo: getUserInfo
    	}
    });