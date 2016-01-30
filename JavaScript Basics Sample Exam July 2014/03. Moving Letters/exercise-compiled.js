function solve(inputArray) {
    var words = inputArray[0].match(/[^\s]+/g);
    var maxWordLength = Math.max.apply(this, words.map(function (a) {
        return a.length;
    }));

    var concatinatedString = '';
    for (var i = 0; i <= maxWordLength; i++) {
        for (var j = 0; j < words.length; j++) {
            if (words[j][words[j].length - i] !== undefined) {
                concatinatedString += words[j][words[j].length - i];
            }
        }
    }
    var encryptedString = new Array(concatinatedString.length);
    var length = concatinatedString.length;
    for (var i = 0; i < length; i++) {
        encryptedString = charMoveRight(concatinatedString, i);
        concatinatedString = encryptedString;
    }

    console.log(concatinatedString);
    console.log();
    function charMoveRight(string, indexOfChar) {
        var array = string.split('');
        var charCode = String(string)[indexOfChar].toLowerCase().charCodeAt(0);
        var newPos = charCode - 96;
        newPos += indexOfChar;
        newPos = newPos % string.length;
        if (newPos === string.length) {
            newPos = 0;
        }
        var charToAdd = string[indexOfChar];
        array.splice(indexOfChar, 1);
        array.splice(newPos, 0, charToAdd);
        return array.join('');
    }
}

var inputArray = ['Fun exam right'];

solve(inputArray);

//# sourceMappingURL=exercise-compiled.js.map