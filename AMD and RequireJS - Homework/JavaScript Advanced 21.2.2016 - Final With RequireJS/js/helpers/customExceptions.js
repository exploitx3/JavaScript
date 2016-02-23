define('constants', function(app){
    "use strict";

    return (function (){
        "use strict";
        function InstantiateAbstractError(message){
            this.message = message;
        }
        InstantiateAbstractError.extends(Error);

        function InvalidStringError(stringParameterName){
            this.message = 'The ' + stringParameterName + app.CONSTANTS.MESSAGES.ONLY_LETTERS_N_WHITESPACE_MESSAGE;
        }
        InvalidStringError.extends(Error);

        function InvalidNumberError(numberParameterName) {
            this.message = 'The ' + numberParameterName + app.CONSTANTS.MESSAGES.ONLY_DIGITS_MESSAGE;
        }
        InvalidNumberError.extends(Error);

        function InvalidInstanceError(objectParameterName, classObjectParameter) {
            this.message = 'The ' + objectParameterName + ' must be a ' + classObjectParameter.name + ' object';
        }
        InvalidInstanceError.extends(Error);

        return {
            InstantiateAbstractException: InstantiateAbstractError,
            InvalidStringError: InvalidStringError,
            InvalidNumberError: InvalidNumberError,
            InvalidInstanceError: InvalidInstanceError
        }
    })();
});