function solve(inputArray){
    var pattern = /mine.*?-.*?(gold|silver|diamonds).*?:.*?([0-9-]+)/g;
    var goldCount = 0;
    var silverCount = 0;
    var diamondsCount = 0;
    var oreType, oreQuantity;

    var match;
    for (var i = 0; i < inputArray.length; i++) {
        while(match = pattern.exec(inputArray[i])){
            oreType = match[1];
            oreQuantity = Number(match[2]);
            switch(oreType){
                case 'gold':
                    goldCount+=oreQuantity;
                    break;
                case 'silver':
                    silverCount+=oreQuantity;
                    break;
                case 'diamonds':
                    diamondsCount+=oreQuantity;
                    break;
            }
        }
    }

    console.log('*Silver: ' + silverCount);
    console.log('*Gold: ' + goldCount);
    console.log('*Diamonds: ' + diamondsCount);
}
//
//var inputArray = [
//    'mine bobovdol - gold: 10',
//    'mine - diamonds: 5',
//    'mine colas - wood: 10',
//    'mine myMine - silver:  14',
//    'mine silver:14 - silver: 14'
//];
//
//solve(inputArray);