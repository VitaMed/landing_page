$(window).scroll(function() {
  const topLine = document.querySelector(".top-line");
  if($(window).scrollTop() === 0) {
    topLine.style.background = "none";
  }else {
    topLine.style.background = "hsla(0,3%,15%,0.6)";
  }
})