window.onload = 
function flashingScreen(){
    var body = $('body');
var colors = ['black', 'white'];
var currentIndex = 0;
setInterval(function () {
   body.css({
     backgroundColor: colors[currentIndex]
   });
   if (!colors[currentIndex]) {
       currentIndex = 0;
   } else {
       currentIndex++;
   }
}, 50);
}