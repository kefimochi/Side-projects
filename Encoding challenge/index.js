function encode(num) {
  let encodedNum = num + 8192;
  //   encodedNum = encodedNum.toString(16); // Intermediate hex
  let binary = encodedNum.toString(2);
  console.log(binary);
  let newNum = binary.splice(binary.length - 5, 0, 1);
  console.log(newNum);
  // Interprets given num as binary, thus 11 as input will result in 3
  //   console.log("Testing binary: ", Number.parseInt(11, 2));
  //   console.log("Testing binary 2: ", el.toString(2));
  return encodedNum;
}

function decode(num) {
  return num;
}

String.prototype.splice = function(idx, rem) {
  return this.slice(0, idx) + 0 + this.slice(idx + Math.abs(rem));
};

console.log("Encoding 0 (should be 4000):", encode(0));
console.log("Encoding -8192 (should be 0000):", encode(-8192));
console.log("Encoding 2048 (should be 5000):", encode(2048));
