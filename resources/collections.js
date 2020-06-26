
const slider=document.querySelector('.slide')
const images=document.querySelectorAll('.slide img')

//buttons:

const prev=document.getElementById('stanga');
var next=document.getElementById('dreapta');

//counter:

let counter = 0;
const size = images[0].clientWidth; //size=latimea unei poze
slider.style.transform='translateX('+ (-size *counter) +'px)';

//button listeners:

next.addEventListener('click',()=>{
    slider.style.transition = "transform 0.4s ease-in-out";
    counter++;
    if(counter==images.length)
        {
        counter=0;
        slider.style.transition="transform 0.8s ease-in-out";}
    console.log(counter);
    slider.style.transform='translateX('+ (-size *counter) +'px)';
});

prev.addEventListener('click',()=>{
    slider.style.transition = "transform 0.4s ease-in-out"
    counter--;
    if(counter==-1){
        counter=images.length-1;
        slider.style.transition="transform 0.8s ease-in-out";}
    console.log(counter);
    slider.style.transform='translateX('+ (-size *counter) +'px)';
});

var im=document.getElementById('unu');
im.addEventListener('click',()=>{
    m.height="300";
});



var buna=document.getElementById("Col1");

buna.addEventListener('click',()=>{

    var s = document.getElementById("N").innerHTML;
    var t = s.split("");

    var lungime = t.length;

    console.log(t);

    var id1 = setInterval(f, 400);
    var i = 0;

    function f() {
        console.log(i, t[i], s[i]);
        if (i * 2 >= lungime) clearInterval(id1);
        var p2 = "";

        if (i == (lungime + 1) / 2) {
            p2 = s;
        } else {
            var k = 0;
            for (var j = 0; j < i; j++) {
                p2 += s[j];
                k++;
            }
            for (var j = 0; j < lungime - 2 * i; j++) {
                p2 += " ";
                k++;
            }
            for (var j = 0; j < i; j++) {
                p2 += s[k];
                k++;
            }
        }
        console.log(p2);
        document.getElementById("N").innerHTML = p2;
        i++;
    }

});



var buna2=document.getElementById("Col2");

buna2.addEventListener('click',()=>{

    var s2 = document.getElementById("R").innerHTML;
    var t2 = s2.split("");

    var lungime2 = t2.length;

    console.log(t2);

    var id2 = setInterval(f2, 400);
    var i2 = 0;

    function f2() {
        console.log(i2, t2[i2], s2[i2]);
        if (i2 * 2 >= lungime2) clearInterval(id2);
        var p2 = "";

        if (i2 == (lungime2 + 1) / 2) {
            p2 = s2;
        } else {
            var k = 0;
            for (var j = 0; j < i2; j++) {
                p2 += s2[j];
                k++;
            }
            for (var j = 0; j < lungime2 - 2 * i2; j++) {
                p2 += " ";
                k++;
            }
            for (var j = 0; j < i2; j++) {
                p2 += s2[k];
                k++;
            }
        }
        console.log(p2);
        document.getElementById("R").innerHTML = p2;
        i2++;
    }
});


function fontSize() {
    var select = document.getElementById("text");
    var listValue = select.options[select.selectedIndex].value;
    
    var obiect=document.getElementById("titlu1");

    obiect.style.fontSize = listValue;
    localStorage.setItem("font-size", listValue);
  }
  
  function getFontSize() {
    var select = document.getElementById("titlu1");
    select.value = localStorage.getItem("font-size");
    select.style.fontSize = select.value;
  }
  
  window.onload = getFontSize();





 
    document.getElementById("counter1").innerHTML = "Ai accesat acest link de" + localStorage.clickcount1 + " ori.";
  
    function clickCounter() {
    if (typeof(Storage) !== "undefined")
    {
      if (localStorage.clickcount1)
      {
        localStorage.clickcount1 = Number(localStorage.clickcount1)+1;
      } else {
        localStorage.clickcount1 = 1;
      }
      document.getElementById("counter1").innerHTML = "Ai accesat acest link de" + localStorage.clickcount1 + " ori.";
    } 
    else
    {
      document.getElementById("counter1").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }


  document.getElementById("counter2").innerHTML = "Ai accesat acest link de" + localStorage.clickcount2 + " ori.";

  function clickCounter2() {
    if (typeof(Storage) !== "undefined")
    {
      if (localStorage.clickcount2)
      {
        localStorage.clickcount2 = Number(localStorage.clickcount2)+1;
      } else {
        localStorage.clickcount2 = 1;
      }
      document.getElementById("counter2").innerHTML = "Ai accesat acest link de" + localStorage.clickcount2 + " ori.";
    } 
    else
    {
      document.getElementById("counter2").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }