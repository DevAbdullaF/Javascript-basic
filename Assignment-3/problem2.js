function reverseString(text) {
  let reversed = "";

  for (let i = text.length - 1; i >= 0; i--) {
    reversed = reversed + text[i];
  }

  return reversed;
}

let result = reverseString("WOW");

console.log(result);