define(['extensions', 'event', 'employee'], function (validator, _event, _employee) {
    return (function (validator) {
        "use strict";

        function Party(options) {
            _event.call(this, options);
            this.setIsCatered(options.isCatered);
            this.setIsBirthday(options.isBirthday);
            this.setOrganiser(options.organiser);
        }

        Party.extends(_event);

        Party.prototype.checkIsCatered = function CheckIsCatered() {
            return this._isCatered;
        };

        Party.prototype.setIsCatered = function setIsCatered(isCatered) {
            this._isCatered = Boolean(isCatered);
        };

        Party.prototype.checkIsBirthday = function CheckIsBirthDay() {
            return this._isBirthday;
        };

        Party.prototype.setIsBirthday = function setIsBirthday(isBirthday) {
            this._isBirthday = isBirthday;
        };

        Party.prototype.getOrganiser = function getOrganiser() {
            return this._organiser;
        };

        Party.prototype.setOrganiser = function setOrganizer(organiser) {
            validator.validateInstanceOf(organiser, 'organiser', _employee);
            this._organiser = organiser;
        };

        return Party;
    })(validator);
});