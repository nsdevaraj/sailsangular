(function() {
    'use strict';

    angular
        .module('app.patient')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'listPatient',
                config: {
                    url: '/patient',
                    templateUrl: 'app/patient/views/list.html',
                    controller: 'PatientController',
                    controllerAs: 'vm',
                    title: 'List Patients',
                    settings: {
                        nav: 3,
                        content: '<i class="fa fa-folder-open"></i> Patients'
                    }
                }
            },
            {
                state: 'createPatient',
                config: {
                    url: '/patient/create',
                    templateUrl: 'app/patient/views/create.html',
                    controller: 'PatientController',
                    controllerAs: 'vm',
                    title: 'Create Patient'
                }
            },
            {
                state: 'viewPatient',
                config: {
                    url: '/patient/:patientId',
                    templateUrl: 'app/patient/views/view.html',
                    controller: 'PatientController',
                    controllerAs: 'vm',
                    title: 'View Patient'
                }
            },
            {
                state: 'editPatient',
                config: {
                    url: '/patient/:patientId/edit',
                    templateUrl: 'app/patient/views/edit.html',
                    controller: 'PatientController',
                    controllerAs: 'vm',
                    title: 'Edit Patient'
                }
            }
        ];
    }
})();
