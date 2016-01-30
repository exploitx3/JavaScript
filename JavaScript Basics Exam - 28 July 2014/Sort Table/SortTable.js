function solve(inputArray){
    var orderedArray = inputArray.slice(2, inputArray.length-1);
    var pattern = /(?:<\/td><td>)([0-9.-]+)(?=<\/td><td>)/;
    var match;
    var matchSecond;
    orderedArray.sort(function (a, b){
        match = Number(pattern.exec(a)[1]);
        matchSecond = Number(pattern.exec(b)[1]);
        return match - matchSecond;
    });



    console.log(inputArray[0]);
    console.log(inputArray[1]);
    console.log(orderedArray.join('\n'));
    console.log(inputArray[inputArray.length-1]);
}

var inputArray = [
    '<table>',
    '<tr><th>Product</th><th>Price</th><th>Votes</th></tr>',
    '<tr><td>Vodka Finlandia 1 l</td><td>19.35</td><td>+12</td></tr>',
    '<tr><td>Ariana Radler 0.5 l</td><td>1.19</td><td>+33</td></tr>',
    '<tr><td>Laptop HP 250 G2</td><td>629</td><td>+1</td></tr>',
    '<tr><td>Kamenitza Grapefruit 1 l</td><td>1.85</td><td>+7</td></tr>',
    '<tr><td>Ariana Grapefruit 1.5 l</td><td>1.85</td><td>+7</td></tr>',
    '<tr><td>Coffee Davidoff 250 gr.</td><td>11.99</td><td>+11</td></tr>',
    '</table>'
];

solve(inputArray);