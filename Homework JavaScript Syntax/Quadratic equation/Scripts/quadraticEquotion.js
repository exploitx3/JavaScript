/**
 * Created by Leet on 1/9/2016.
 */
var a = prompt("Enter A:");
var b = prompt("Enter B:");
var c = prompt("Enter C:");

var desc =  Math.pow(b,2) - (4*a*c);
if(desc < 0){
    console.log("No real roots");
} else if (desc == 0) {
    console.log("X = 1");
} else {
        console.log("X1 = " + ((-1*b - Math.sqrt(desc))/(a*2)));
        console.log("X2 = " + ((-1*b + Math.sqrt(desc))/(a*2)));
}