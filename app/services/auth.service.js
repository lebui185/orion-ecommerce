angular.module('orionEcommerceApp')
    .factory('authService', function($q, $http) {
        // var authUrl = API_ENDPOINT + '/authentication/access-token';
        // var AUTH_TOKEN_KEY = 'appToken';
        // var authToken;
        var isAuthenticated = true;

        // var authData = {
        //     'grant_type': 'password',
        //     'client_id': 'f3d259ddd3ed8ff3843839b',
        //     'client_secret': '4c7f6f8fa93d59c45502c0ae8c4a95b',
        //     'username': '',
        //     'password': ''
        // };

        // var applyAuthToken = function(token) {
        //     authToken = token;
        //     localStorageService.set(AUTH_TOKEN_KEY, token);
        //     isAuthenticated = true;
        //     $http.defaults.headers.common.Authorization = 'Bearer ' + token;
        // };

        // function loadAuthToken() {
        //     var token = localStorageService.get(AUTH_TOKEN_KEY);
        //     if (token) {
        //         applyAuthToken(token);
        //     }
        // }

        var authenticate = function(username, password) {
            isAuthenticated = true;
            return true;
        };

        var logout = function() {
            isAuthenticated = false;
        };

        // loadAuthToken();

        return {
            isAuthenticated: function() {
                return isAuthenticated;
            },
            authenticate: authenticate,
            logout: logout,
        };
    });
