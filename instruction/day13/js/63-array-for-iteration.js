// Bir dizideki sayıların toplamını hesaplayınız:

const numbers = [34, 10, 20];
const numbers2 = [-5, 10, -20, 23, 39, -9];

const calculateSum = (arr) => {
  // Validasyon
  if (!Array.isArray(arr)) {
    return {
      status: "error",
      message: "Lütfen array giriniz.",
    };
  }

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
};

console.log(calculateSum(1));
console.log(calculateSum(numbers));

const hesapla = (arr) => {
  // Validasyon
  if (!Array.isArray(arr)) {
    return {
      status: "error",
      message: "Lütfen array giriniz.",
    };
  }

  let positiveSum = 0;
  let negativeSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveSum += arr[i];
    } else {
      negativeSum += arr[i];
    }
  }

  return positiveSum - negativeSum;
};

const result = hesapla(numbers2);
console.log(result); // 106
