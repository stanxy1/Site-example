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

