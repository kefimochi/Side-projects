const navBar = document.querySelector('.nav-bar');
const navLinks = document.querySelectorAll('a');
navBar.addEventListener('mouseleave', toggleNavigation);

navLinks.forEach(link => {
  link.addEventListener("click", toggleNavigation);
  console.log(link);
});

$(".toggle-bars").click(function(){
    $(".nav").toggleClass("show");
});

function toggleNavigation(e) {
  $(".nav").toggleClass("show");
  if($(".nav").hasClass("show")) {
    $(".nav").removeClass("show");
  }
}
