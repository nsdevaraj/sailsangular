(function () {
    'use strict';

    angular
        .module('app.vital')
        .controller('VitalController', VitalController);

    VitalController.$inject = ['logger',
        '$stateParams',
        '$location',
        'Vital',
        'TableSettings',
        'VitalForm'];
    /* @ngInject */
    function VitalController(logger,
        $stateParams,
        $location,
        Vital,
        TableSettings,
        VitalForm) {

        var vm = this;

        vm.tableParams = TableSettings.getParams(Vital);
        vm.vital = {};

        vm.setFormFields = function(disabled) {
            vm.formFields = VitalForm.getFormFields(disabled);
        };

        vm.create = function() {
            // Create new Vital object
            var vital = new Vital(vm.vital);

            // Redirect after save
            vital.$save(function(response) {
                logger.success('Vital created');
                $location.path('vitals/' + response.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        // Remove existing Vital
        vm.remove = function(vital) {

            if (vital) {
                vital = Vital.get({vitalId:vital.id}, function() {
                    vital.$remove(function() {
                        logger.success('Vital deleted');
                        vm.tableParams.reload();
                    });
                });
            } else {
                vm.vital.$remove(function() {
                    logger.success('Vital deleted');
                    $location.path('/vitals');
                });
            }

        };

        // Update existing Vital
        vm.update = function() {
            var vital = vm.vital;

            vital.$update(function() {
                logger.success('Vital updated');
                $location.path('vitals/' + vital.id);
            }, function(errorResponse) {
                vm.error = errorResponse.data.summary;
            });
        };

        vm.toViewVital = function() {
            vm.vital = Vital.get({vitalId: $stateParams.vitalId});
            vm.setFormFields(true);
        };

        vm.toEditVital = function() {
            vm.vital = Vital.get({vitalId: $stateParams.vitalId});
            vm.setFormFields(false);
        };

        activate();

        function activate() {
            //logger.info('Activated Vital View');
        }
    }

})();
