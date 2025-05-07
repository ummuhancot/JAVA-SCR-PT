const names = ["John", "Mark", "Declan", "Kevin"];

// .map() metodu array döndürür. Sırasıyla tüm elemanları işlemden geçirir ve sonuçları döndürdüğü array içerisinde saklar.
//return ili kullanılır :)
const returnedMap = names.map((item, index, array) => {
  console.log("Item: ", item);
  console.log("Index: ", index);
  console.log("Array: ", array);

  return item.toUpperCase();
});

console.log("-------------------");

// .forEach() herhangi bir değer döndürmez!
//return ile kullanılmaz yani :)
const returnedMap2 = names.forEach((item, index, array) => {
  console.log("Item: ", item);
  console.log("Index: ", index);
  console.log("Array: ", array);

  return item.toUpperCase();
});

console.log(returnedMap);
console.log(returnedMap2);
console.log(names);

// Practice

const makeUpperCase = (arr) => {
  return arr.map((item) => item.toUpperCase());
};

console.log(makeUpperCase(["a", "b", "c"]));
