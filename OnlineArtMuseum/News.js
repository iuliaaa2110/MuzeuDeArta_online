window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

var field = document.getElementById("field");
var ball = document.getElementById("ball");
var ball2 = document.getElementById("ball2");
var ball4 = document.getElementById("ball4");
var ball5 = document.getElementById("ball5");
var ball3 = document.getElementById("ball3");
var ball6 = document.getElementById("ball6");
var ball7 = document.getElementById("ball7");
var ball8 = document.getElementById("ball8");

var maxX = field.clientWidth - ball.offsetWidth;
var maxY = field.clientHeight - ball.offsetHeight;

var duration = 10; // seconds
var gridSize = 10; // pixels

var start = null;
var SM=document.getElementById("SM");

function step(timestamp)
{
    
  var progress, x, y, y2;
  if(start === null) start = timestamp;

  progress = (timestamp - start) / duration / 1000; // percent

  x = progress * maxX/gridSize; // x = ƒ(t)
  y = 2 * Math.sin(x); // y = ƒ(x)
  y2 = 2 * Math.cos(x);

 
  SM.addEventListener('click',()=>{ 
        if(SM.innerText=="SlowMotion")
            {duration=17;
             SM.innerText="Rapid";}
        else
             {duration=10;
              SM.innerText="SlowMotion";}
              progress = (timestamp - start) / duration / 1000; // percent

  x = progress * maxX/gridSize; // x = ƒ(t)
  y = 2 * Math.sin(x); // y = ƒ(x)
  y2 = 2 * Math.cos(x);
});



  ball.style.left = ball2.style.left = Math.min(maxX, gridSize * x) + "px";
  ball.style.bottom = maxY/2 + (gridSize * y) + "px";
  ball2.style.bottom = maxY/5 - (gridSize * y2) + "px";

  

  
  SM.addEventListener('click',()=>{ 
        if(SM.innerText=="SlowMotion")
            {duration=17;
             SM.innerText="Rapid";}
        else
             {duration=10;
              SM.innerText="SlowMotion";}
              progress = (timestamp - start) / duration / 1000; // percent

  x = progress * maxX/gridSize; // x = ƒ(t)
  y = 2 * Math.sin(x); // y = ƒ(x)
  y2 = 2 * Math.cos(x);
});



  ball3.style.left = ball4.style.left = Math.min(maxX, gridSize * x) + "px";
  ball3.style.bottom = maxY/3 - (gridSize * y) + "px";
  ball4.style.bottom = maxY/3 + (gridSize * y2) + "px";



  SM.addEventListener('click',()=>{ 
        if(SM.innerText=="SlowMotion")
            {duration=17;
             SM.innerText="Rapid";}
        else
             {duration=10;
              SM.innerText="SlowMotion";}
              progress = (timestamp - start) / duration / 1000; // percent

  x = progress * maxX/gridSize; // x = ƒ(t)
  y = 2 * Math.sin(x); // y = ƒ(x)
  y2 = 2 * Math.cos(x);
});



   ball5.style.left = ball6.style.left = Math.min(maxX, gridSize * x) + "px";
   ball5.style.bottom = maxY/5 + (gridSize * y) + "px";
   ball6.style.bottom = maxY/2 +  (gridSize * y2) + "px";

   SM.addEventListener('click',()=>{ 
         if(SM.innerText=="SlowMotion")
             {duration=17;
              SM.innerText="Rapid";}
         else
              {duration=10;
               SM.innerText="SlowMotion";}
               progress = (timestamp - start) / duration / 1000; // percent
 
   x = progress * maxX/gridSize; // x = ƒ(t)
   y = 2 * Math.sin(x); // y = ƒ(x)
   y2 = 2 * Math.cos(x);
 });


   ball7.style.left = ball8.style.left = Math.min(maxX, gridSize * x) + "px";
  ball7.style.bottom = maxY/3 - (gridSize * y) + "px";
  ball8.style.bottom = maxY/3 + (gridSize * y2) + "px";


  SM.addEventListener('click',()=>{ 
        if(SM.innerText=="SlowMotion")
            {
                SM.innerText="Rapid";
                duration=17;
             }
        else
             {
                SM.innerText="SlowMotion"; 
                duration=10;
              }
              progress = (timestamp - start) / duration / 1000; // percent

  x = progress * maxX/gridSize; // x = ƒ(t)
  y = 2 * Math.sin(x); // y = ƒ(x)
  y2 = 2 * Math.cos(x);
});

  if(progress >= 1) start = null; // reset to start position
  requestAnimationFrame(step);
}

requestAnimationFrame(step);






// window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

// var field = document.getElementById("field");
// var ball = document.getElementById("ball3");
// var ball2 = document.getElementById("ball4");

// var maxX = field.clientWidth - ball.offsetWidth;
// var maxY = field.clientHeight - ball.offsetHeight;

// var duration = 5; // seconds
// var gridSize = 50; // pixels

// var start = null;

// function step(timestamp)
// {
//   var progress, x, y, y2;
//   if(start === null) start = timestamp;

//   progress = (timestamp - start) / duration / 1000; // percent

//   x = progress * maxX/gridSize; // x = ƒ(t)
//   y = 2 * Math.sin(x); // y = ƒ(x)
//   y2 = 2 * Math.cos(x);

//   ball.style.left = ball2.style.left = Math.min(maxX, gridSize * x) + "px";
//   ball.style.bottom = maxY/2 + (gridSize * y) + "px";
//   ball2.style.bottom = maxY/2 + (gridSize * y2) + "px";

//   if(progress >= 1) start = null; // reset to start position
//   requestAnimationFrame(step);
// }

// requestAnimationFrame(step);





// window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

// var field = document.getElementById("field");
// var ball = document.getElementById("ball5");
// var ball2 = document.getElementById("ball6");

// var maxX = field.clientWidth - ball.offsetWidth;
// var maxY = field.clientHeight - ball.offsetHeight;

// var duration = 5; // seconds
// var gridSize = 50; // pixels

// var start = null;

// function step(timestamp)
// {
//   var progress, x, y, y2;
//   if(start === null) start = timestamp;

//   progress = (timestamp - start) / duration / 1000; // percent

//   x = progress * maxX/gridSize; // x = ƒ(t)
//   y = 2 * Math.sin(x); // y = ƒ(x)
//   y2 = 2 * Math.cos(x);

//   ball.style.left = ball2.style.left = Math.min(maxX, gridSize * x) + "px";
//   ball.style.bottom = maxY/2 + (gridSize * y) + "px";
//   ball2.style.bottom = maxY/2 + (gridSize * y2) + "px";

//   if(progress >= 1) start = null; // reset to start position
//   requestAnimationFrame(step);
// }

// requestAnimationFrame(step);
