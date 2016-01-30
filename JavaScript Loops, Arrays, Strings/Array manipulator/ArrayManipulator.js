/**
 * Created by Leet on 1/10/2016.
 */
"use strict";

function arrayManipulator(array){
    array = array.filter(function(a) {
        return isNaN(a) == false;
    });
    var arrayCounter = new Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var currentCount = 1;
        for (var j = i+1; j < array.length; j++) {
            if(array[j] == array[i]){
                currentCount++;
            }
        }
        arrayCounter[i] = currentCount;
    }
    var mostFrequentElement = array[arrayCounter.indexOf(Math.max.apply(Math, arrayCounter))];

    console.log("Min number: " + Math.min.apply(Math, array));
    console.log("Max number: " + Math.max.apply(Math, array));
    console.log("Most frequent number: " + mostFrequentElement);
    console.log(array);


}

var array = ["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined, 0, "Penka", { bunniesCount : 10}, [10, 20, 30, 40]];
arrayManipulator(array);

