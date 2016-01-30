function solve(inputArray) {
    var copyArray = inputArray.slice(0, inputArray.length);
    var triangleChar, j;
    for (var i = 0; i < inputArray.length - 1; i++) {

        for (j = 1; j < inputArray[i].length; j++) {
            triangleChar = inputArray[i][j][0];

            if (inputArray[i][j] === triangleChar && inputArray[i + 1][j - 1] === triangleChar && inputArray[i + 1][j] === triangleChar && inputArray[i + 1][j + 1] === triangleChar) {
                copyArray[i] = replaceCharInString(copyArray[i], j, '*');
                copyArray[i + 1] = replaceCharInString(copyArray[i + 1], j - 1, '*');
                copyArray[i + 1] = replaceCharInString(copyArray[i + 1], j, '*');
                copyArray[i + 1] = replaceCharInString(copyArray[i + 1], j + 1, '*');
            }
        }
    }

    console.log(copyArray.join('\n'));

    function replaceCharInString(string, index, char) {
        var newString = '';
        var i;
        for (i = 0; i < string.length; i++) {
            if (i === index) {
                newString += char;
            } else {
                newString += string[i];
            }
        }
        return newString;
    }
}

var inputArray = ['abcdexgh', 'bbbdxxxh', 'abcxxxxx'];

solve(inputArray);

//# sourceMappingURL=RevealTrinagles-compiled.js.map