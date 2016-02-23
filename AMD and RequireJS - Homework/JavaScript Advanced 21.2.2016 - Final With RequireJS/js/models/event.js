define(['extensions'], function(validator){
    "use strict";

    return (function (validator) {
        "use strict";

        function Event(options) {
            if (this.constructor == Event) {
                throw new Error('Cannot create instance of Event abstract class');
            }
            this.setTitle(options.title);
            this.setType(options.type);
            this.setDuration(options.duration);
            this.setDate(options.date);
        }

        Event.prototype.getTitle = function getTitle() {
            return this._title
        };

        Event.prototype.setTitle = function setTitle(title) {
            validator.validateString(title, 'title');
            this._title = title;
        };

        Event.prototype.getType = function getType() {
            return this._type
        };

        Event.prototype.setType = function setType(type) {
            validator.validateString(type, 'type');
            this._type = type;
        };

        Event.prototype.getDuration = function getDuration() {
            return this._duration;
        };

        Event.prototype.setDuration = function setDuration(duration) {
            validator.validateNumber(duration, 'duration');
            this._duration = duration;
        };

        Event.prototype.getDate = function getDate() {
            return this._date;
        };

        Event.prototype.setDate = function setDate(date) {
            validator.validateInstanceOf(date, 'date', Date);
            this._date = date;
        };

        return Event;
    })(validator);
});