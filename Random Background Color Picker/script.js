let generatedColor = "#2d1dba";
let generatedColor2 = "#f772ff";

function randomColor() {
  generatedColor = Math.floor(Math.random() * 16777215).toString(16);
  generatedColor2 = Math.floor(Math.random() * 16777215).toString(16);

  if (
    getContrastYIQ(generatedColor) === "black" &&
    getContrastYIQ(generatedColor2) === "black"
  ) {
    //some function checking for accessibility
    document.documentElement.style.setProperty(`--primary`, "black");
  } else {
    document.documentElement.style.setProperty(`--primary`, "white");
  }

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

function getContrastYIQ(hexcolor) {
  var r = parseInt(hexcolor.substr(0, 2), 16);
  var g = parseInt(hexcolor.substr(2, 2), 16);
  var b = parseInt(hexcolor.substr(4, 2), 16);
  var yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? "black" : "white";
}
