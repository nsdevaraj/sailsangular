(function() {
    'use strict';

    angular
        .module('app.vital')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'listVital',
                config: {
                    url: '/vitals',
                    templateUrl: 'app/vitals/views/list.html',
                    controller: 'VitalController',
                    controllerAs: 'vm',
                    title: 'List Vitals',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-folder-open"></i> Vitals'
                    }
                }
            },
            {
                state: 'createVital',
                config: {
                    url: '/vitals/create',
                    templateUrl: 'app/vitals/views/create.html',
                    controller: 'VitalController',
                    controllerAs: 'vm',
                    title: 'Create Vital'
                }
            },
            {
                state: 'viewVital',
                config: {
                    url: '/vitals/:vitalId',
                    templateUrl: 'app/vitals/views/view.html',
                    controller: 'VitalController',
                    controllerAs: 'vm',
                    title: 'View Vital'
                }
            },
            {
                state: 'editVital',
                config: {
                    url: '/vitals/:vitalId/edit',
                    templateUrl: 'app/vitals/views/edit.html',
                    controller: 'VitalController',
                    controllerAs: 'vm',
                    title: 'Edit Vital'
                }
            }
        ];
    }
})();
