(function() {
    'use strict';

    angular
        .module('app.doctor')
        .factory('Doctor', Doctor);

    Doctor.$inject = ['$resource', 'API_BASE_URL'];
    /* @ngInject */
    function Doctor($resource, API_BASE_URL) {

        var params = {
            doctorId: '@id'
        };

        var actions = {
            update: {
                method: 'PUT'
            }
        };

        var API_URL = API_BASE_URL + '/doctor/:doctorId';

        return $resource(API_URL, params, actions);

    }

})();
