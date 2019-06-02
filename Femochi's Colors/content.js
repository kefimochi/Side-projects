//-------------------Toggling Navigation---------------------//
const navBar = document.querySelector(".nav-bar");
const navLinks = document.querySelectorAll("a");
navBar.addEventListener("mouseleave", toggleNavigation);

navLinks.forEach(link => {
  link.addEventListener("click", toggleNavigation);
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

//-------------------Typing 'Watercolor is'---------------------//

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

//-------------------Smooth Scrolling---------------------//

function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);

    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d;
    return -c * t * (t - 2) + b;
  }
  requestAnimationFrame(animation);
}

let navLink = document.querySelectorAll(".nav-link");
navLink.forEach(link =>
  link.addEventListener("click", () => {
    if (link.textContent === "Home") smoothScroll("#first-section", 2500);
    else if (link.textContent === "About")
      smoothScroll("#second-section", 1500);
    else if (link.textContent === "Subscription")
      smoothScroll("#third-section", 1500);
    else if (link.textContent === "Order")
      smoothScroll("#fourth-section", 1500);
    else if (link.textContent === "Contact")
      smoothScroll("#fifth-section", 1500);
  })
);

console.log(window.scrollY);
