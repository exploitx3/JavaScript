
function solve(inputArray) {

    var resultDictionary = {};

    var matchPattern = /([A-Za-z ]+?)(?:[.]*[*]{1}[.]*)([A-Za-z ]+?)(?:[.]*[*]{1}[.]*)(true|false)(?:[.]*[*]{1}[.]*)(true|false)(?:[.]*[*]{1}[.]*)(true|false)(?:[.]*[*]{1}[.]*)([0-9.]+?)(?:[.]*[*]{1}[.]*)(backpack|ATV)/g;
    var currentMatches;
    for (var i = 0; i < inputArray.length; i++) {
        currentMatches = matchPattern.exec(inputArray);
        if (currentMatches === null) {
            break;
        }
        var personName = currentMatches[1];
        var itemName = currentMatches[2];
        var isFood = currentMatches[3];
        var isDrink = currentMatches[4];
        var isFragile = currentMatches[5];
        var weight = Number(currentMatches[6]);
        var transferWay = currentMatches[7];

        var itemType = '';
        if (isFood === true) {
            itemType = 'Food';
        } else if (isDrink === true) {
            itemType = 'Drink';
        } else {
            itemType = 'other';
        }

        if (resultDictionary[personName] !== undefined) {
            resultDictionary[personName][itemName] = {
                kg: weight,
                fragile: isFragile,
                type: itemType,
                transferredWith: transferWay
            };
        } else {
            var newObj = {};
            var obj = {
                kg: weight,
                fragile: isFragile,
                type: itemType,
                transferredWith: transferWay
            };
            Object.defineProperty(newObj, itemName, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: 'static'
            });
            newObj[itemName] = obj;
            Object.defineProperty(resultDictionary, personName, {
                enumerable: true,
                configurable: true,
                writable: true,
                value: 'static'
            });
            resultDictionary[personName] = newObj;
        }
    }
    var sortType = inputArray[inputArray.length - 1];
    switch (sortType) {
        case 'luggage name':
            var resultString = '{';
            var personKeys = Object.keys(resultDictionary);

            for (var personKeyIndex = 0; personKeyIndex < personKeys.length; personKeyIndex++) {
                var itemsKeys = Object.keys(resultDictionary[personKeys[personKeyIndex]]);
                itemsKeys.sort();
                var itemsString = '{';
                for (var i = 0; i < itemsKeys.length; i++) {
                    itemsString += JSON.stringify(itemsKeys[i]) + ":{";
                    var itemPropsKeys = Object.keys(resultDictionary[personKeys[personKeyIndex]][itemsKeys[i]]);
                    for (var j = 0; j < itemPropsKeys.length; j++) {
                        itemsString += JSON.stringify(itemPropsKeys[j]) + ":" + JSON.stringify(resultDictionary[personKeys[personKeyIndex]][itemsKeys[i]][itemPropsKeys[j]]) + (j == itemPropsKeys.length - 1 ? '' : ',');
                    }
                    itemsString += "}" + (i == itemsKeys.length - 1 ? '' : ',');
                }
                resultString += '"' + personKeys[personKeyIndex] + '":' + itemsString + '}' + (personKeyIndex == personKeys.length - 1 ? '' : ',');
            }
            resultString += '}';

            console.log(resultString);
            break;
        case 'weight':
            var resultString = '{';
            var personKeys = Object.keys(resultDictionary);

            for (var personKeyIndex = 0; personKeyIndex < personKeys.length; personKeyIndex++) {
                var itemsKeys = Object.keys(resultDictionary[personKeys[personKeyIndex]]);
                itemsKeys.sort(function (a, b) {
                    return Number(resultDictionary[personKeys[personKeyIndex]][a]['kg']) - Number(resultDictionary[personKeys[personKeyIndex]][b]['kg']);
                });
                var itemsString = '{';
                for (var i = 0; i < itemsKeys.length; i++) {
                    itemsString += JSON.stringify(itemsKeys[i]) + ":{";
                    var itemPropsKeys = Object.keys(resultDictionary[personKeys[personKeyIndex]][itemsKeys[i]]);
                    for (var j = 0; j < itemPropsKeys.length; j++) {
                        itemsString += JSON.stringify(itemPropsKeys[j]) + ":" + JSON.stringify(resultDictionary[personKeys[personKeyIndex]][itemsKeys[i]][itemPropsKeys[j]]) + (j == itemPropsKeys.length - 1 ? '' : ',');
                    }
                    itemsString += "}" + (i == itemsKeys.length - 1 ? '' : ',');
                }
                resultString += '"' + personKeys[personKeyIndex] + '":' + itemsString + '}' + (personKeyIndex == personKeys.length - 1 ? '' : ',');
            }
            resultString += '}';

            console.log(resultString);
            break;
        case 'strict':
            console.log(JSON.stringify(resultDictionary));
        default:
            break;
    }
}
//
//var inputArray = [
//    'Yana Slavcheva.*.clothes.*.false.*.false.*.false.*.2.2.*.backpack',
//    'Kiko.*.socks.*.false.*.false.*.false.*.0.2.*.backpack',
//    'Kiko.*.banana.*.true.*.false.*.false.*.3.2.*.backpack',
//    'Kiko.*.sticks.*.false.*.false.*.false.*.1.6.*.ATV',
//    'Kiko.*.glasses.*.false.*.false.*.true.*.3.*.ATV',
//    'Manov.*.socks.*.false.*.false.*.false.*.0.3.*.ATV',
//    'luggage name'];
//solve(inputArray);

////var inputArray2 = [
////    'Yana Slavcheva.*.clothes.*.false.*.false.*.false.*.2.2.*.backpack',
////    'Kiko.*.socks.*.false.*.false.*.false.*.0.2.*.backpack',
////    'Kiko.*.banana.*.true.*.false.*.false.*.3.2.*.backpack',
////    'Kiko.*.sticks.*.false.*.false.*.false.*.1.6.*.ATV',
////    'Kiko.*.glasses.*.false.*.false.*.true.*.3.*.ATV',
////    'Manov.*.socks.*.false.*.false.*.false.*.0.3.*.ATV',
////    'weight']
////
////
//solve(inputArray);
//////{"Yana Slavcheva":{"clothes":{"kg":2.2,"fragile":false,"type":"other","transferredWith":"backpack"}},"Kiko":{"socks":{"kg":0.2,"fragile":false,"type":"other","transferredWith":"backpack"},"banana":{"kg":3.2,"fragile":false,"type":"food","transferredWith":"backpack"},"sticks":{"kg":1.6,"fragile":false,"type":"other","transferredWith":"ATV"},"glasses":{"kg":3,"fragile":true,"type":"other","transferredWith":"ATV"}},"Manov":{"socks":{"kg":0.3,"fragile":false,"type":"other","transferredWith":"ATV"}}}
////

//# sourceMappingURL=AllThatLuggage-compiled.js.map