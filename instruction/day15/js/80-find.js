// .find() yazılan şartı sağlayan ilk elemanı döndürür. Eğer ilgili şartı sağlayan herhangi bir değer çıkmazsa undefined döndürür.

const numbers = [1, 2, 3, 4, 5, 6];

const foundNumber = numbers.find((item, index, array) => {
  console.log("Item: ", item);
  console.log("Index: ", index);
  console.log("Array: ", array);

  return item > 3 && index > 4;
});

console.log("Sayı bulundu: ", foundNumber); // 6

const notFoundNumber = numbers.find((item) => item > 10);
console.log(notFoundNumber); // undefined


