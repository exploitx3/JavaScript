function solve(inputArray){
    var startNumber = Number(inputArray[0]);
    var endNumber = Number(inputArray[1]);

    console.log('<ul>');
    for (var currentNumber = startNumber; currentNumber <= endNumber; currentNumber++) {
        var isRakiaNumber = false;
        var numberString = String(currentNumber);

        for (var j = 0; j < numberString.length-1; j++) {
            for (var i = j+2; i < numberString.length-1; i++) {
                if(numberString[j] === numberString[i] && numberString[j+1] === numberString[i+1]){
                    isRakiaNumber = true;
                    j = numberString.length;
                    break;
                }
            }
        }
        if(isRakiaNumber){
            console.log('<li><span class=\'rakiya\'>' + numberString + '</span><a href=\"view.php?id=' + numberString + '>View</a></li>');
        }else{
            console.log('<li><span class=\'num\'>' + numberString + '<\/span><\/li>');
        }
    }
    console.log('<\/ul>');
}

var inputArray1 = [
    '11210',
    '11215'
];

solve(inputArray1);