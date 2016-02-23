define(['constants', 'customExceptions','polyfiller'], function(CONSTANTS, CustomExceptions){
    "use strict";

    Function.prototype.extends = function (parent) {
        "use strict";
        this.prototype = Object.create(parent.prototype);
        this.prototype.constructor = this;
    };

    return (function () {
        "use strict";

        function validateTypeOf(valueParameter, validationTypeString) {
            if (typeof(valueParameter) !== validationTypeString) {
                throw new TypeError(CONSTANTS.MESSAGES.WRONG_TYPE_MESSAGE + validationTypeString);
            }
        }

        function validateString(stringParameter, stringParameterName) {
            validateTypeOf(stringParameter, 'string');
            if (!CONSTANTS.PATTERNS.ONLY_LETTERS_N_WHITESPACE.test(stringParameter)) {
                throw new CustomExceptions.InvalidStringError(stringParameterName);
            }
        }

        function validateNumber(numberParameter, numberParameterName) {
            validateTypeOf(numberParameter, 'number');
            if (!CONSTANTS.PATTERNS.ONLY_DIGITS.test(numberParameter)) {
                throw new CustomExceptions.InvalidNumberError(numberParameterName);
            }
        }

        function validateInstanceOf(objectParameter, objectParameterName, classObjectParameter) {
            if (!(objectParameter instanceof classObjectParameter)) {
                throw new CustomExceptions.InvalidInstanceError(objectParameterName, classObjectParameter);
            }
        }

        return {
            validateString: validateString,
            validateNumber: validateNumber,
            validateInstanceOf: validateInstanceOf
        };
    }());
});
