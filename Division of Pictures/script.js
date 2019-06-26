let images = [
  "https://planto-the-plant-watering-app.herokuapp.com/assets/plants/plant1.png",
  "https://planto-the-plant-watering-app.herokuapp.com/assets/plants/plant2.png",
  "https://planto-the-plant-watering-app.herokuapp.com/assets/plants/plant3.png",
  "https://planto-the-plant-watering-app.herokuapp.com/assets/plants/plant1.png"
];

const plants = document.querySelectorAll(".plant");
plants.forEach(plant => {
  plant.addEventListener("click", multiply());
});

function multiply() {
  console.log("Hovered");
  let img = document.createElement("img");
  img.src = images[generateNum()];
  document.getElementById("cont1").appendChild(img);
  // Somehow checks which container is the parent.
  // In ideal world, the element would be creates right next to
  // the hovered one, yet a bit offsetted to the left or right(might be determined
  // on which container).
}

function generateNum() {
  let min = Math.ceil(0);
  let max = Math.floor(4);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
