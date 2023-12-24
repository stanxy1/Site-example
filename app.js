let lastScrollTop = 0;
header = document.getElementById('header');
window.addEventListener('scroll', function() {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    header.style.top = '-70px';
  } else {
    header.style.top = '0';
  }
  lastScrollTop = scrollTop;
});

let btnTop = document.getElementById('btnTop');

window.onscroll = function() {
  topFuncrion();
};

function topFuncrion() {
  if ( document.documentElement.scrollTop > 120 && document.documentElement.scrollTop < 1275) {
    btnTop.style.transform = "scale(1)";
  } else {
    btnTop.style.transform = "scale(0)";
  }
}

function toUp() {
  window.scrollTo({top: 0, behavior: 'smooth'});
  // document.documentElement.scrollTop = 0;
}

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");
let animationActive = false;


circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    circle.style.opacity = "1";

    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });
 
  if(animationActive) {
    requestAnimationFrame(animateCircles);
  }
}

document.querySelector('.btn2').addEventListener('click', function() {
  animationActive = !animationActive;
  if(animationActive) {
    animateCircles();
  }
});
