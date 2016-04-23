(function() {
    'use strict';

    angular
        .module('app.vital')
        .factory('Vital', Vital);

    Vital.$inject = ['$resource', 'API_BASE_URL'];
    /* @ngInject */
    function Vital($resource, API_BASE_URL) {

        var params = {
            vitalId: '@id'
        };

        var actions = {
            update: {
                method: 'PUT'
            }
        };

        var API_URL = API_BASE_URL + '/vital/:vitalId';

        return $resource(API_URL, params, actions);

    }

})();
