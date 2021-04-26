 window.onload = function() {

    let logbut=document.getElementById('GoToLog');  //deci sunt pe register si vreau sa ma duc in login
    let regbut=document.getElementById('GoToReg'); //invers

    regbut.addEventListener('click',()=>{
        document.getElementById("doi").style.display="block";
        document.getElementById("unu").style.display="none";
    });
    
    logbut.addEventListener('click',()=>{
        document.getElementById("unu").style.display="block";
        document.getElementById("doi").style.display="none";
    });
 }
    