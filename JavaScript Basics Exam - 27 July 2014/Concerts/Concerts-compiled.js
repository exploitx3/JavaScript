function solve(inputArray) {
    var pattern = / *\| */g;
    var results = {};
    var band, town, venue;

    for (var i = 0; i < inputArray.length; i++) {
        var infoParams = String(inputArray[i]).split(pattern);
        band = infoParams[0].trim();
        town = infoParams[1].trim();
        venue = infoParams[3].trim();

        if (!results[town]) {
            results[town] = {};
        }
        if (!results[town][venue]) {
            results[town][venue] = [];
        }
        if (results[town][venue].indexOf(band) === -1) {
            results[town][venue].push(band);
        }
    }

    var sortedResults = {};
    var sortedKeys = Object.keys(results).sort();
    var sortedVenueKeys;
    for (var i = 0; i < sortedKeys.length; i++) {
        sortedResults[sortedKeys[i]] = {};
        sortedVenueKeys = Object.keys(results[sortedKeys[i]]).sort();
        for (var j = 0; j < sortedVenueKeys.length; j++) {
            sortedResults[sortedKeys[i]][sortedVenueKeys[j]] = results[sortedKeys[i]][sortedVenueKeys[j]].sort();
        }
    }
    console.log(JSON.stringify(sortedResults));
}

//var inputArray = [
//    'ZZ Top | London | 2-Aug-2014 | Wembley Stadium',
//    'Iron Maiden | London | 28-Jul-2014 | Wembley Stadium',
//    'Metallica | Sofia | 11-Aug-2014 | Lokomotiv Stadium',
//    'Helloween | Sofia | 1-Nov-2014 | Vassil Levski Stadium',
//    'Iron Maiden | Sofia | 20-June-2015 | Vassil Levski Stadium',
//    'Helloween | Sofia | 30-July-2015 | Vassil Levski Stadium',
//    'Iron Maiden | Sofia | 26-Sep-2014 | Lokomotiv Stadium',
//    'Helloween | London | 28-Jul-2014 | Wembley Stadium',
//    'Twisted Sister | London | 30-Sep-2014 | Wembley Stadium',
//    'Metallica | London | 03-Oct-2014 | Olympic Stadium',
//    'Iron Maiden | Sofia | 11-Apr-2016 | Lokomotiv Stadium',
//    'Iron Maiden | Buenos Aires | 03-Mar-2014 | River Plate Stadium'
//];
//
//solve(inputArray);

//# sourceMappingURL=Concerts-compiled.js.map