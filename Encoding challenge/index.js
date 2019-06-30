function encode(num) {
  let encodedNum = num + 8192;
  encodedNum = encodedNum.toString(2);
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

console.log("Encoding 0 (should be 4000):", encode(11));
console.log("Encoding -8192 (should be 0000):", encode(-8192));
console.log("Encoding 2048 (should be 5000):", encode(2048));
