angular.module('orionEcommerceApp')
    .factory('cartService', function($q, $http, API_ENDPOINT, authService, localStorageService, $rootScope, EVENT) {
        var cartAPIUrl = API_ENDPOINT + '/me/cart';
        var CART_KEY = 'CART_KEY';

        // local cart

        function readFromLocalStorage() {
            var items = localStorageService.get(CART_KEY);

            if (items !== null) {
                items = JSON.parse(items);
            } else {
                items = [];
            }

            return items;
        }

        function storeItemsToLocalStorage(items) {
            localStorageService.set(CART_KEY, JSON.stringify(items));
        }

        function addToLocalStorage(item, quantity) {
            item = angular.copy(item);
            item.quantity = quantity;

            var items = readFromLocalStorage();

            for (var i = 0; i < items.length; i++) {
                if (items[i].id === item.id) {
                    items[i].quantity += quantity;
                    break;
                }
            }

            if (i === items.length) {
                items.push(item);
            }

            storeItemsToLocalStorage(items);

            return item;
        }

        function removeFromLocalStorage(id) {
            var items = readFromLocalStorage();

            for (var i = 0; i < items.length; i++) {
                if (items[i].id === id) {
                    var removedItem = items[i];
                    items.splice(i, 1);
                    storeItemsToLocalStorage(items);
                    return removedItem;
                }
            }

            return null;
        }

        function updateFromLocalStorage(item, quantity) {
            var items = readFromLocalStorage();

            for (var i = 0; i < items.length; i++) {
                if (items[i].id === item.id) {
                    items[i].quantity = quantity;
                    storeItemsToLocalStorage(items);
                    return angular.copy(items[i]);
                }
            }

            return null;
        }

        // remote cart

        function addToRemote(item, quantity) {
            return $http({
                method: 'POST',
                'url': cartAPIUrl + '/items',
                data: {
                    id: item.id,
                    quantity: quantity
                }
            });
        }

        function removeItemRemote(id) {
            return $http({
                method: 'DELETE',
                'url': cartAPIUrl + '/items/' + id,
            });
        }

        function updateItemRemote(item, quantity) {
            return $http({
                method: 'PUT',
                'url': cartAPIUrl + '/items/' + item.id,
                data: item
            });
        }

        // public

        function addItem(item, quantity) {
            if (authService.isAuthenticated()) {
                return addToRemote(item, quantity);
            } else {
                var p = new Promise(function(resolve, reject) {
                    var data = addToLocalStorage(item, quantity);
                    console.log(item);
                    resolve({
                        data: data
                    });
                });
                return p;
            }

        }

        function removeItem(id) {

            if (authService.isAuthenticated()) {
                return removeItemRemote(id);
            } else {
                var p = new Promise(function(resolve, reject) {
                    var data = removeFromLocalStorage(id);
                    resolve({
                        data: data
                    });
                });
                return p;
            }
        }

        function updateItem(item, quantity) {
            if (authService.isAuthenticated()) {
                return updateItemRemote(item, quantity);
            } else {
                var p = new Promise(function(resolve, reject) {
                    var data = updateFromLocalStorage(item, quantity);
                    resolve({
                        data: data
                    });
                });
                return p;
            }
        }

        function getItems() {
            if (authService.isAuthenticated()) {
                return $http({
                    method: 'GET',
                    'url': cartAPIUrl + '/items'
                });
            } else {
                var p = new Promise(function(resolve, reject) {
                    var items = readFromLocalStorage();
                    resolve({
                        data: items
                    });
                });
                return p;
            }
        }

        function clearLocal() {
            localStorageService.remove(CART_KEY);
        }

        return {
            addItem: addItem,
            removeItem: removeItem,
            updateItem: updateItem,
            getItems: getItems,
            clearLocal: clearLocal
        };
    });
