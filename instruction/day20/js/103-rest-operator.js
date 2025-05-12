function sumOfTwo(a, b) {
  return a + b;
}

function sumOfThree(a, b, c) {
  return a + b + c;
}

function sumOfFour(a, b, c, d) {
  return a + b + c + d;
}

console.log(sumOfTwo(10, 20));
console.log(sumOfThree(1, 2, 3));
console.log(sumOfFour(2, 4, 6, 8));

// Rest Operator sayesinde argümanları tek bir array içerisinde toplayabiliriz:
function sum(...nums) {
  console.log(nums);
  return nums.reduce((acc, item) => acc + item, 0);
}

console.log(
  sum(1, 2, 3, 4, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
);
console.log(sum(10, 20));
console.log(sum(1, 2, 3));
console.log(sum(2, 4, 6, 8));

// Built-in örnekler
Math.min(1, 2, 3, 4, 5, 6);
Math.max(-5, 12, -9);

console.log("-------------------");

// Öğrencinin adını ve soyadı ile belirsiz sayıda notu parametre olarak alan ve notların ortalamasını bulup, öğrenci adı ile birlikte ortalamayı döndüren fonksiyonu yazınız.

function findAverage(firstName, lastName, ...grades) {
  const sum = grades.reduce((acc, item) => acc + item, 0);
  const average = Math.round(sum / grades.length);

  return `Benim adım ${firstName} ${lastName}, ortalamam ${average}`;
}

console.log(findAverage("John", "Doe", 55, 80, 90, 20, 49, 90, 40, 0));

// Rest Operator parametrede kullanılırken yalnızca bir kez ve sonda kullanılabilir.
function findTotal(name, ...grades) {
  return `${name} ${grades.reduce((acc, item) => acc + item)}`;
}

console.log(findTotal("Name", 1, 2, 3, 4));
