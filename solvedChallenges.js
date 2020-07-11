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
    /*    loop through array
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
/**************************************************Comparing & asynchronous algorithm**********************************************/
function fn(arr1, arr2) { //Use if both arrays are sorted, but dictionary is better is not sorted
  let i = 0;
  let j = 0;
  let result = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) i++;
    else if (arr1[i] > arr2[j]) j++;
    else {
      result.push(arr1[i]);
      i++;
      j++;
    }
  }
  return result;
}
console.log(fn([1,2,3,5,6,7,20], [3,6,7,8,20]));
/**********************************************Find The Duplicates in an Unsorted Array********************************************/
function findDuplicates(arr1, arr2) {
  let result = [];
  let dictionary = {};
  arr1.forEach((num, index) => { dictionary[num] = index; }); // 1) push all values from arr1.
  arr2.forEach((num) => {  // 2) if the value already exists on the dictionary, then push to result
    if (dictionary[num] !== undefined) result.push(num);
  });
  return result;
}
findDuplicates([1, 2, 3, 5, 6, 7], [3, 6, 7, 8, 20])
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


// **********************
// Given a one dimensional array of data write a function that returns a new array
// with the data reversed. Don't just use the reverse function that is built into your environment.
// **********************

const sampleData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const reverseData = (data) => {
  let reversedArr = [];
  for (let i = data.length - 1; i >= 0; i--) {
    reversedArr.push(data[i]);
  }
  return reversedArr;
};

console.log(reverseData(sampleData));

// **********************
// Write a quick and dirty program (not just a standalone function) to print a count
// of all the different "words" in a text file. Use any definition of word that makes
// logical sense or makes your job easy.
// **********************

const fs = require("fs");

fs.readFile("sample.txt", (err, data) => {
  if (err) throw err;
  printResults(getWordCount(data.toString()));
});

const getWordCount = (data) => {
  const splitText = data.split(" ");
  const countedWords = {};

  for (let i = 0; i < splitText.length; i++) {
    splitText[i] = checkEndPunctuation(splitText[i]);
    calculateNumberOfWords(countedWords, splitText[i].toLowerCase());
  }

  return filterWordsByAmount(countedWords);
};

// Removes any punctuation from the end of a string
const checkEndPunctuation = (str) => {
  const lastChar = str.charAt(str.length - 1);

  if (
    lastChar === "." ||
    lastChar === "," ||
    lastChar === "!" ||
    lastChar === "?"
  ) {
    return spliceSplit(str, str.length - 1, 1);
  }
  return str;
};

// Removes 'count' number of letters from a string, starting at 'index'
const spliceSplit = (str, index, count) => {
  var ar = str.split("");
  ar.splice(index, count);
  return ar.join("");
};

// Edits the 'countedWords' object that was passed by reference.
const calculateNumberOfWords = (countedWords, word) => {
  if (!countedWords[word]) countedWords[word] = 1;
  else countedWords[word] = countedWords[word] + 1;
};

const filterWordsByAmount = (words) => {
  let restructuredWords = [];
  dataKeys = Object.keys(words);

  for (let i = 0; i < dataKeys.length; i++) {
    restructuredWords.push({ word: dataKeys[i], count: words[dataKeys[i]] });
  }

  restructuredWords = sortByCount(restructuredWords);

  return restructuredWords;
};

const sortByCount = (words) => {
  return words.sort((a, b) => (a.count < b.count ? 1 : -1));
};

const printResults = (resultData) => {
  const text = ["\n\nFor this input file, the word: \n\n"];
  for (let i = 0; i < resultData.length; i++) {
    text.push(
      `"${resultData[i].word}" occurred ${resultData[i].count} ${
        resultData[i].count === 1 ? "time" : "times"
      } \n`
    );
  }
  console.log(text.join(""));
};

// **********************
// Write a function that returns M random non-negative integers less than some value N. Each integer must also be unique.
// **********************

const generateIntegers = (givenNumber) => {
  return Math.floor(Math.random() * Math.floor(givenNumber));
};

console.log("Generated number: ", generateIntegers(36));
