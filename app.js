// object.onclick = function(){MyFunction}

// function MyFunction(    ){
//     alert("SERKAN GAY");
// }

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



function replace() {
  window.location.href = "second-one/index2.html";
}


let btnTop = document.getElementById('btnTop');

window.onscroll = function() {
  topFuncrion();
};

function topFuncrion() {
  if ( document.documentElement.scrollTop > 120) {
    btnTop.style.size = "1";
  } else {
    btnTop.style.size = "0";
  }
}

function toUp() {
  window.scrollTo({top: 0, behavior: 'smooth'});
  // document.documentElement.scrollTop = 0;
}