const numbers = [11, 22, 33, 44, 55, 66];

// .forEach() metodu, array'in tüm elemanlarını sırasıyle function'ın parametresine getirir:
// 1. Parametre elemanın değerini
// 2. Parametre elemanın indeksini
// 3. Parametre ise metodun kullanıldığı arraye erişim verir.
numbers.forEach((item, index, array) => {
  console.log("Item: ", item);
  console.log("Index: ", index);
  console.log("Array: ", array);
});

numbers.forEach((number) => {
  console.log(number);
});

//? =========== Practice ============
// Array'in tüm elemanlarını 5 ile çarpıp yeni bir array'de saklayan programı yapınız.

const multiplyByArg = (arr, multiplied) => {
  // Validayon
  if (!Array.isArray(arr) || isNaN(multiplied)) {
    return "Input hatalı.";
  }

  let resultArr = [];

  arr.forEach((item) => {
    resultArr.push(item * multiplied);
  });

  return resultArr;
};

console.log(multiplyByArg(numbers, 5)); // [55, 110, 165, 220, 275, 330]
