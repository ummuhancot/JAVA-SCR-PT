const euro = 43.57;
const usd = 38.41;
const vd = 0.0015;
const priceList = [1000, 1500, 3000, 10000];

const calculateCurrencyPrice = (arr, rate) => {
  return arr.map((price) => Math.round(price / rate));
};

console.log(calculateCurrencyPrice(priceList, euro));
console.log(calculateCurrencyPrice(priceList, usd));
console.log(calculateCurrencyPrice(priceList, vd));
