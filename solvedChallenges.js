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
/**************************************************First Duplicates in an Array Challenge**********************************************/
function firstDuplicate(a) {
    let newArr = [];
    let bool = false;
    a.findIndex((current, index) => {
        newArr.forEach((num) => {
            if (num === current) {
                bool = true;
                newArr.unshift(current);
            };
        });
        if (bool === true) return a;
        newArr.push(current);
    });
    return bool === true ? newArr[0] : -1;
}

// OR
function firstDuplicate(a) {
  let dictionary = {};
  for (let i = 0; i < a.length; i++) {
    if (dictionary[a[i]] !== undefined) return a[i];
    else dictionary[a[i]] = i;
  }
  return -1;
}
/**************************************************Jumping On Clouds Challenge**********************************************/
/*
    loop through array
    if (arr[i] = arr[i+1] = arr[i+2] == '0')
        i+=1; //to get to arr[i+2] the next turn
        resut++;
    if (arr[i] = arr[i] = '0')
        result++;
    */
function jumpingOnClouds(c) {
let result = 0;
    for (let i = 0; i < c.length; i++) {
        if (c[i] == '0' && c[i + 1] == '0' && c[i + 2] == '0') {
            result++;
            i++;
        }
        else if (c[i] == '0' && c[i + 1] == '0') result++;
        else if (c[i] == '0' && c[i + 1] == '1' && c[i + 2] == '0') {
            result++;
            i++;
        }
    }
    return result;
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
/**************************************************'A' Challenge**********************************************/
function repeatedString(s, n) {
    let counter = 0;
    // if (s === "a") return s.repeat(n);
    s = s.split(); // now an array
    // s.forEach(char => {
    //     if (char === "a") counter++;
    // });
    for (let i = 0; i < n; i++) {
        if (s[i] === "a") counter++;
    }
    return counter;
}
