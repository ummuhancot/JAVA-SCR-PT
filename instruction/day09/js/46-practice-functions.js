// DOM Elementleri
const priceEl = document.querySelector("#price");
const taxEl = document.querySelector("#tax");
const discountEl = document.querySelector("#discount");
const resultEl = document.querySelector("#result");

let calculate = (price, tax, discount) => {
  if (price > 1500) discount += 10;
  if (discount <= 0) tax = 0;

  let totalTax = (price * tax) / 100;
  let totalDiscount = (price * discount) / 100;
  let lastPrice = price - totalDiscount + totalTax;

  return lastPrice;
};

let showLastPrice = () => {
  let fiyat = +priceEl.value;
  let vergi = +taxEl.value;
  let indirim = +discountEl.value;

  resultEl.innerText = `Son fiyat: ${calculate(fiyat, vergi, indirim)}`;
};
