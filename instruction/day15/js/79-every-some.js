const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [5, 10, -4, 3, -12];
const numbers3 = [-2, -4, -6, -8];

// EVERY
// Array'in istisnasız tüm elemanlarının belirtilen bir şartı sağlaması durumunda true, aksi takdirde false döndürür.

/**
 * Dizinin tüm elemanlarının pozitif olup olmadığını döndürür
 */
function isEveryItemPositive(arr) {
  const isPositive = arr.every((item, index, array) => {
    console.log("Item: ", item);
    console.log("Index: ", index);
    console.log("Array: ", array);

    return item >= 0;
  });

  console.log(isPositive);
  return isPositive
    ? "Tüm elemanlar pozitiftir"
    : "Tüm elemanlar pozitif değildir.";
}

console.log(isEveryItemPositive(numbers1));
console.log(isEveryItemPositive(numbers2));
console.log(isEveryItemPositive(numbers3));

console.log("----------------");
// SOME
// Array'in herhangi bir elemanın belirtilen bir şartı sağlaması durumunda true, istisnasız hiçbir elemanının şartı sağlamaması durumunda ise false döndürür.

/**
 * Dizinin herhangi bir elemanının pozitif olup olmadığını döndürür
 */
function isAnyItemPositive(arr) {
  const isPositive = arr.some((item, index, array) => {
    console.log("Item: ", item);
    console.log("Index: ", index);
    console.log("Array: ", array);

    return item >= 0;
  });

  console.log(isPositive);
  return isPositive
    ? "En az bir eleman pozitiftir"
    : "Tüm elemanlar negatiftir.";
}

console.log(isAnyItemPositive(numbers1));
console.log(isAnyItemPositive(numbers2));
console.log(isAnyItemPositive(numbers3));
