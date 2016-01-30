function solve(inputArray){
    var copyArray = JSON.parse(JSON.stringify(inputArray));
    var middleLine, upperLine, bottomLine, minLength;
    var currentChar, xCheck;
    for (var i = 1; i < inputArray.length-1; i++) {
        upperLine = inputArray[i-1];
        middleLine = inputArray[i];
        bottomLine = inputArray[i+1];
        minLength = Math.min(upperLine.length, middleLine.length, bottomLine.length);

        for (var j = 1; j < minLength && j < upperLine.length-1 && j < bottomLine.length-1; j++) {
            currentChar = middleLine[j].toLowerCase();
            xCheck =
                upperLine[j-1].toLowerCase() === currentChar &&
                upperLine[j+1].toLowerCase() === currentChar &&
                bottomLine[j-1].toLowerCase() === currentChar &&
                bottomLine[j+1].toLowerCase() === currentChar;

            if(xCheck){
                copyArray[i-1] = setCharInString(copyArray[i-1], j-1, 'G');
                copyArray[i-1] = setCharInString(copyArray[i-1], j+1, 'G');
                copyArray[i] = setCharInString(copyArray[i], j, 'G');
                copyArray[i+1] = setCharInString(copyArray[i+1], j-1, 'G');
                copyArray[i+1] = setCharInString(copyArray[i+1], j+1, 'G');
            }
        }
    }

    var currentLine;
    for (var i = 0; i < copyArray.length; i++) {
        currentLine = copyArray[i].replace(/G/g, '');
        console.log(currentLine);
    }

    function setCharInString(string, index, char){
        var newString = '';
        for (var i = 0; i < string.length; i++) {
            if(i === index){
                newString += char;
            }else{
                newString += string[i];
            }
        }

        return newString;
    }
}


var inputArray = [
    'abnbjs',
    'xoBab',
    'Abmbh',
    'aabab',
    'ababvvvv'
];

var inputArray2 = [
    'puoUdai',
    'miU',
    'ausupirina',
    '8n8i8',
    'm8o8a',
    '8l8o860',
    'M8i8',
    '8e8!8?!'
];

solve(inputArray2);