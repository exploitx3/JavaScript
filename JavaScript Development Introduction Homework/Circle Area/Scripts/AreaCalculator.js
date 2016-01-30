/**
 * Created by Leet on 1/9/2016.
 */
var divArray = document.getElementsByTagName("div");
for(var i = 0; i<divArray.length; i++){
    var radius = parseFloat(divArray[i].children[0].innerHTML);
    console.log(divArray[i].getElementsByClassName("area").innerText = Math.PI * Math.pow(radius, 2));
    divArray[i].children[1].innerHTML = Math.PI * Math.pow(radius, 2);
}
