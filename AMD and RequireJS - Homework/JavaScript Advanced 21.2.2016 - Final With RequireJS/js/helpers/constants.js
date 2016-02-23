define([''], function() {
    "use strict";

    return {
        PATTERNS: {
            ONLY_LETTERS_N_WHITESPACE: /^[A-Za-z\s]+$/,
            ONLY_DIGITS: /^[0-9]+$/
        },
        MESSAGES: {
            ONLY_LETTERS_N_WHITESPACE_MESSAGE: ' must be string (only letters and whitespace)',
            ONLY_DIGITS_MESSAGE: ' must be a number (only digits)',
            WRONG_TYPE_MESSAGE: 'The value is not of type '
        }
    };
});
