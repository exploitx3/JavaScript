/**
 * Created by Leet on 1/10/2016.
 */
function start(array) {


    var directions = array[0].split(', ');
    var board = new Array(array.length - 1);
    for (var i = 1; i < array.length; i++) {
        board[i - 1] = array[i].split(', ');
    }
    var carrotsCount = 0;
    var cabbageCount = 0;
    var lettuceCount = 0;
    var turnipCount = 0;
    var wallsHitCount = 0;

    var rabbitRow = 0;
    var rabbitCol = 0;
    var rabbitTrack = [];
    for (var i = 0; i < directions.length; i++) {
        var lastRow = rabbitRow;
        var lastCol = rabbitCol;
        switch (directions[i]) {
            case 'right':
                rabbitCol++;
                break;
            case 'left':
                rabbitCol--;
                break;
            case 'up':
                rabbitRow--;
                break;
            case 'down':
                rabbitRow++;
                break;
        }
        if (rabbitCol < 0 || rabbitCol >= board[0].length ||
            rabbitRow < 0 || rabbitRow >= board.length) {
            rabbitCol = lastCol;
            rabbitRow = lastRow;
            wallsHitCount++;
        } else {
            var pattern = /({!}|{&}|{#}|{\*})/g;
            var matches;
            while (matches = pattern.exec(board[rabbitRow][rabbitCol])) {
                switch (matches[0]) {
                    case '{!}':
                        carrotsCount++;
                        break;
                    case '{*}':
                        cabbageCount++;
                        break;
                    case '{&}':
                        lettuceCount++;
                        break;
                    case '{#}':
                        turnipCount++;
                        break;
                }
            }
                board[rabbitRow][rabbitCol] = board[rabbitRow][rabbitCol].replace(pattern, '@');
                rabbitTrack.push(board[rabbitRow][rabbitCol]);
                //rabbitTrack.replace(pattern,'@');
            }
        }

    console.log('{"&":' + lettuceCount + ',"*":' + cabbageCount + ',"#":' + turnipCount + ',"!":' + carrotsCount + ',"wall hits":' + wallsHitCount + '}');
    console.log(rabbitTrack.length == 0 ? 'no' : rabbitTrack.join('|'));
}
//var inputArray = ['right, up, up, down',
//    'asdf, as{#}aj{g}dasd, kjldk{}fdffd, jdflk{#}jdfj',
//    'tr{X}yrty, zxx{*}zxc, mncvnvcn, popipoip',
//    'poiopipo, nmf{X}d{X}ei, mzoijwq, omcxzne'
//];
//var inputArray2 = ['up, right, left, down',
//'as{!}xnk'];
//var inputArray4 = ['right, right, down, left, left, down, right, right, down, left',
//    'qwekjs, asd{#}a, mxz{#}{*}',
//    'qwekjs, asd{#}a, xnc{&}a',
//    'qwekjs, asd{#}a, xnc{&}a',
//    'qwekjs, asd{#}a, xnc{&}a]'];
//start(inputArray4);