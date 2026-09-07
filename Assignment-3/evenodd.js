let numbers = [12, 7, 5, 20, 33, 42, 8];

let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}

console.log("Even:", evenCount);
console.log("Odd:", oddCount);