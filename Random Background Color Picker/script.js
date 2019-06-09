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
  refactorText(generatedColor, generatedColor2);
  document.documentElement.style.setProperty(`--random-color`, generatedColor);
  document.documentElement.style.setProperty(
    `--random-color-2`,
    generatedColor2
  );
}

function refactorText(text, text2) {
  let element = document.querySelector("#random-color");
  element.textContent = text;
  let element2 = document.querySelector("#random-color-2");
  element.textContent = text2;
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

function copy() {
  var el = document.createElement("textarea");
  // Set value (string to be copied)
  el.value = `linear-gradient(to top right, ${generatedColor},
    ${generatedColor2});`;
  // Set non-editable to avoid focus and move outside of view
  el.setAttribute("readonly", "");
  el.style = { position: "absolute", left: "-9999px" };
  document.body.appendChild(el);
  // Select text inside element
  el.select();
  // Copy text to clipboard
  document.execCommand("copy");
  // Remove temporary element
  document.body.removeChild(el);
}
