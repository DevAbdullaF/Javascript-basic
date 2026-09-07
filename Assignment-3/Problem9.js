function capitalizeWords(sentence) {
  let words = sentence.split(" ");

  let capitalizedWords = words.map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return capitalizedWords.join(" ");
}

console.log(capitalizeWords("hello world I'm Learning programming"));