function encode(num) {
  num = num + 8192;
  let binary = num.toString(2);
  let newNum = binary.splice(binary.length - 5, 0, 0);
  return parseInt(newNum, 2).toString(16);
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
