function randomColor() {
	let colors = ['blue', 'red', 'yellow', 'orange', 'green', 'rebeccapurple', 'black'];
	shuffle(colors);
  document.documentElement.style.setProperty(`--random-color`, colors[0]);
}

let shuffle = (array) => {
	let currentIndex = array.length;
	let temporaryValue, randomIndex;
	while (0 !== currentIndex) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}
	return array;
};

let button = document.querySelector('.btn');
button.addEventListener('click', randomColor);