/**
 * Created by Leet on 1/10/2016.
 */
function rollandGarrosStatCalculator(inputArray) {
    var playersDatabase = new Array();

    for (var i = 0; i < inputArray.length; i++) {
        var spaceReplacePattern = /\s+/g;
        inputArray[i] = inputArray[i].replace(spaceReplacePattern, ' ');
        var playerSplitPattern = /([A-Za-z][A-Za-z]{2,50}\s[A-Za-z][A-Za-z]+)(?:\s*vs.\s*)([A-Za-z][A-Za-z]+\s[A-Za-z][A-Za-z]+)(?:\s*:\s*)(.+)/g;
        var matches;
        while (matches = playerSplitPattern.exec(inputArray[i])) {

            var firstPlayerName = matches[1];
            var secondPlayerName = matches[2];
            var firstPlayerGamesWon = 0;
            var firstPlayerGamesLost = 0;
            var firstPlayerSetsWon = 0;
            var firstPlayerSetsLost = 0;
            var secondPlayerGamesWon = 0;
            var secondPlayerGamesLost = 0;
            var secondPlayerSetsWon = 0;
            var secondPlayerSetsLost = 0;

            var scoreArray = matches[3].split(' ');
            for (var j = 0; j < scoreArray.length; j++) {
                var currentMatch = scoreArray[j].split('-');
                var currentFirstPlayerGames = Number(currentMatch[0]);
                var currentSecondPlayerGames = Number(currentMatch[1]);
                if (currentFirstPlayerGames > currentSecondPlayerGames) {
                    firstPlayerSetsWon++;
                    secondPlayerSetsLost++;
                } else {
                    secondPlayerSetsWon++;
                    firstPlayerSetsLost++;
                }
                firstPlayerGamesWon += currentFirstPlayerGames;
                firstPlayerGamesLost += currentSecondPlayerGames;
                secondPlayerGamesWon += currentSecondPlayerGames;
                secondPlayerGamesLost += currentFirstPlayerGames;
            }
            var firstPlayerExists = false;
            var firstPlayerIndex = 0;
            for (var j = 0; j < playersDatabase.length; j++) {
                if (playersDatabase[j]["name"] == firstPlayerName) {
                    firstPlayerExists = true;
                    firstPlayerIndex = j;
                    break;
                }
            }
            if (firstPlayerExists) {
                playersDatabase[firstPlayerIndex]["matchesWon"] += (firstPlayerSetsWon > secondPlayerSetsWon ? 1 : 0);
                playersDatabase[firstPlayerIndex]["matchesLost"] += (firstPlayerSetsWon > secondPlayerSetsWon ? 0 : 1);
                playersDatabase[firstPlayerIndex]["setsWon"] += (firstPlayerSetsWon);
                playersDatabase[firstPlayerIndex]["setsLost"] += (firstPlayerSetsLost);
                playersDatabase[firstPlayerIndex]["gamesWon"] += (firstPlayerGamesWon);
                playersDatabase[firstPlayerIndex]["gamesLost"] += (firstPlayerGamesLost);
            } else {
                var newArray = {};
                newArray["name"] = firstPlayerName;
                newArray["matchesWon"] = (firstPlayerSetsWon > secondPlayerSetsWon ? 1 : 0);
                newArray["matchesLost"] = (firstPlayerSetsWon > secondPlayerSetsWon ? 0 : 1);
                newArray["setsWon"] = (firstPlayerSetsWon);
                newArray["setsLost"] = (firstPlayerSetsLost);
                newArray["gamesWon"] = (firstPlayerGamesWon);
                newArray["gamesLost"] = (firstPlayerGamesLost);
                playersDatabase.push(newArray);
            }
            var secondPlayerExists = false;
            var secondPlayerIndex = 0;
            for (var j = 0; j < playersDatabase.length; j++) {
                if (playersDatabase[j]["name"] == secondPlayerName) {
                    secondPlayerExists = true;
                    secondPlayerIndex = j;
                    break;
                }
            }
            if (secondPlayerExists) {
                playersDatabase[secondPlayerIndex]["matchesWon"] += (secondPlayerSetsWon > firstPlayerSetsWon ? 1 : 0);
                playersDatabase[secondPlayerIndex]["matchesLost"] += (secondPlayerSetsWon > firstPlayerSetsWon ? 0 : 1);
                playersDatabase[secondPlayerIndex]["setsWon"] += (secondPlayerSetsWon);
                playersDatabase[secondPlayerIndex]["setsLost"] += (secondPlayerSetsLost);
                playersDatabase[secondPlayerIndex]["gamesWon"] += (secondPlayerGamesWon);
                playersDatabase[secondPlayerIndex]["gamesLost"] += (secondPlayerGamesLost);
            } else {
                var newArray = {};
                newArray["name"] = secondPlayerName;
                newArray["matchesWon"] = (secondPlayerSetsWon > firstPlayerSetsWon ? 1 : 0);
                newArray["matchesLost"] = (secondPlayerSetsWon > firstPlayerSetsWon ? 0 : 1);
                newArray["setsWon"] = (secondPlayerSetsWon);
                newArray["setsLost"] = (secondPlayerSetsLost);
                newArray["gamesWon"] = (secondPlayerGamesWon);
                newArray["gamesLost"] = (secondPlayerGamesLost);
                playersDatabase.push(newArray);
            }
        }
    }
    //for (var i = 0; i < playersDatabase.length; i++) {
    console.log(JSON.stringify(rollandGarrosArraySorter(playersDatabase)));
    //}

    function rollandGarrosArraySorter(playersArray) {
        var sortedArray = playersArray.sort((a, b) => {
            if ((parseInt(a['matchesWon']) !== parseInt(b['matchesWon']))) {
                return b.matchesWon - a.matchesWon;
            }

            if ((parseInt(a['matchesWon']) === parseInt(b['matchesWon'])) &&
                (parseInt(a['setsWon']) !== parseInt(b['setsWon']))) {
                return b.setsWon - a.setsWon;
            }

            if ((parseInt(a['matchesWon']) === parseInt(b['matchesWon'])) &&
                (parseInt(a['setsWon']) === parseInt(b['setsWon'])) &&
                (parseInt(a['gamesWon']) !== parseInt(b['gamesWon']))) {
                return b.gamesWon - a.gamesWon;
            }


            if ((parseInt(a.matchesWon) === parseInt(b.matchesWon)) &&
                (parseInt(a.setsWon) === parseInt(b.setsWon)) &&
                (parseInt(a.gamesWon) === parseInt(b.gamesWon))) {
                return (a['name'].localeCompare(b['name']));
            }

            return -1;

            //
            //if (parseInt(a["matchesWon"]) < parseInt(b["matchesWon"])) {
            //    return true;
            //} else if (parseInt(a['matchesWon']) == parseInt(b['matchesWon'])) {
            //    if (parseInt(a['setsWon']) < parseInt(b['setsWon'])) {
            //        return true;
            //    } else if (parseInt(a['setsWon']) == parseInt(b['setsWon'])) {
            //        if (parseInt(a['gamesWon']) < parseInt(b['gamesWon'])) {
            //            return true;
            //        } else if (parseInt(a['gamesWon']) == parseInt(b['gamesWon'])) {
            //
            //        }else {
            //            return false;
            //        }
            //    }
            //}
        });
        return sortedArray;
    }
}


var inputArray = [
    'Novak Djokovic vs. Roger Federer : 6-3 6-3',
    'Roger    Federer    vs.        Novak Djokovic    :         6-2 6-3',
    'Rafael Nadal vs. Andy Murray : 4-6 6-2 5-7',
    'Andy Murray vs. David     Ferrer : 6-4 7-6',
    'Tomas   Bedrych vs. Kei Nishikori : 4-6 6-4 6-3 4-6 5-7',
    'Grigor Dimitrov vs. Milos Raonic : 6-3 4-6 7-6 6-2',
    'Pete Sampras vs. Andre Agassi : 2-1',
    'Boris Beckervs.Andre        Agassi:2-1'];
rollandGarrosStatCalculator(inputArray);

//name
//matchesWon
//matchesLost
//setsWon
//setsLost
//gamesWon
//gamesLost


//[{"name":"Andy Murray","matchesWon":2,"matchesLost":0,"setsWon":4,"setsLost":1,"gamesWon":28,"gamesLost":25},
// {"name":"Kei Nishikori","matchesWon":1,"matchesLost":0,"setsWon":3,"setsLost":2,"gamesWon":26,"gamesLost":25},
// {"name":"Grigor Dimitrov","matchesWon":1,"matchesLost":0,"setsWon":3,"setsLost":1,"gamesWon":23,"gamesLost":17},
// {"name":"Roger Federer","matchesWon":1,"matchesLost":1,"setsWon":2,"setsLost":2,"gamesWon":18,"gamesLost":17},
// {"name":"Novak Djokovic","matchesWon":1,"matchesLost":1,"setsWon":2,"setsLost":2,"gamesWon":17,"gamesLost":18},
// {"name":"Boris Becker","matchesWon":1,"matchesLost":0,"setsWon":1,"setsLost":0,"gamesWon":2,"gamesLost":1},
// {"name":"Pete Sampras","matchesWon":1,"matchesLost":0,"setsWon":1,"setsLost":0,"gamesWon":2,"gamesLost":1},
// {"name":"Tomas Bedrych","matchesWon":0,"matchesLost":1,"setsWon":2,"setsLost":3,"gamesWon":25,"gamesLost":26},
// {"name":"Milos Raonic","matchesWon":0,"matchesLost":1,"setsWon":1,"setsLost":3,"gamesWon":17,"gamesLost":23},
// {"name":"Rafael Nadal","matchesWon":0,"matchesLost":1,"setsWon":1,"setsLost":2,"gamesWon":15,"gamesLost":15},
// {"name":"David Ferrer","matchesWon":0,"matchesLost":1,"setsWon":0,"setsLost":2,"gamesWon":10,"gamesLost":13},
// {"name":"Andre Agassi","matchesWon":0,"matchesLost":2,"setsWon":0,"setsLost":2,"gamesWon":2,"gamesLost":4}]