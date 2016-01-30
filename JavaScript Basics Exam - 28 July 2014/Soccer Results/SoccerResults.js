function solve(inputArray){
var resultsContainer = {};
var match, matchParameters, homeTeamName, awayTeamName, score, homeTeamGoals, awayTeamGoals;
var splitPattern = / *\/ *|: */g;
for (var i = 0; i < inputArray.length; i++) {
    matchParameters = inputArray[i].split(splitPattern);
    homeTeamName = matchParameters[0];
    awayTeamName = matchParameters[1];
    score = matchParameters[2].split(RegExp(' *- *'));
    homeTeamGoals = Number(score[0]);
    awayTeamGoals = Number(score[1]);


    if(!resultsContainer[homeTeamName]){
        resultsContainer[homeTeamName] = {
            goalsScored: 0,
            goalsConceded: 0,
            matchesPlayedWith: []
        };
    }
    resultsContainer[homeTeamName]['goalsScored'] += homeTeamGoals;
    resultsContainer[homeTeamName]['goalsConceded'] += awayTeamGoals;
    if(resultsContainer[homeTeamName]['matchesPlayedWith'].indexOf(awayTeamName) === -1){
        resultsContainer[homeTeamName]['matchesPlayedWith'].push(awayTeamName);
    }

    if(!resultsContainer[awayTeamName]){
        resultsContainer[awayTeamName] = {
            goalsScored: 0,
            goalsConceded: 0,
            matchesPlayedWith: []
        };
    }
    resultsContainer[awayTeamName]['goalsScored'] += awayTeamGoals;
    resultsContainer[awayTeamName]['goalsConceded'] += homeTeamGoals;
    if(resultsContainer[awayTeamName]['matchesPlayedWith'].indexOf(homeTeamName) === -1){
        resultsContainer[awayTeamName]['matchesPlayedWith'].push(homeTeamName);
    }
}

var sortedResults = {};
var orderedKeys = Object.keys(resultsContainer).sort();
for (var i = 0; i < orderedKeys.length; i++) {
    sortedResults[orderedKeys[i]] =  {
        goalsScored: resultsContainer[orderedKeys[i]]['goalsScored'],
        goalsConceded: resultsContainer[orderedKeys[i]]['goalsConceded'],
        matchesPlayedWith: resultsContainer[orderedKeys[i]]['matchesPlayedWith'].sort()
    };
}
console.log(JSON.stringify(sortedResults));

}

var inputArray = [
    'Germany / Argentina: 1-0',
    'Brazil / Netherlands: 0-3',
    'Netherlands / Argentina: 0-0',
    'Brazil / Germany: 1-7',
    'Argentina / Belgium: 1-0',
    'Netherlands / Costa Rica: 0-0',
    'France / Germany: 0-1',
    'Brazil / Colombia: 2-1'
];

solve(inputArray);