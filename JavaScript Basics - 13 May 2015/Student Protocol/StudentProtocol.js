function solve(inputArray){
    var resultsContainer = {};
    var currentLine, name, courseName, points;
    for (var i = 0; i < inputArray.length; i++) {
        currentLine = inputArray[i].split(/-|:/);
        name = currentLine[0].trim();
        courseName = currentLine[1].trim();
        points = Number(currentLine[2].trim());
        if(points < 0 || points > 400){
            continue;
        }

        if(!resultsContainer[courseName]){
            resultsContainer[courseName] = [];
        }
        if(searchNameInObjectArray(resultsContainer[courseName], name) === -1){
            resultsContainer[courseName].push({
                name: name,
                result: points,
                makeUpExams: 0
            });
        }else{
            resultsContainer[courseName][searchNameInObjectArray(resultsContainer[courseName], name)].makeUpExams++;
            resultsContainer[courseName][searchNameInObjectArray(resultsContainer[courseName], name)].result =
                (resultsContainer[courseName][searchNameInObjectArray(resultsContainer[courseName], name)].result > points?
                    resultsContainer[courseName][searchNameInObjectArray(resultsContainer[courseName], name)].result : points);
        }
    }

    function searchNameInObjectArray(objectArray, personName){
        for (var i = 0; i < objectArray.length; i++) {
            if(objectArray[i].name === (personName)){
                return i;
            }
        }
        return -1;
    }

    var sortedResults = {};
    var keys = Object.keys(resultsContainer);
    for (var i = 0; i < keys.length; i++) {
        sortedResults[keys[i]] = resultsContainer[keys[i]].sort(function (a, b) {
            if(a.result !== b.result){
                return b.result - a.result;
            }else if(a.makeUpExams !== b.makeUpExams){
                return a.makeUpExams - b.makeUpExams;
            }else {
                return a.name.localeCompare(b.name);
            }
        });
    }

    console.log(JSON.stringify(sortedResults));
}

var inputArray = [
    'Silvester - Java : 100',
    'Johny - Java : 10',
    'Silvester - Java: 110',
    'Johny - Java : 20',
    'Johny - Java : 30',
    'Johny - Java : 40',
    'Johny - Java : 120',
    'Silvester - C#:200',
    'Johny-C# :                      200',
    'Johny - C# : 800',
    'Johny - C#:200'
];

solve(inputArray);
