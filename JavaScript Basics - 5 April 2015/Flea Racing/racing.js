/**
 * Created by Leet on 1/10/2016.
 */
function racing(inputArr){
    var jumpCount = parseInt(inputArr[0]);
    var trackLength = parseInt(inputArr[1]);
    var fleaArray = new Array(inputArr.length-2);
    var resultArray = new Array(inputArr.length-2);
    for (var i = 0; i < fleaArray.length; i++) {
        fleaArray[i] = new Array(2);
        resultArray[i] = new Array(2);
    }

    for (var i = 2; i < inputArr.length; i++) {
        var fleaParams = inputArr[i].split(', ');
        fleaArray[i-2][0] = fleaParams[0];
        fleaArray[i-2][1] = fleaParams[1];

        resultArray[i-2][0] = fleaParams[0];
        resultArray[i-2][1] = 0;
    }
    var hasFoundAWinner = false;
    var winnerName = '';
    var winnerIndex = 0;
    for (var i = 0; i < jumpCount; i++) {
        for (var j = 0; j < fleaArray.length; j++) {
            resultArray[j][1] += parseInt(fleaArray[j][1]);
            if (parseInt(resultArray[j][1]) >= parseInt(trackLength)-1) {
                hasFoundAWinner=true;
                winnerName = resultArray[j][0];
                winnerIndex = j;
                break;
            }
        }
        if(hasFoundAWinner){
            resultArray[winnerIndex][1] = parseInt(resultArray[winnerIndex][1]) >= trackLength-1 ? trackLength-1 : resultArray[winnerIndex][1];
            break;
        }else if(i == jumpCount-1){
            var sortedArray = new Array(resultArray.length);
            for (var k = 0; k < resultArray.length; k++) {
                sortedArray[k] = new Array(2);
                sortedArray[k][0] = resultArray[k][0];
                sortedArray[k][1] = resultArray[k][1];
            }
             sortedArray.sort(function(a, b){
                     return (parseInt(a[1]) <= parseInt(b[1]));

            });
            winnerName = sortedArray[0][0];
            for (var l = 0; l < resultArray.length; l++) {
                if(resultArray[l][0] === winnerName){
                    winnerIndex = l;
                    break;
                }
            }
            resultArray[winnerIndex][1] = parseInt(resultArray[winnerIndex][1]) >= trackLength-1 ? trackLength-1 : resultArray[winnerIndex][1];

        }
    }
    var audiance = '';
    for (var i = 0; i < trackLength; i++) {
        audiance += '#';
    }
    audiance = audiance + '\n' + audiance;
    console.log(audiance);
    for (var i = 0; i < fleaArray.length; i++) {
        var output = '';
        for (var j = 0; j < trackLength; j++) {
            if(j==resultArray[i][1]){
                output += (resultArray[i][0].charAt(0).toUpperCase());
            }else {
                output += ('.');
            }
        }
        console.log(output);
    }
    console.log(audiance);
    console.log("Winner: " + winnerName);


}
//var input = ['10','19','angel, 9','Boris, 10','Georgi, 3', 'Dimitar, 7'];
//var input2 = ['3', '5', 'cura, 1', 'Pepi, 1', 'UlTraFlea, 1', 'BOIKO, 1'];
//var input3 = ['3', '10', 'Suzi, 5'];
//var input6 = ['10',
//    '100',
//    'pesho, 0',
//    'gosho, 0',
//    'ivan, 0',
//    'dragan, 0',
//    'Minka, 0',
//    'PENKA, 0',
//    'VILIO, 0',
//    'BulHar, 0',
//    'TranVGashTIte, 0',
//    'ulichnica, 0'];
//racing(input2);