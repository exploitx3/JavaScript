define(['extensions','event', 'trainer', 'course'], function (validator, _event, _trainer, _course) {
    return (function (validator) {
        "use strict";

        function Lecture(options) {
            _event.call(this, options);
            this.setTrainer(options.trainer);
            this.setCourse(options.course);
        }

        Lecture.extends(_event);

        Lecture.prototype.getTrainer = function getTrainer() {
            return this._trainer;
        };
        Lecture.prototype.setTrainer = function setTrainer(trainer) {
            validator.validateInstanceOf(trainer, 'trainer', _trainer);
            this._trainer = trainer;
        };

        Lecture.prototype.getCourse = function getCourse() {
            return this._course;
        };
        Lecture.prototype.setCourse = function setCourse(course) {
            validator.validateInstanceOf(course, 'course', _course);
            this._course = course;
        };

        return Lecture;
    })(validator);
});