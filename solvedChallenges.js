/**************************************************Sock Merchant Challenge**********************************************/
// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
  let count = 0;
  ar
    .sort((a, b) => a - b)
    .reduce((a, b) => a === b ? void count++ : b);
  return count;
}

function main() {
    let result = sockMerchant(7, [0,2,10,2,3,4,4]);
    console.log(result + "\n")
}
/**************************************************Match String Challenge**********************************************/
let wordDict = ["facebook", "face", "boo", "k", "haha", "book"]
let s = 'facebook';

function joinString(s, wordDict) {
  let arr = [];
  let str = ''; //Push it into arr, then reuse
  // if wordDict[i] = s, then add it to a new array
  for (let i = 0; i < wordDict.length; i++) {
    if (wordDict[i] === s) arr.push(wordDict[i]);
}
  
  console.log(s);
  console.log(wordDict);
  return arr;
}

console.log(joinString(s, wordDict));
