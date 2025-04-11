//Comparison Operators
let x = 50;
let y = "50";
let z = 100;
let a = 50;
console.log(x == y); // true => değerelere bakıp karşılaştırma yapar. Stringi number'a çevirir.
console.log(x == z); // false
console.log(x === z); // false => çünkü hem data tipine hem de değere bakar
console.log(typeof x, typeof y);

console.log(a == x); // true => hem data tipi hem de değer eşittir.
console.log(typeof a, typeof x);

console.log(x != y); // false => ikisinin de değerine bakar eğer eşitse false verir, değilse true verir
console.log(x != z); // true

console.log(x !== y); // true
console.log(a !== x); // false
 
console.log("---------------");

//number - number karşılaştırmaları 
console.log(100 > 50); // true
console.log(100 < 50); // false
console.log(50 >= 50); // true

//sayıya cevire biliyorsa çeviriyor.
console.log(50 > "40"); // true

// String Number karşılaştırmaları eğer string number'a NaN olarak çevriliyorsa karşılaştırma her zaman false değeri verir.
console.log(1 < "elma"); // false
console.log(1 > "elma"); // false
console.log(1 == "elma"); // false

// String - String Karşılaşırmaları
console.log("9" > "1000"); // true
console.log("1000000" > "9"); // false

console.log("elma" > "armut"); // true => ASCII değerlerine bakar.
//string - string karşılaştırmaları
console.log("10000" > "90");//false(ilk harfine bakıyor 1 ve 9 bir kücük diyor false veriyor)
console.log("10000" > "10");//true
