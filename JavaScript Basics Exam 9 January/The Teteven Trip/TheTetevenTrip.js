"use strict";

function solve(stringArray){
    for (var i = 0; i < stringArray.length; i++) {
        var currentString = stringArray[i].split(' ');
        var carName = currentString[0];
        var fuelType = currentString[1];
        var roadType = Number(currentString[2]);
        var luggageWeight = currentString[3];
        var fuelCoeficient = 1;

        switch(fuelType)
        {
            case 'gas':
                fuelCoeficient = 1.2;
                break;
            case 'diesel':
                fuelCoeficient = 0.8;
                break;
            default:
                break;
        }
        var consumption = (((10 * fuelCoeficient) + luggageWeight * 0.01) / 100);
        if(roadType === 1){
            consumption = consumption * 110;
            consumption += 10 * ((0.3 * consumption)/100);
            console.log(carName + ' ' + fuelType + ' ' + roadType + ' ' + Math.round(consumption));
            //console.log(`${carName} ${fuelType} ${roadType} ${Math.round(consumption)}`);
        }else{
            consumption = consumption * 95;
            consumption += 30 * ((0.3 * consumption)/100);
            console.log(carName + ' ' + fuelType + ' ' + roadType + ' ' + Math.round(consumption));
            //console.log(`${carName} ${fuelType} ${roadType} ${Math.round(consumption)}`);
        }


    }
}

var inputString1 = ['BMW petrol 1 320.5',
    'Golf petrol 2 150.75',
    'Lada gas 1 202',
    'Mercedes diesel 2 312.54'];

solve(inputString1);
