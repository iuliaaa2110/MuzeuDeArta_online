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