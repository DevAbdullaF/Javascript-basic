let items = ["apple", "banana", "apple", "orange", "banana"];

let uniqueItems = [];

for (let i = 0; i < items.length; i++) {
  
  if (!uniqueItems.includes(items[i])) {
    uniqueItems.push(items[i]);
  }
}

console.log(uniqueItems);