function solve(inputArray) {
    var normandyParameters = inputArray[3].split(' ');
    var normandyX = Number(normandyParameters[0]);
    var normandyY = Number(normandyParameters[1]);
    var moves = Number(inputArray[4])+1;

    var firstStarParameters = inputArray[0].split(' ');
    var firstStarX = Number(firstStarParameters[1]);
    var firstStarY = Number(firstStarParameters[2]);

    var secondStarParameters = inputArray[1].split(' ');
    var secondStarX = Number(secondStarParameters[1]);
    var secondStarY = Number(secondStarParameters[2]);

    var thirdStarParameters = inputArray[2].split(' ');
    var thirdStarX = Number(thirdStarParameters[1]);
    var thirdStarY = Number(thirdStarParameters[2]);




    for (var i = 0; i < moves; i++) {
        var checkInRangeOfFirstStar =
            (normandyX >= firstStarX - 1) &&
            (normandyX <= firstStarX + 1) &&
            (normandyY >= firstStarY - 1) &&
            (normandyY <= firstStarY + 1);
        var checkInRangeOfSecondStar =
            (normandyX >= (secondStarX - 1)) &&
            (normandyX <= (secondStarX + 1)) &&
            (normandyY >= (secondStarY - 1)) &&
            (normandyY <= (secondStarY + 1));
        var checkInRangeOfThirdStar =
            (normandyX >= thirdStarX - 1) &&
            (normandyX <= thirdStarX + 1) &&
            (normandyY >= thirdStarY - 1) &&
            (normandyY <= thirdStarY + 1);

        if (checkInRangeOfFirstStar) {
            console.log(firstStarParameters[0].toLowerCase());
        } else if (checkInRangeOfSecondStar) {
            console.log(secondStarParameters[0].toLowerCase());
        } else if (checkInRangeOfThirdStar) {
            console.log(thirdStarParameters[0].toLowerCase());
        }else {
            console.log('space');
        }
        normandyY++;

    }


}

var inputArray = [
    'Sirius 3 7',
    'Alpha-Centauri 7 5',
    'Gamma-Cygni 10 10',
    '8 1',
    '6'
];

solve(inputArray);