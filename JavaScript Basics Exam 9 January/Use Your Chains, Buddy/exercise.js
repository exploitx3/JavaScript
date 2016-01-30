"use strict";

function solve(inputArray){
    var inputString = inputArray[0];

    var pattern = /(?:<p>)(.+?)(?=<\/p>)/g;
    var secondPattern = /[^0-9a-z]/g;

    var resultString = '';
    var matchString;
    while(matchString = pattern.exec(inputString)){
        var decryptedString = '';
        var encryptedString = matchString[1].toString();
        encryptedString = encryptedString.replace(secondPattern, ' ');
        encryptedString = encryptedString.replace(/\s+/g, ' ');

        for (var i = 0; i < encryptedString.length; i++) {
                if(encryptedString.charCodeAt(i) >= 'a'.charCodeAt(0) && encryptedString.charCodeAt(i) < 'n'.charCodeAt(0)){
                    decryptedString += String.fromCharCode(encryptedString.charCodeAt(i) + 13);
                }else if(encryptedString.charCodeAt(i) >= 'm'.charCodeAt(0) && encryptedString.charCodeAt(i) <= 'z'.charCodeAt(0)){
                    decryptedString += String.fromCharCode(encryptedString.charCodeAt(i) - 13);
                }else{
                    decryptedString += encryptedString.charAt(i);
                }
           }

        resultString+= decryptedString;
    }
    console.log(resultString);
}
//
//var input = ['<html><head><title></title></head><body><h1>hello</h1><p>znahny!@#%&&&&****</p><div><button>dsad</button></div><p>grkg^^^^%%%)))([]12</p></body></html>'];
//var input2 = ['<html><head><title></title></head><body><h1>Intro</h1><ul><li>Item01</li><li>Item02</li><li>Item03</li></ul><p>jura qevivat va jrg fyvccrel fabjl</p><div><button>Click me, baby!</button></div><p> pbaqvgvbaf fabj  qpunvaf ner nofbyhgryl rffragvny sbe fnsr unaqyvat nygubhtu fabj punvaf znl ybbx </p><span>This manual is false, do not trust it! The illuminati wrote it down to trick you!</span><p>vagvzvqngvat gur onfvp vqrn vf ernyyl fvzcyr svg gurz bire lbhe gverf qevir sbejneq fybjyl naq gvtugra gurz hc va pbyq jrg</p><p> pbaqvgvbaf guvf vf rnfvre fnvq guna qbar ohg vs lbh chg ba lbhe gverf</p></body>'];
//solve(input2);
//
//console.log(String.fromCharCode('a'.charCodeAt(0) + 1));