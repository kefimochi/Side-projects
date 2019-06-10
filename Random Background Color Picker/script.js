let generatedColor = "#2d1dba";
let generatedColor2 = "#f772ff";

function randomColor() {
  generatedColor = Math.floor(Math.random() * 16777215).toString(16);
  generatedColor2 = Math.floor(Math.random() * 16777215).toString(16);

  if (
    getContras(generatedColor) === "black" &&
    getContras(generatedColor2) === "black"
  )
    document.documentElement.style.setProperty(`--primary`, "black");
  else document.documentElement.style.setProperty(`--primary`, "white");

  generatedColor = "#" + generatedColor;
  generatedColor2 = "#" + generatedColor2;
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
  alert("Color was successfully copied!");
}

// It takes the hex value and compares it to the value halfway between
// pure black and pure white. If the hex value is less than half, meaning it is
// on the darker side of the spectrum, it returns white as the text color. If
// the result is greater than half, it’s on the lighter side of the spectrum and returns black as the text value.

function getContras(hexcolor) {
  return parseInt(hexcolor, 16) > 0xffffff / 2 ? "black" : "white";
}
