/**
 * Created by Leet on 1/10/2016.
 */
function solve(input) {
    var inputString = input.join(',');
    var pattern = /([cCoOiInN]{4}) ([0-9\.]+)/g;
    var sum = 0;
    var match;
    while (match = pattern.exec(inputString)) {

        var wrongCoinPattern = /\.([0]*[1-9])+/g;
        if (wrongCoinPattern.test(match[2])) {
            continue;
        } else {
            sum += parseInt(match[2]);
        }
    }
    var gold = Math.floor((sum / 100));
    var silver = Math.floor((sum / 10)%10);
    var bronze = Math.floor((sum%100)%10);
    console.log('gold : '+gold+"\nsilver : " + silver + "\nbronze : " +bronze);
}
//var input = ['coin 10041',
//'coin 0.99',
//'coin -5',
//'coin 105.0coin 2002.01',
//'coin fifty',
//'coin -100',
//'cigars 1'];
//solve(input);