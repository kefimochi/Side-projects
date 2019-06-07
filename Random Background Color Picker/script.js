let colorSelected = "#0000FF";

function randomColor() {
  let color = getRandomColor();
  if (color !== "#1f37d") {
    //some function checking for accessibility
    document.documentElement.style.setProperty(`--primary`, "white");
  } else {
    document.documentElement.style.setProperty(`--primary`, "black");
  }
  refactorText(color);
  document.documentElement.style.setProperty(`--random-color`, color);
  colorSelected = color;
}

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function refactorText(text) {
  let element = document.querySelector("#random-color");
  element.textContent = text;
}

function copyColor() {
  console.log(colorSelected);
  let copyColor = document.querySelector("#random-color");
  copyColor[0].focus();
  copyColor[0].select();
  try {
    let successful = document.execCommand("copy");
    let msg = successful ? "successful" : "unsuccessful";
    console.log("Copying text command was " + msg);
  } catch (err) {
    console.log("Oops, unable to copy");
  }
}

let button = document.querySelector(".btn");
button.addEventListener("click", randomColor);
