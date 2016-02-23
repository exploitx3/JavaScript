define(['extensions', 'party', 'lecture'], function (validator, _party, _lecture) {
    "use strict";

    return (function (validator) {
        function Hall(name, capacity) {
            "use strict";

            this.setName(name);
            this.setCapacity(capacity);
            this.parties = [];
            this.lectures = [];
        }

        Hall.prototype.getName = function getName() {
            return this._name
        };

        Hall.prototype.setName = function setName(name) {
            validator.validateString(name, 'name');
            this._name = name;
        };

        Hall.prototype.getCapacity = function getCapacity() {
            return this._capacity;
        };

        Hall.prototype.setCapacity = function setCapacity(capacity) {
            validator.validateNumber(capacity, 'capacity');
            this._capacity = capacity;
        };

        Hall.prototype.addEvent = function addEvent(event) {
            if (event instanceof _party) {
                this.parties.push(event);
            } else if (event instanceof _lecture) {
                this.lectures.push(event);
            }
        };


        return Hall;
    })(validator);
});