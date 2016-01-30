function solve(inputArray){
    var currentNumber, lastNumber, movingType;
    var resultString = '';
    lastNumber = Number(inputArray[0]).toFixed(2);
    for (var i = 0; i < inputArray.length; i++) {
        currentNumber = Number(inputArray[i]).toFixed(2);
        if(currentNumber === lastNumber){
            movingType = 'fixed.png';
        }else if(Number(currentNumber) > Number(lastNumber)){
            movingType = 'up.png';
        }else if(Number(currentNumber) < Number(lastNumber)){
            movingType = 'down.png';
        }

        resultString += '\<tr\>\<td\>' + currentNumber + '\<\/td\>\<td\>\<img src=\"'+ movingType +'\"\/\>\<\/td\>\<\/td\>' + (i==inputArray.length-1?'':'\n');
        lastNumber = Number(currentNumber).toFixed(2);
    }
    console.log('\<table\>\n\<tr\>\<th\>Price\<\/th\>\<th\>Trend\<\/th\>\<\/tr\>');
    console.log(resultString);
    console.log('\<\/table\>');
}

//var inputArray1 = [
//    '1',
//    '1.0',
//    '1.00',
//    '1.001',
//    '1.000001',
//    '2',
//    '2.0',
//    '2.00',
//    '2.10',
//    '2.0',
//    '2.10',
//    '2.0',
//    '1.99',
//    '1.999',
//    '1.99001',
//    '1.99002',
//    '1.99003',
//    '4.00',
//    '5.00',
//    '342.33',
//    '23.44',
//    '5.22',
//    '3.44',
//    '7.22',
//    '2'
//];
//
//solve(inputArray1);