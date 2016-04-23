(function() {
    'use strict';

    angular
        .module('app.patient')
        .factory('Patient', Patient);

    Patient.$inject = ['$resource', 'API_BASE_URL'];
    /* @ngInject */
    function Patient($resource, API_BASE_URL) {

        var params = {
            patientId: '@id'
        };

        var actions = {
            update: {
                method: 'PUT'
            }
        };

        var API_URL = API_BASE_URL + '/patient/:patientId';

        return $resource(API_URL, params, actions);

    }

})();
