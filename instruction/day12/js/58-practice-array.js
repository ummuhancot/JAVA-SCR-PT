//Arayların isimleri genelde coklu olduğu icin s koyarız
let numbers = [10,56,14,67,89,33,22];
let numbers2 = [-10,-56,-14,-67,-89,-33,-22];

//1.yol
function findMaxNumberInArray(arr) {
  if (!Array.isArray(arr)) {
    alert("Input array değil!");
    return;
  }

  let maxNumber = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (maxNumber < arr[i]) {
      maxNumber = arr[i];
    }
  }

  return maxNumber;
}

//2.yol
function findMaxNumberInArray2(arr) {
  if (!Array.isArray(arr)) {
    alert("Input array değil!");
    return;
  }

  let maxNumber = arr[0];

  for (let i = 1; i < arr.length; i++) {
    maxNumber = Math.max(maxNumber, arr[i]);
  }

  return maxNumber;
}


console.log(findMaxNumberInArray(numbers)); // 89
console.log(findMaxNumberInArray(numbers2)); // -12

console.log(findMaxNumberInArray2(numbers)); // 89
console.log(findMaxNumberInArray2(numbers2)); // -12
// console.log(Array.isArray(numbers)); //girilen sayı array mı değilmi demek

console.log(Math.max(8,5));//iki değer yazıp karşılaştırıp yazabiliriz onun dışında 