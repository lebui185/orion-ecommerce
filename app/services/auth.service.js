angular.module('orionEcommerceApp')
    .factory('authService', function($q, $http, $rootScope, API_ENDPOINT, $auth, localStorageService, EVENT) {
        var authUrl = API_ENDPOINT + '/login';
        var AUTH_TOKEN_KEY = 'AUTH_TOKEN_KEY';
        var authToken;
        var isAuthenticated = false;

        var authData = {
            'grant_type': 'password',
            'client_id': 2,
            'client_secret': 'uexrsBOzfb6y7PHm4C2tIQrROBzAnF74jx1485TN',
            'username': '',
            'password': ''
        };

        var applyAuthToken = function(token) {
            authToken = token;
            localStorageService.set(AUTH_TOKEN_KEY, token);
            isAuthenticated = true;
            $http.defaults.headers.common.Authorization = 'Bearer ' + token;
            $rootScope.$emit(EVENT.AUTH_SUCCESS, token);
        };

        function loadAuthToken() {
            var token = localStorageService.get(AUTH_TOKEN_KEY);
            if (token) {
                applyAuthToken(token);
            }
        }

        var authenticate = function(username, password) {
            authData.username = username;
            authData.password = password;

            return $q(function(resolve, reject) {
                $http({
                    method: 'POST',
                    url: authUrl,
                    data: authData
                }).then(function(res) {
                    console.log(res.data);
                    applyAuthToken(res.data.access_token);
                    resolve(res);
                }, function(res) {
                    reject(res);
                });
            });
        };

        var authenticateFacebook = function() {
            return $q(function(resolve, reject) {
                $auth.authenticate('facebook')
                    .then(function(res) {
                        console.log(res.data);
                        applyAuthToken(res.data.access_token);
                        resolve(res);
                    }, function(res) {
                        reject(res);
                    });
            });
        };

        var logout = function() {
            authToken = undefined;
            localStorageService.remove(AUTH_TOKEN_KEY);
            isAuthenticated = false;
            $rootScope.$emit(EVENT.LOGOUT, null);
            $http.defaults.headers.common.Authorization = undefined;
        };

        loadAuthToken();

        return {
            isAuthenticated: function() {
                return isAuthenticated;
            },
            authenticate: authenticate,
            authenticateFacebook: authenticateFacebook,
            logout: logout
        };
    });
