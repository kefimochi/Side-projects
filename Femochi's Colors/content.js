const navBar = document.querySelector(".nav-bar");
const navLinks = document.querySelectorAll("a");
navBar.addEventListener("mouseleave", toggleNavigation);

navLinks.forEach(link => {
  link.addEventListener("click", toggleNavigation);
  console.log(link);
});

$(".toggle-bars").click(function() {
  $(".nav").toggleClass("show");
});

function toggleNavigation(e) {
  $(".nav").toggleClass("show");
  if ($(".nav").hasClass("show")) {
    $(".nav").removeClass("show");
  }
}

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["fun", "hard", "a journey", "LIFE!"];
const typingSpeed = 200;
const erasingSpeed = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0; // textArray index
let charIndex = 0; // character index

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingSpeed + 1100);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // On DOM Load initiate the effect
  setTimeout(type, newTextDelay + 250);
});
