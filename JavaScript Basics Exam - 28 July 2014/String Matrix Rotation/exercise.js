function solve(inputArray) {
    var pattern = /[0-9]+/g;
    var match = Number(pattern.exec(inputArray[0]));
    var rotation = (match / 90) % 4;
    var realArray = inputArray.slice(1, inputArray.length);
    var minLength = Math.max.apply(Math.max, realArray.map(function (a) {
        return a.length;
    }));

    for (var i = 0; i < realArray.length; i++) {
        while (realArray[i].length < minLength) {
            realArray[i] += ' ';
        }
    }

    var string = '';
    switch (rotation) {
        case 1:

            for (var i = 0; i < minLength; i++) {
                string = '';
                for (var j = realArray.length - 1; j >= 0; j--) {
                    string += realArray[j][i];
                }
                console.log(string);
            }
            break;
        case 2:

            for (var i = realArray.length - 1; i >= 0; i--) {
                string = '';
                for (var j = minLength - 1; j >= 0; j--) {
                    string += realArray[i][j];
                }
                console.log(string);
            }
            break;
        case 3:
        for (var i = minLength-1; i >= 0; i--) {
            string = '';
            for (var j = 0; j < realArray.length; j++) {
                string += realArray[j][i];
            }
            console.log(string);
        }
        break;
        default:
            for (var i = 0; i < realArray.length; i++) {
                console.log(realArray[i]);
            }
            break;
    }
}

var inputArray = [
    'Rotate(270)',
    'hello',
    'softuni',
    'exam'
];

solve(inputArray);