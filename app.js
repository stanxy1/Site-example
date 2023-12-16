object.onclick = function(){MyFunction}

function MyFunction(    ){
    alert("SERKAN GAY");
}

let lastScrollTop = 0;
header = document.getElementById('header');
window.addEventListener('scroll', function() {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    header.style.top = '-80px';
  } else {
    header.style.top = '0';
  }
  lastScrollTop = scrollTop;
});


