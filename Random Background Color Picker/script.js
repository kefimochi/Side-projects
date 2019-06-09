let generatedColor = "#2d1dba";
let generatedColor2 = "#f772ff";

function randomColor() {
  generatedColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  generatedColor2 = "#" + Math.floor(Math.random() * 16777215).toString(16);
  if (generatedColor !== "#1f37d") {
    //some function checking for accessibility
    document.documentElement.style.setProperty(`--primary`, "white");
  } else {
    document.documentElement.style.setProperty(`--primary`, "black");
  }
  refactorText(generatedColor);
  document.documentElement.style.setProperty(`--random-color`, generatedColor);
  document.documentElement.style.setProperty(
    `--random-color-2`,
    generatedColor2
  );
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
