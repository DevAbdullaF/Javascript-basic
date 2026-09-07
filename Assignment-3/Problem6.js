let cart = [
  { name: "Shirt", price: 1200, quantity: 2 },
  { name: "Pants", price: 1500, quantity: 1 },
  { name: "T-Shirt", price: 200, quantity: 3 }
];

let totalPrice = 0;

for (let i = 0; i < cart.length; i++) {
  let productPrice = cart[i].price * cart[i].quantity;

  totalPrice = totalPrice + productPrice;
}

console.log("Total price "+ totalPrice );