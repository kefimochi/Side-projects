let images = [
  "https://planto-the-plant-watering-app.herokuapp.com/assets/plants/plant1.png",
  "https://planto-the-plant-watering-app.herokuapp.com/assets/plants/plant2.png",
  "https://planto-the-plant-watering-app.herokuapp.com/assets/plants/plant3.png",
  "https://planto-the-plant-watering-app.herokuapp.com/assets/plants/plant1.png"
];

let keyFrames = ["moveUpAndDown", "moveDownAndUp"];

const plants = document.querySelectorAll(".plant");
plants.forEach(plant => {
  plant.addEventListener("click", multiply());
});

function multiply() {
  console.log("Hovered");
  let img = document.createElement("img");
  img.src = images[generateNum(0, 3)];
  document.getElementById("cont1").appendChild(img);
  // Somehow checks which container is the parent.
  // In ideal world, the element would be creates right next to
  // the hovered one, yet a bit offsetted to the left or right(might be determined
  // on which container).

  // .plant${1-8}, generate the number and assign the corresponding class
}

function generateNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
