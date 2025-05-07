const cities = ["İstanbul", "Ankara", "İzmir", "Bursa", "Antalya", "Muğla"];

const filteredCities = cities.filter((item, index, array) => {
  console.log("Item: ", item);
  console.log("Index: ", index);
  console.log("Array: ", array);

  return item.toLowerCase().includes("i");
});

console.log(filteredCities);

const numbers = [-10, 10, 100, -99, 54];

const filteredNumbers = numbers.filter((item) => item > 0);
console.log(filteredNumbers);

let resultArr = [];
for (let num of numbers) {
  if (num > 0) resultArr.push(num);
}
console.log(resultArr);

// Orijinal stringi değiştirmez
let str = "STRING";
console.log(str.toLowerCase());
console.log(str);
