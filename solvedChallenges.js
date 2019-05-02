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
