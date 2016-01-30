function solve(inputArray) {
    var pattern = /([\d]+)/g;
    var matches = inputArray[0].match(pattern).map(function (a) {
        return Number(a);
    });
    var currentMatch, nextMatch;
    for (var i = 0; i < matches.length - 2; i++) {
        currentMatch = matches[i];
        nextMatch = matches[i + 1];
        if (nextMatch === 0 && currentMatch !== 0) {
            nextMatch = currentMatch % 2 === 0 ? 1 : 2;
        } else if (currentMatch === 0 && nextMatch === 0) {
            currentMatch = 1;
            nextMatch = 2;
        }

        matches[i] = currentMatch;
        matches[i + 1] = nextMatch;
    }

    //console.log(matches);

    var biggestLength = 0;
    var currentCount = 0;
    for (var i = 0; i < matches.length - 1; i++) {
        currentMatch = matches[i];
        nextMatch = matches[i + 1];
        if (currentMatch % 2 !== nextMatch % 2) {
            currentCount++;
        } else {
            currentCount = 0;
        }
        if (currentCount > biggestLength) {
            biggestLength = currentCount;
        }
    }
    biggestLength++;
    console.log(biggestLength);
    //console.log(arrayContainer[0].join(', '));
}
var inputArray = ['(1) (0) (0) (0) (0) (0) (0) (1)'];

solve(inputArray);

//# sourceMappingURL=exercise-compiled.js.map