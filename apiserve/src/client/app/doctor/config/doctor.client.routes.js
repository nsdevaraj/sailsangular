(function() {
    'use strict';

    angular
        .module('app.doctor')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'listDoctor',
                config: {
                    url: '/doctor',
                    templateUrl: 'app/doctor/views/list.html',
                    controller: 'DoctorController',
                    controllerAs: 'vm',
                    title: 'List Doctors',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-folder-open"></i> Doctors'
                    }
                }
            },
            {
                state: 'createDoctor',
                config: {
                    url: '/doctor/create',
                    templateUrl: 'app/doctor/views/create.html',
                    controller: 'DoctorController',
                    controllerAs: 'vm',
                    title: 'Create Doctor'
                }
            },
            {
                state: 'viewDoctor',
                config: {
                    url: '/doctor/:doctorId',
                    templateUrl: 'app/doctor/views/view.html',
                    controller: 'DoctorController',
                    controllerAs: 'vm',
                    title: 'View Doctor'
                }
            },
            {
                state: 'editDoctor',
                config: {
                    url: '/doctor/:doctorId/edit',
                    templateUrl: 'app/doctor/views/edit.html',
                    controller: 'DoctorController',
                    controllerAs: 'vm',
                    title: 'Edit Doctor'
                }
            }
        ];
    }
})();
