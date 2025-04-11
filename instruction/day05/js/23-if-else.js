let condition = true;

if (condition) {
  console.log("True");
} else {
  console.log("False");
}

let user = "user";

if (user === "admin") {
  console.log("Reports");
} else {
  console.log("Welcome");
}
// ============================

function calculate() {
  const inputEl = document.querySelector("input");
  let price = +inputEl.value;

  // console.log(price);

  if (price > 500) {
    price *= 0.9;
  } else {
    price *= 0.95;
  }

  document.querySelector(
    ".result"
  ).innerHTML = `<del>${+inputEl.value}</del> ${price.toFixed(2)}$ `;
}
