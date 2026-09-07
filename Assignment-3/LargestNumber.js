let numbers = [45, 12, 89, 23, 99, 67];

let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > largest) {
    largest = numbers[i];
  }
}

console.log(largest);