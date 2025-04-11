let number = 20;

if (number < 0) {
  console.log("Sayı negatiftir.");
  number *= -1;
}

console.log(number);
// DOM Element
const resultEl = document.querySelector(".result");

function calculate() {
  let price = +document.querySelector("#price").value;
  if (price > 500) {
    // price'a 10% indirim uygulama
    // price = price - (price * .10);
    // price = 90 / 100 * price
    price *= 0.9;
  }

  console.log(price);
  resultEl.innerText = price;
}
