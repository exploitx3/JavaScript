define(['extensions', 'employee', 'course'], function (validator, _employee, _course) {
    return (function (validator) {
        "use strict";

        function Trainer(name, workHours) {
            _employee.call(this, name, workHours);
            this.courses = [];
            this.feedbacks = [];
        }

        Trainer.extends(_employee);

        Trainer.prototype.addCourse = function addCourse(course) {
            validator.validateInstanceOf(course, 'course', _course);
            this.courses.push(course);
        };

        Trainer.prototype.addFeedback = function addFeedback(feedback) {
            validator.validateString(feedback, 'feedback');
            this.feedbacks.push(feedback);
        };


        return Trainer;
    })(validator);
});