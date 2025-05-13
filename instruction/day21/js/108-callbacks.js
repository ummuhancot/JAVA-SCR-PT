// Callback'ler bir fonksiyonun argümanı olarak fonksiyon eklenmesidir.

// function printInfo(number){
//     console.log(number);
// }

// printInfo(2);

function giveOrder(callback) {
  callback("Callback Argümanı");
}

const cb = (param) => {
  console.log(param);
};

//   ((param) => {
//   console.log(param);
// })("Callback Argümanı");

giveOrder(cb);

// (() => {
//     console.log("Arrow Function IIFE'den merhaba");
// })();

// setTimeout(() => {}, 1000)
// document.addEventListener("click", () => {})

function siparsiVer(callback) {
  console.log("Sipariş verildi");

  setTimeout(() => {
    callback("Siparişiniz Hazır");
  }, 3000);
}

siparsiVer((param) => {
  console.log(param);
});
console.log("Ayakkabı aldım.");

// İki arrayin sayılarının toplamını bulup toplamlar arasındaki farkı hesaplayan programı callback kullanarak yapınız:

function findDifference(arr1, arr2, callback) {
  const sum1 = callback(arr1);
  const sum2 = callback(arr2);

  console.log("İki array arasındaki fark: ", Math.abs(sum1 - sum2));
}

function findSumOfArray(arr) {
  return arr.reduce((acc, item) => acc + item, 0);
}

const numbers1 = [1, 2, 3, 4];
const numbers2 = [5, 4];

findDifference(numbers1, numbers2, findSumOfArray);

// Fonksiyon
console.log(findSumOfArray);

// Sonuç
console.log(findSumOfArray([1]));
