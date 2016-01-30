function solve(inputArray) {
    var encryptedString = inputArray[0];
    var magicNumber = Number(inputArray[1]);
    var numberArrayString = '';

    for (var i = 2; i < inputArray.length; i++) {
        numberArrayString += (i === 2 ? '' : ' ') + inputArray[i];
    }

    var numbersArray = numberArrayString.split(' ').map(function (a) {
        return Number(a);
    });

    var firstNumY, secondNumY, firstNumX, secondNumX;
    for (var i = 0; i < numbersArray.length - 1; i++) {
        for (var j = i + 1; j < numbersArray.length; j++) {
            if (numbersArray[i] + numbersArray[j] === magicNumber) {
                firstNumX = i % (inputArray.length - 2);
                secondNumX = j % (inputArray.length - 2);
                firstNumY = ~ ~(i / (inputArray.length - 2));
                secondNumY = ~ ~(j / (inputArray.length - 2));
                //console.log(firstNumX + ' ' + firstNumY + ' ' + secondNumX + ' ' + secondNumY);
                i = numbersArray.length;
                j = numbersArray.length;
                break;
            }
        }
    }

    var sumOfRowsCols = firstNumX + secondNumX + firstNumY + secondNumY;
    var decryptedString = '';
    for (var i = 0; i < encryptedString.length; i++) {
        if (i % 2 === 0) {
            decryptedString += String.fromCharCode(encryptedString.charCodeAt(i) + sumOfRowsCols);
        } else {
            decryptedString += String.fromCharCode(encryptedString.charCodeAt(i) - sumOfRowsCols);
        }
    }
    console.log(decryptedString);
}

var inputArray = ['>scsimh$deo$]$^mnxdh]}', '400', '200 100 120', '120 102 300', '150 290 370'];

solve(inputArray);

//# sourceMappingURL=Magic Grid-compiled.js.map