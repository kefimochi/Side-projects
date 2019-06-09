let generatedColor;
let generatedColor2;

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
  element2.textContent = text2;
}

function copyColors() {
  var el = document.createElement("textarea");
  // Set value (string to be copied)
  el.value = `background-image: linear-gradient(to top right, ${generatedColor},
    ${generatedColor2});`;

  // Set non-editable to avoid focus and move outside of view
  el.setAttribute("readonly", "");
  el.style = { position: "absolute", left: "-9999px" };
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}
