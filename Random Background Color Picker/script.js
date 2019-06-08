let colorSelected = "#0000FF";

function randomColor() {
  colorSelected = "#" + Math.floor(Math.random() * 16777215).toString(16);
  if (colorSelected !== "#1f37d") {
    //some function checking for accessibility
    document.documentElement.style.setProperty(`--primary`, "white");
  } else {
    document.documentElement.style.setProperty(`--primary`, "black");
  }
  refactorText(colorSelected);
  document.documentElement.style.setProperty(`--random-color`, colorSelected);
}

function refactorText(text) {
  let element = document.querySelector("#random-color");
  element.textContent = text;
}

function copyColor() {
  console.log(colorSelected);
  let copyColor = document.querySelector("#random-color");
  console.log(copyColor);
  copyColor.focus();
  copyColor.select();
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

function CopyToClipboard(containerid) {
  var range = document.createRange();
  range.selectNode(document.getElementById(containerid));
  window.getSelection().removeAllRanges(); // clear current selection
  window.getSelection().addRange(range); // to select text
  document.execCommand("copy");
  window.getSelection().removeAllRanges(); // to deselect
}
