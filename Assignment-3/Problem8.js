let users = [
  { name: "HAsan", age: 16 },
  { name: "Shakib", age: 22 },
  { name: "Mohim", age: 17 },
  { name: "Sara", age: 25 }
];

let adultUsers = [];

for (let user of users) {
  if (user.age >= 18) {
    adultUsers.push(user);
  }
}

console.log(adultUsers);