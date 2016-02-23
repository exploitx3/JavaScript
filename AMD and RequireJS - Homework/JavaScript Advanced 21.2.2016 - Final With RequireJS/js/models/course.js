define(['extensions'], function(validator) {
    "use strict";

    return (function (validator){
        "use strict";

        function Course(name, numberOfLectures){
            this.setName(name);
            this.setNumberOfLectures(numberOfLectures);
        }

        Course.prototype.getName = function getName() {
            return this._name
        };

        Course.prototype.setName = function setName(name) {
            validator.validateString(name, 'name');
            this._name = name;
        };

        Course.prototype.getNumberOfLectures = function getNumberOfLectures() {
            return this._numberOfLectures;
        };

        Course.prototype.setNumberOfLectures = function setNumberOfLectures(numberOfLectures) {
            validator.validateNumber(numberOfLectures, 'number of lectures');
            this._numberOfLectures = numberOfLectures;
        };

        return Course
    })(validator);
});