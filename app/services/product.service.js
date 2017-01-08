angular.module('orionEcommerceApp')
    .factory('productService', function($q, $http, API_ENDPOINT) {

        function preprocessProduct(product) {
            if (product.hasOwnProperty('details')) {
                product.details = JSON.parse(product.details);
            }

            var newTag = [];

            for (var i = 0; i < product.tags.length; i++) {
                if (product.tags[i].tagName === 'Hot' || product.tags[i].tagName === 'Mới' || product.tags[i].tagName === 'Giảm giá') {
                    newTag.push(product.tags[i]);
                }
            }

            product.tags = newTag;
        }

        function preprocessProductList(products) {
            for (var i = 0; i < products.length; i++) {
                preprocessProduct(products[i]);
            }
        }

        function getFeaturedProducts() {
            return $http({
                method: 'GET',
                url: API_ENDPOINT + '/featured-products',
            }).then(function(res) {
                preprocessProductList(res.data);
                return res;
            });
        }

        function getFeaturedAccessories() {
            return $http({
                method: 'GET',
                url: API_ENDPOINT + '/featured-accessories',
            }).then(function(res) {
                preprocessProductList(res.data);
                return res;
            });
        }

        function getProducts(category, params) {

            if (category === 'phone') {
                return $http({
                    method: 'GET',
                    url: API_ENDPOINT + '/categories/phone',
                    params: params
                }).then(function(res) {
                    preprocessProductList(res.data);
                    return res;
                });
            } else if (category === 'tablet') {
                return $http({
                    method: 'GET',
                    url: API_ENDPOINT + '/categories/tablet',
                    params: params
                }).then(function(res) {
                    preprocessProductList(res.data);
                    return res;
                });
            } else if (category === 'headphone') {
                return $http({
                    method: 'GET',
                    url: API_ENDPOINT + '/categories/headphone',
                    params: params
                }).then(function(res) {
                    preprocessProductList(res.data);
                    return res;
                });
            } else if (category === 'laptop') {
                return $http({
                    method: 'GET',
                    url: API_ENDPOINT + '/categories/laptop',
                    params: params
                }).then(function(res) {
                    preprocessProductList(res.data);
                    return res;
                });
            } else if (category === 'connector') {
                return $http({
                    method: 'GET',
                    url: API_ENDPOINT + '/categories/connector',
                    params: params
                }).then(function(res) {
                    preprocessProductList(res.data);
                    return res;
                });
            } else {

            }
        }

        function getProduct(id) {
            return $http({
                method: 'GET',
                url: API_ENDPOINT + '/products/' + id,
            }).then(function(res) {
                preprocessProduct(res.data);
                return res;
            });
        }

        function getRelatedProducts(id) {
            return $http({
                method: 'GET',
                url: API_ENDPOINT + '/products/' + id + '/related-products',
            });
        }

        function getRelatedAccessories(id) {
            return $http({
                method: 'GET',
                url: API_ENDPOINT + '/products/' + id + '/related-accessories',
            });
        }

        function searchProduct(query) {
            return $http({
                method: 'GET',
                url: API_ENDPOINT + '/search',
                params: {
                    q: query
                }
            }).then(function(res) {
                preprocessProductList(res.data);
                return res;
            });
        }

        return {
            getFeaturedProducts: getFeaturedProducts,
            getFeaturedAccessories: getFeaturedAccessories,
            getProducts: getProducts,
            getProduct: getProduct,
            getRelatedProducts: getRelatedProducts,
            getRelatedAccessories: getRelatedAccessories,
            searchProduct: searchProduct,
        };
    });
