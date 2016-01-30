/**
 * Created by Leet on 1/9/2016.
 */


var rl =  require("readline");
var prompt = rl.createInterface(process.stdin, process.stdout);
prompt.question("Enter KMH\n", function(input){
    console.log((input*0.539956803455724).toFixed(2));
    return;
});
