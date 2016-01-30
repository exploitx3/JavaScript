//
//var duma = prompt("Vavedete string");
//if(duma.indexOf('a')!=-1){
//    document.write("vavedeniq string sadarja simvola 'a'!");
//}else {
//    document.write("vavedeniq string ne sadarja simvola 'a'!");
//}
//
//document.write("<table style='color:red;'>");
//document.write("<tr>");
//for (var i = 0; i < duma.length; i++) {
//    document.write("<td>" + duma[i] +"</td>");
//}
//document.write("</tr>");
//document.write("</table>");

document.write('<input type="password"><br>')
document.write('<input type="password"><br>')
document.write('<input type="submit" onclick="func()">');

function func() {
    var parvoPole = document.getElementsByTagName('input')[0].value;
    var vtoroPole = document.getElementsByTagName('input')[1].value;
    document.write(parvoPole == vtoroPole ? "savpadat<br>" : "ne savpadat<br>");
    document.write((parvoPole.length > 6 ?
        "Parvoto pole e s pove4e ot 6 simvola<br>" : "Parvoto pole ne e s pove4e ot 6 simvola<br>"));
    document.write((vtoroPole.length > 6 ?
        "Vtoroto pole e s pove4e ot 6 simvola<br>" : "Vtoroto pole ne e s pove4e ot 6 simvola<br>"));
}

