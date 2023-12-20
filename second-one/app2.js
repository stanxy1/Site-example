window.onload = function(){
let dives = [document.getElementById(1), document.getElementById(2), document.getElementById(3), document.getElementById(4), document.getElementById(5), document.getElementById(6), document.getElementById(7)];
let colors = ['red', 'orange', 'yellow', 'green', 'aqua', 'blue', 'purple'];
let currentIndex = 0;
setInterval(function () {
  dives[currentIndex].style.backgroundColor = colors[currentIndex]
   if (!colors[currentIndex]) {
       currentIndex = 0;
   } else {
       currentIndex++;
   }
}, 50);
}