"use strict";

function solve(arrayOfStrings) {
    var landSymbols = String('_~\/\|');
    var playerX = 0;
    var playerY = 0;
    for (var i = 0; i < arrayOfStrings.length; i++) {
        for (var j = 0; j < arrayOfStrings[i].length; j++) {
            if (arrayOfStrings[i][j] === 'o') {
                playerX = j;
                playerY = i;
                i = arrayOfStrings.length;
                break;
            }
        }
    }

    var hasNotLanded = true;
    while (hasNotLanded) {
        for (var nextPlayerY = playerY + 1; nextPlayerY < arrayOfStrings.length; nextPlayerY++) {
            var windOffset = 0;
            for (var i = 0; i < arrayOfStrings[nextPlayerY].length; i++) {
                if (arrayOfStrings[nextPlayerY][i] === '<') {
                    windOffset--;
                } else if (arrayOfStrings[nextPlayerY][i] === '>') {
                    windOffset++;
                }
            }
            windOffset %= arrayOfStrings[nextPlayerY].length;
            playerX += windOffset;
            playerY++;
            if (landSymbols.indexOf(arrayOfStrings[playerY][playerX]) != -1) {
                hasNotLanded = false;
                break;
            }
        }
    }

    switch (arrayOfStrings[playerY][playerX]) {
        case '_':
            console.log('Landed on the ground like a boss!');
            break;
        case '~':
            console.log('Drowned in the water like a cat!');
            break;
        case '\\':
        case '|':
        case '\/':
            console.log('Got smacked on the rock like a dog!');
            break;
    }
    console.log(playerY + ' ' + playerX);
}
//
//var inputArray = [
//"--o----------------------",
//">------------------------",
//">------------------------",
//">-----------------/\-----",
//"-----------------/--\----",
//">---------/\----/----\---",
//"---------/--\--/------\--",
//"<-------/----\/--------\-",
//"\------/----------------\\",
//"-\____/------------------"];
//
//var inputArray2 = [
//"-------------o-<<--------",
//"-------->>>>>------------",
//"---------------->-<---<--",
//"------<<<<<-------/\--<--",
//"--------------<--/-<\----",
//">>--------/\----/<-<-\---",
//"---------/<-\--/------\--",
//"<-------/----\/--------\-",
//"\\------/--------------<-\\",
//"-\___~/------<-----------"];
//
////solve(inputArray);
//solve(inputArray2);

//# sourceMappingURL=Parachute-compiled.js.map