/**
 * Created by Leet on 1/10/2016.
 */
function arrayModification(array){
    array = array.filter(function(a){
    return (a >= 0 && a <= 400);
        });
    array = array.map(function(a){
        return Math.floor(a*80)/100;
    });
    console.log(array.sort(function(a,b){
        "use strict";
        return a > b;
    }));
}
var array =  [200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1];
arrayModification(array);