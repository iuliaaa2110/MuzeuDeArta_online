
var str=document.getElementById("section").innerHTML;
var str2 = str.split(" ");

var id = setInterval(cuvant, 100);
var x = 0;
var k = 0;
 document.getElementById("section").innerHTML="";
//  console.log(document.getElementById("section").innerHTML="");

function cuvant() {
    if (x < str2.length) {
        document.getElementById("section").innerHTML += " " + str2[x];
        x++;
    } else {
        clearInterval(id);
        k = 1;
        cuvant2();
    }
}

var str3=document.getElementById("section2").innerHTML;
var str4 = str3.split(" ");
document.getElementById("section2").innerHTML="";
// console.log(document.getElementById("section2").innerHTML="");

function cuvant2() {
    if (k == 1) {
        x = 0;
        id = setInterval(cuvant3, 300);
    }
}

function cuvant3() {
    if (x < str4.length) {
        document.getElementById("section2").innerHTML += " " + str4[x];
        x++;
    } else {
        clearInterval(id);
    }

}
