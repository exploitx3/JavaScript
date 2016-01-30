/**
 * Created by Leet on 1/9/2016.
 */
function calculate(){
    var expression = document.getElementById("expression").value;
    //var regex = /[^0-9\-*%+]+/g;
    //expression.replace(regex, '');
    document.getElementById("result").value = eval(expression);
}
