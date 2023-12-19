window.addEventListener("load", setTimeout(flashingScreen, 1));
function flashingScreen(){
    document.body.style.backgroundColor = "red";
    //document.body.style.color = "white";
    document.body.style.backgroundColor = "white";
    //document.body.style.color = "red";
}
