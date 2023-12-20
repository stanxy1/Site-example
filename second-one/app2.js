window.onload = function(){
var dives = [$('.first_line'), $('.second_line'), $('.third_line'), $('.fourth_line'), $('.fifth_line'), $('.sixth_line'), $('.seventh_line')];
var colors = ['red', 'orange', 'yellow', 'green', 'aqua', 'blue', 'purple'];
var currentIndex = 0;
setInterval(function () {
  dives[Math.floor(Math.random()*7)].css({
     backgroundColor: colors[currentIndex]
   });
   if (!colors[currentIndex]) {
       currentIndex = 0;
   } else {
       currentIndex++;
   }
}, 50);
}