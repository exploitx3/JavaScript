define(['extensions'], function(validator) {
    "use strict";

    return (function (validator) {
        "use strict";

        function Employee(name, workHours) {
            this.setName(name);
            this.setWorkhours(workHours);
        }

        Employee.prototype.getName = function getName() {
            return this._name
        };

        Employee.prototype.setName = function setName(name) {
            validator.validateString(name, 'name');
            this._name = name;
        };

        Employee.prototype.getWorkhours = function getWorkHours() {
            return this._workHours;
        };

        Employee.prototype.setWorkhours = function setWorkHours(workHours) {
            validator.validateNumber(workHours, 'work hours');
            this._workHours = workHours;
        };

        return Employee;
    })(validator);
});