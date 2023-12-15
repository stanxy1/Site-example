object.onclick = function(){MyFunction}

function MyFunction(    ){
    alert("SERKAN GAY");
}

const body = document.body;
const triggerMenu = document.querySelector(".page-header .");
const nav = document.querySelector(".header .container");
const menu = document.querySelector(".header .menu");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    if (currentScroll <= 0) {
      body.classList.remove(scrollUp);
      return;
    }
  
    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
      // down
      body.classList.remove(scrollUp);
      body.classList.add(scrollDown);
      lottiePlayer.play();
    } else if (
      currentScroll < lastScroll &&
      body.classList.contains(scrollDown)
    ) {
      // up
      body.classList.remove(scrollDown);
      body.classList.add(scrollUp);
      lottiePlayer.stop();
    }
    lastScroll = currentScroll;
  });