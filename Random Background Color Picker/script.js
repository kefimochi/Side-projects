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

function CopyToClipboard(containerid) {
  var range = document.createRange();
  range.selectNode(document.getElementById(containerid));
  window.getSelection().removeAllRanges(); // clears current selection
  window.getSelection().addRange(range); // to select text
  document.execCommand("copy");
  window.getSelection().removeAllRanges(); // to deselect text
  alert("Color was successfully copied!");
}
