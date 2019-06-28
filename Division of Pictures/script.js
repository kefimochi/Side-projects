let images = [
  "https://planto-the-plant-watering-app.herokuapp.com/assets/plants/plant1.png",
  "https://planto-the-plant-watering-app.herokuapp.com/assets/plants/plant2.png",
  "https://planto-the-plant-watering-app.herokuapp.com/assets/plants/plant3.png",
  "https://planto-the-plant-watering-app.herokuapp.com/assets/plants/plant1.png",
  "https://planto-the-plant-watering-app.herokuapp.com/assets/plants/plant5.png"
];
let hovered = 0;
let keyFrames = ["moveUpAndDown", "moveDownAndUp"];

const plants = document.querySelectorAll(".plant");
plants.forEach(plant => {
  plant.addEventListener("mouseover", multiply);
});

function multiply(e) {
  let container = document.querySelector(".float-container"); // Use to compare?
  console.log(e);
  console.log(e.fromElement.firstElementChild); // If first container than returns 'plant plant1', if second 'plant plant5'
  // console.log(e.firstElementChild);
  console.log(e.fromElement.firstElementChild.toString().includes("plant1"));
  hovered++;
  console.log(hovered);
  let img = document.createElement("img");
  img.src = images[generateNum(0, 4)];
  document.getElementById("cont1").appendChild(img);
  img.classList.add("plant1");
  img.classList.add("plant");

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
