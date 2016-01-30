function solve(inputArray) {
    var wordContainer = [];
    var pattern = /[a-zA-Z]+/g;
    var match;
    while ((match = pattern.exec(inputArray[0])) != null) {
            wordContainer.push(match[0]);
    }
    if (wordContainer.length < 3) {
        console.log("No");
        return;
    }


    var uniqueResults = [];
    var concatanatedString;
    var hasNotFound = true;
    var tempArray = [];
    var j;
    for (var i = 0; i < wordContainer.length; i++) {
        for ( j = 0; j < wordContainer.length; j++) {
            if(j!==i){
                tempArray.push(wordContainer[j]);
            }
        }
        for (j = 0; j < tempArray.length-1; j++) {
            for (var k = j+1; k < tempArray.length; k++) {
                if (tempArray[j] + tempArray[k] === wordContainer[i]) {
                    concatanatedString = tempArray[j] + '|' + tempArray[k] + '=' + wordContainer[i];
                    if(uniqueResults.indexOf(concatanatedString) == -1){
                        uniqueResults.push(concatanatedString);
                    }
                    hasNotFound = false;
                }
            }
        }
        for (j = tempArray.length-1; j > 0; j--) {
            for (var k = j-1; k >= 0; k--) {
                if (tempArray[j] + tempArray[k] === wordContainer[i]) {
                    concatanatedString = tempArray[j] + '|' + tempArray[k] + '=' + wordContainer[i];
                    if(uniqueResults.indexOf(concatanatedString) == -1){
                        uniqueResults.push(concatanatedString);
                    }
                    hasNotFound = false;
                }
            }
        }
        tempArray = [];
    }

    if (hasNotFound) {
        console.log("No");
    }else{
        for (var i = 0; i < uniqueResults.length; i++) {
            console.log(uniqueResults[i]);
        }
    }
}

var inputArray = [
    'a a aa a'
];

solve(inputArray);