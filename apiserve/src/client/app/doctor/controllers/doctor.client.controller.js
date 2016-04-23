(function () {
    'use strict';

    angular
        .module('app.doctor')
        .controller('DoctorController', DoctorController);

    DoctorController.$inject = ['logger',
        '$stateParams',
        '$location',
        'Doctor',
        'TableSettings',
        'DoctorForm'];
    /* @ngInject */
    function DoctorController(logger,
        $stateParams,
        $location,
        Doctor,
        TableSettings,
        DoctorForm) {

        var vm = this;

        vm.tableParams = TableSettings.getParams(Doctor);
        vm.doctor = {};

        vm.setFormFields = function(disabled) {
            vm.formFields = DoctorForm.getFormFields(disabled);
        };

        vm.create = function() {
            // Create new Doctor object
            var doctor = new Doctor(vm.doctor);

            // Redirect after save
            doctor.$save(function(response) {
                logger.success('Doctor created');
                $location.path('doctor/' + response.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        // Remove existing Doctor
        vm.remove = function(doctor) {

            if (doctor) {
                doctor = Doctor.get({doctorId:doctor.id}, function() {
                    doctor.$remove(function() {
                        logger.success('Doctor deleted');
                        vm.tableParams.reload();
                    });
                });
            } else {
                vm.doctor.$remove(function() {
                    logger.success('Doctor deleted');
                    $location.path('/doctor');
                });
            }

        };

        // Update existing Doctor
        vm.update = function() {
            var doctor = vm.doctor;

            doctor.$update(function() {
                logger.success('Doctor updated');
                $location.path('doctor/' + doctor.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        vm.toViewDoctor = function() {
            vm.doctor = Doctor.get({doctorId: $stateParams.doctorId});
            vm.setFormFields(true);
        };

        vm.toEditDoctor = function() {
            vm.doctor = Doctor.get({doctorId: $stateParams.doctorId});
            vm.setFormFields(false);
        };

        activate();

        function activate() {
            //logger.info('Activated Doctor View');
        }
    }

})();
