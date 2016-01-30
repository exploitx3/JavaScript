function solve(inputArray){
    var pattern = /[0-9-.]+/g;
    var columnSumContainer = [];

    var match;
    var currentCol = { sum: 0, index: 0};
    for (var i = 2; i < inputArray.length-1; i++) {
        while(match = pattern.exec(inputArray[i])){
            if(match[0] === '-'){
                continue;
            }
            currentCol.sum += Number(match[0]);
        }
        currentCol.index = i;

        columnSumContainer.push(currentCol);
        currentCol = { sum: 0, index: 0};
    }
    if(columnSumContainer.length === 0) {
        console.log('no data');
    }
    columnSumContainer = columnSumContainer.sort(function (a, b) {
        if(b.sum === a.sum){
            return a.index - b.index;
        }else {
            return b.sum - a.sum;
        }
    });

    var calculateNumbers = [];
    while(match = pattern.exec(inputArray[columnSumContainer[0].index])){
        if(match[0] === '-'){
            continue;
        }

        calculateNumbers.push(match[0]);
    }

    if(calculateNumbers.length === 0){
        console.log('no data');
    }else {
        console.log(columnSumContainer[0].sum + ' = ' + calculateNumbers.join(' + '));
    }

}

var inputArray1 = [
    '<table>',
    '<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
    '<tr><td>Sofia</td><td>0</td><td>-</td><td>0.0</td></tr>',
    '<tr><td>Yambol</td><td>-</td><td>0</td><td>-</td></tr>',
    '<tr><td>Sliven</td><td>-</td><td>0</td><td>-</td></tr>',
    '<tr><td>Kaspichan</td><td>0</td><td>-</td><td>-</td></tr>',
    '</table>'
];

solve(inputArray1);