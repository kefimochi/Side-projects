function encode(num) {
  if (-8192 > num || 8191 < num) return "Input outside 14-bit range.";
  num = num + 8192;
  let binary = num.toString(2);

  let newNum = parseInt(binary.splice(binary.length - 5, 0), 2).toString(16);
  if (newNum === "0") newNum = "0000";
  return newNum;
}

function decode(byte1, byte2) {
  let joined = byte1 + byte2;
  //   console.log(joined);
}

function hexToBin(src) {
  // Kills any 0's at the start of the string since
  // they will not play any role in conversion
  while (src.charAt(0) === "0") {
    src = src.substr(1);
  }

  let mapping = {
    "0": "0000",
    "1": "0001",
    "2": "0010",
    "3": "0011",
    "4": "0100",
    "5": "0101",
    "6": "0110",
    "7": "0111",
    "8": "1000",
    "9": "1001",
    A: "1010",
    B: "1011",
    C: "1100",
    D: "1101",
    E: "1110",
    F: "1111"
  };

  //If starts with zero - delete

  src = src.toString();
  var returnString = "";

  for (let i = 0; i < src.length; i++) {
    returnString += mapping[src[i]];
  }

  return returnString;
}

console.log("Hex to bin", hexToBin("A05"));

String.prototype.splice = function(idx, rem) {
  return this.slice(0, idx) + 0 + this.slice(idx + Math.abs(rem));
};

console.log("Encoding 0 (should be 4000):", encode(0));
console.log("Encoding -8192 (should be 0000):", encode(-8192));
console.log("Encoding 2048 (should be 5000):", encode(2048));

console.log("Decoding 40 00 (should be 0):", decode("40", "00"));
console.log("Decoding 0A 05 (should be -6907):", decode("0A", "05"));
console.log("Decoding 55 00 (should be 2688):", decode("55", "00"));
