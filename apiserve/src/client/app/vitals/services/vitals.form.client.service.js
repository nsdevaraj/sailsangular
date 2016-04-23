(function() {
    'use strict';

    angular
        .module('app.vital')
        .factory('VitalForm', factory);

    function factory() {

        var getFormFields = function(disabled) {

            var fields = [
                {
                    key: 'interval',
                    type: 'input',
                    templateOptions: {
                        label: 'Interval:',
                        disabled: disabled,
                        required: true
                    }
                },
                {
                    key: 'minsp02',
                    type: 'input',
                    templateOptions: {
                        label: 'minsp02:',
                        disabled: disabled
                    }
                },
                {
                    key: 'maxsp02',
                    type: 'input',
                    templateOptions: {
                        label: 'maxsp02:',
                        disabled: disabled
                    }
                },
                {
                    key: 'minbeat',
                    type: 'input',
                    templateOptions: {
                        label: 'minbeat:',
                        disabled: disabled
                    }
                },
                {
                    key: 'maxbeat',
                    type: 'input',
                    templateOptions: {
                        label: 'maxbeat:',
                        disabled: disabled
                    }
                },
                {
                    key: 'mintemp',
                    type: 'input',
                    templateOptions: {
                        label: 'mintemp:',
                        disabled: disabled
                    }
                },
                {
                    key: 'maxtemp',
                    type: 'input',
                    templateOptions: {
                        label: 'maxtemp:',
                        disabled: disabled
                    }
                }
            ];

            return fields;

        };

        var service = {
            getFormFields: getFormFields
        };

        return service;

    }

})();
