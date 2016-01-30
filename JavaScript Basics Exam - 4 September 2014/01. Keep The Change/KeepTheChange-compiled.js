function solve(inputArray) {
    var billToPay = Number(inputArray[0]);
    var mood = inputArray[1];
    var tip = 0;

    switch (mood) {
        case 'happy':
            tip = (billToPay * 0.10).toFixed(2);
            break;
        case 'married':
            tip = (billToPay * 0.0005).toFixed(2);
            break;
        case 'drunk':
            var percent = billToPay * 0.15;
            var char = Number(String(billToPay).charAt(0));
            tip = Math.pow(percent, Number(String(percent).charAt(0))).toFixed(2);
            break;
        default:
            tip = (billToPay * 0.05).toFixed(2);
            break;
    }

    console.log(tip);
}

var inputArray1 = ['9999.13', 'drunk'];

solve(inputArray1);

//# sourceMappingURL=KeepTheChange-compiled.js.map