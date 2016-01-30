function solve(inputArray) {
    var encryptedMessage = inputArray[0];
    var decryptedArray = [];

    var pattern = /[0-9]+/g;
    var match;
    while (match = pattern.exec(encryptedMessage)) {
        var hexNumber = Number(match).toString(16).toUpperCase();
        while (hexNumber.length < 4) {
            hexNumber = '0' + hexNumber;
        }
        hexNumber = '0x' + hexNumber;

        decryptedArray.push(hexNumber);
    }

    console.log(decryptedArray.join('-'));
}

var inputArray = ['5tffwj(//*7837xzc2---34rlxXP%$”.'];

solve(inputArray);

//# sourceMappingURL=TheNumbers-compiled.js.map