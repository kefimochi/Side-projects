let colorSelected = "#0000FF";

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
  // var copyText = document.getElementById("random-color");
  // copyText.select();
  // document.execCommand("copy");
  // alert("Copied the text: " + copyText.value);

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
