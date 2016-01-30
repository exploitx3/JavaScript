function solve(inputArray) {
    function fibonaciiNumberChecker(number) {
        var fibonaciiArray = [];
        var firstNum = 1;
        var secondNum = 0;
        var thirdNum = 0;

        var counter = 0;
        while (thirdNum < number + 1) {
            thirdNum = firstNum + secondNum;
            if (thirdNum === number) {
                return true;
            }
            firstNum = secondNum;
            secondNum = thirdNum;

        }
        return false;
    }

    var startNumber = Number(inputArray[0]);
    var endNumber = Number(inputArray[1]);
    console.log('<table>\n<tr><th>Num</th><th>Square</th><th>Fib</th></tr>');
    for (var i = startNumber; i <= endNumber; i++) {
        console.log('<tr><td>' + i + '</td><td>' + i*i + '</td><td>' + (fibonaciiNumberChecker(i)?'yes':'no') + '</td></tr>');
    }
    console.log('</table>');
}

var inputArray = [
    '2',
    '6'
];

solve(inputArray);