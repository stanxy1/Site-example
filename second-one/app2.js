window.onload = function(){

let dives = [document.getElementById(1), document.getElementById(2), document.getElementById(3), document.getElementById(4)];
let colors = ['red', 'orange', 'yellow', 'green', 'aqua', 'blue', 'purple'];
let currentIndex = 0;
//setInterval(function () {
  dives[Math.floor(Math.random()*7)].style.backgroundColor = colors[currentIndex];
  
   if (!colors[currentIndex]) {
       currentIndex = 0;
   } else {
       currentIndex++;
   }
//}, 50);
}