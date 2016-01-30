/**
 * Created by Leet on 1/9/2016.
 */
function calcCylinderVol(radius, height) {
    return Math.PI * Math.pow(parseInt(radius), 2) * parseInt(height);
}

function main() {
    var rl = require("readline");
    var prompt = rl.createInterface(process.stdin, process.stdout);
    var forCount = 0;
    //prompt.question("How many cylinder volumes do you want to calculate?", function (count) {
    //    forCount = parseInt(count);

            prompt.question("Enter radius:", function (radius) {
                var currentRadius = radius;
                prompt.question("Enter height:", function (height) {
                    var currentHeight = height;
                    console.log(calcCylinderVol(currentRadius, currentHeight).toFixed(3));
                    return;
                })
                ;
                return;
            })
            ;

    //    return;
    //});
}

main();