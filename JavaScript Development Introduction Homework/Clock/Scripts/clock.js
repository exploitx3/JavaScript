/**
 * Created by Leet on 1/9/2016.
 */
function getCurrentTime(){
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    document.getElementById("clock").innerHTML =  hours + ":" + minutes + ":" + seconds;
}
setInterval(getCurrentTime,1000);