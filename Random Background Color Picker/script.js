function randomColor() {
  let color = getRandomColor();
  if (color !== "yellow") {
    //some function checking for accessibility
    document.documentElement.style.setProperty(`--primary`, "white");
  } else {
    document.documentElement.style.setProperty(`--primary`, "black");
  }
  refactorText(color);
  document.documentElement.style.setProperty(`--random-color`, color);
}

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function refactorText(text) {
  let element = document.querySelector(".random-color");
  element.textContent = text;
}

// let shuffle = array => {
//   let currentIndex = array.length;
//   let temporaryValue, randomIndex;
//   while (0 !== currentIndex) {
//     randomIndex = Math.floor(Math.random() * currentIndex);
//     currentIndex -= 1;

//     temporaryValue = array[currentIndex];
//     array[currentIndex] = array[randomIndex];
//     array[randomIndex] = temporaryValue;
//   }
//   return array;
// };

let button = document.querySelector(".btn");
button.addEventListener("click", randomColor);
