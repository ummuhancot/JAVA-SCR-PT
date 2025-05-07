const numbers = [1, 3, 5, 7];

// Bir arrayin tüm elemanları ile bir işlem yapmak istediğimizde şu ana kadar aşağıdaki formülü uyguluyorduk:
let total = 0;
numbers.forEach((item) => (total += item));
console.log(total);

// Yukarıdaki işlemi daha hızlı ve tek bir satırda yapabilmek için reduce kullanabiliriz:
const result = numbers.reduce((total, item) => total + item, 0);
// Reduce ilk param olarak toplam değeri tutar. Bu değer her iterationda işleme girerek tekrar ettirilir.
// İkinci param item, üçüncü param index, dördüncü param ise array'in kendisidir.
console.log(result);

console.log("------------");

const result2 = numbers.reduce((acc, item, index, array) => {
  console.log("Accumulator: ", acc);
  console.log("Item: ", item);
  console.log("Index: ", index);
  console.log("Array: ", array);

  return acc + item;
  // Callback fonksiyonundan sonra kullanılan ve virgülle ayrılan sayı acc'nin veya total değerinin ilk değeridir. Bu değer girilmezse reduce, array'in ilk item'ını bu değer olarak kabul eder.
}, 0);

console.log(result2);

const multiplied = numbers.reduce((acc, item) => acc * item, 1);
console.log(multiplied);

// Koordinatlar dizisindeki değerlerin toplamını, ara değerleri de göstererek yazınız:
const coordinates = [-100, 150, -32, 43, -20];

const sumOfCoordinates = coordinates.reduce((total, item) => {
  console.log("Ara değer: ", total);
  return total + item;
});
console.log("Son değer: ", sumOfCoordinates);
console.log("Ortalama: ", sumOfCoordinates / coordinates.length);