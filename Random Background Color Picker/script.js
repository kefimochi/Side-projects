function randomColor() {
  let colors = [
    "blue",
    "red",
    "yellow",
    "orange",
    "green",
    "rebeccapurple",
    "black"
  ];
  shuffle(colors);
  if (colors[0] !== "yellow") {
    document.documentElement.style.setProperty(`--random-color`, colors[0]);
    refactorText("Current color used: " + colors[0]);
  } else {
    document.documentElement.style.setProperty(`--random-color`, "black");
    refactorText("Current color was not accessible, defaulted to black!");
  }
}

function refactorText(text) {
  //   let h = document.createElement("H1");
  //   let t = document.createTextNode(text);
  //   console.log("T", t);
  //   h.appendChild(t);
  //   document.body.appendChild(h);
  let element = document.querySelector(".sub-text");
  element.textContent = text;
}

let shuffle = array => {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
};

let button = document.querySelector(".btn");
button.addEventListener("click", randomColor);
