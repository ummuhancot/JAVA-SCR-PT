// ====== Tip Dönüşümleri ========

// Number'a Dönüştürme
let para = "100";
let vergi = 10;

console.log(para + vergi); // 10010
console.log(Number(para) + vergi); // 110

let isim = "John";
console.log(isim + vergi); // John10
console.log(Number(isim) + vergi); // NaN

// Eğer bir data tipini number'a çevirmek istiyorsak Number() veya + işaretini kullanabilir.

console.log(+para + vergi);

//Number yapınca "100" burdaki tırnagı atıyor ve 100 olarak algılıyor.
//Eeee varsa ee yi atıyor bir sayı olmayınca NaN veriyor. 

// //neye cevirmek istiyorsak onun parantezine almalıyız 
// String()
// Array()
// Boolean() gibi.

// String'e Dönüştürme
let barcodeNumber = 9000;
let extension = 123;

console.log(String(barcodeNumber) + extension);
// Eğer bir data tipini string'e çevirmek istiyorsak String() veya .toString() kullanılabilir.

console.log("" + barcodeNumber);

let barcodeString = barcodeNumber.toString();
console.log(barcodeString + extension);

// BigInt'e Dönüştürme
let x = 150n;
let y = 5;
console.log(x + BigInt(y));

// Boolean'a Dönüştürme

// 0, 0n, undefined, null, NaN ve "" Boolean'a dönüştürüldüğünde false getirir. Diğer tüm değerler true getirir.

let number = 10;
console.log(Boolean(number)); // true
number -10;
console.log(Boolean(number)); // true
number = "Hello";
console.log(Boolean(number)); // true

let myObj = {};
console.log("Boş obje: ", (Boolean(myObj))); // true
let myArr = [];
console.log("Boş array: ", Boolean(myArr)); // true

number = 0;
console.log(Boolean(number)); // false
number = "";
console.log(Boolean(number)); // false
number = null;
console.log(Boolean(number)); // false

let aVariable;
console.log(Boolean(aVariable)); // false
console.log(Boolean(3-3)); // false
console.log(Boolean(NaN)); // false