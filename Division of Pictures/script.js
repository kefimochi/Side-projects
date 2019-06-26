let links = [
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
}
