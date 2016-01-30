function solve(inputArray) {
    var resultObject = JSON.parse('{"I":0,"L":0,"J":0,"O":0,"Z":0,"S":0,"T":0}');
    for (var i = 0; i < inputArray.length; i++) {
        for (var j = 0; j < inputArray[i].length; j++) {

            var checkForUndefinedI = inputArray[i] === undefined || inputArray[i + 1] === undefined || inputArray[i + 2] === undefined || inputArray[i + 3] === undefined;

            var checkForUndefinedL = inputArray[i] === undefined || inputArray[i + 1] === undefined || inputArray[i + 2] === undefined;

            var checkForUndefinedJ = inputArray[i] === undefined || inputArray[i + 1] === undefined || inputArray[i + 2] === undefined;

            var checkForUndefinedO = inputArray[i] === undefined || inputArray[i + 1] === undefined;

            var checkForUndefinedZ = inputArray[i] === undefined || inputArray[i + 1] === undefined;

            var checkForUndefinedS = inputArray[i] === undefined || inputArray[i + 1] === undefined;

            var checkForUndefinedT = inputArray[i] === undefined || inputArray[i + 1] === undefined;

            if (!checkForUndefinedI) {
                var checkForI = inputArray[i][j] === 'o' && inputArray[i + 1][j] === 'o' && inputArray[i + 2][j] === 'o' && inputArray[i + 3][j] === 'o';
                if (checkForI) {
                    resultObject['I']++;
                }
            }

            if (!checkForUndefinedL) {
                var checkForL = inputArray[i][j] === 'o' && inputArray[i + 1][j] === 'o' && inputArray[i + 2][j] === 'o' && inputArray[i + 2][j + 1] === 'o';
                if (checkForL) {
                    resultObject['L']++;
                }
            }

            if (!checkForUndefinedJ) {
                var checkForJ = inputArray[i][j + 1] === 'o' && inputArray[i + 1][j + 1] === 'o' && inputArray[i + 2][j + 1] === 'o' && inputArray[i + 2][j] === 'o';
                if (checkForJ) {
                    resultObject['J']++;
                }
            }

            if (!checkForUndefinedO) {
                var checkForO = inputArray[i][j] === 'o' && inputArray[i + 1][j + 1] === 'o' && inputArray[i + 1][j] === 'o' && inputArray[i][j + 1] === 'o';
                if (checkForO) {
                    resultObject['O']++;
                }
            }

            if (!checkForUndefinedZ) {
                var checkForZ = inputArray[i][j] === 'o' && inputArray[i][j + 1] === 'o' && inputArray[i + 1][j + 1] === 'o' && inputArray[i + 1][j + 2] === 'o';
                if (checkForZ) {
                    resultObject['Z']++;
                }
            }

            if (!checkForUndefinedS) {
                var checkForS = inputArray[i + 1][j] === 'o' && inputArray[i + 1][j + 1] === 'o' && inputArray[i][j + 1] === 'o' && inputArray[i][j + 2] === 'o';
                if (checkForS) {
                    resultObject['S']++;
                }
            }

            if (!checkForUndefinedT) {
                var checkForT = inputArray[i][j] === 'o' && inputArray[i][j + 1] === 'o' && inputArray[i][j + 2] === 'o' && inputArray[i + 1][j + 1] === 'o';
                if (checkForT) {
                    resultObject['T']++;
                }
            }
        }
    }
    console.log(JSON.stringify(resultObject));
}
//
//var inputArray1 = [
//    '--o--o-',
//    '--oo-oo',
//    'ooo-oo-',
//    '-ooooo-',
//    '---oo--'
//];
//
//solve(inputArray1);

//# sourceMappingURL=TetrisFigures-compiled.js.map