let n = 10;

let evenCount = 0;
let oddCount = 0;
let sum = 0;

for (let i = 1; i <= n; i++) {
  sum = sum + i;

  if (i % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}

console.log("Even Count: " + evenCount);
console.log("Odd Count: " + oddCount);
console.log("Total Sum: " + sum);