let images = [
  "https://planto-the-plant-watering-app.herokuapp.com/assets/plants/plant1.png",
  "https://planto-the-plant-watering-app.herokuapp.com/assets/plants/plant2.png",
  "https://planto-the-plant-watering-app.herokuapp.com/assets/plants/plant3.png",
  "https://planto-the-plant-watering-app.herokuapp.com/assets/plants/plant1.png",
  "https://planto-the-plant-watering-app.herokuapp.com/assets/plants/plant5.png"
];

const plants = document.querySelectorAll(".plant");
plants.forEach(plant => {
  plant.addEventListener("mouseover", multiply);
});

function multiply(e) {
  console.log(e);

  let img = document.createElement("img");
  img.src = images[generateNum(0, 4)];

  /* If an images was hovered in the first container, firstChildClass will return an image
   * w/ 'plant plant1' classes, while if it is in the second container it will always
   * return 'plant plant5'. Thus this functions checks if the hover event was
   * triggered in what section, thus appending new element to that particular section
   */
  if (e.fromElement.firstElementChild.classList.contains("plant1")) {
    // document.getElementById("cont1").appendChild(img);
    document
      .getElementById("cont1")
      .insertBefore(img, document.getElementById("cont1").children[0]);
  } else if (e.fromElement.firstElementChild.classList.contains("plant5")) {
    // document.getElementById("cont2").appendChild(img);
    document
      .getElementById("cont2")
      .insertBefore(img, document.getElementById("cont2").children[0]);
  } else return;

  // Generates a random speed and behavior for the added element
  img.classList.add("plant" + generateNum(1, 8));
  img.classList.add("plant");

  // In ideal world, the element would be creates right next to
  // the hovered one, yet a bit offsetted to the left or right(might be determined
  // on which container).
}

function generateNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
