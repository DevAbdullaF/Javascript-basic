let sentence = "I learn MERN";

let vowelCount = 0;
let vowels = "aeiou";

for (let character of sentence.toLowerCase()) {
  if (vowels.includes(character)) {
   vowelCount++;
  }
}

console.log(vowelCount);