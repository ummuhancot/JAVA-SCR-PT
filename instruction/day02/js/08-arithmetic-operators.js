let x = 5;
let y = 8;
let z = "15";
// Bu şekilde de yapılabilir:
// let x = 5, y = 8, z = "15";

// TOPLAMA
// JavaScript toplama işlemlerinde string gördüğü andan itibaren diğer değerleri string'e çevirir ve stringleri concatenate eder.

// Number + Number = Number
// Number + String = String
// String + Number = String
// String + String = String

console.log(x + y);
console.log(x + z); // string ve number toplanması durumunda sonuç string çıkacaktır.
console.log(x + y + z);
console.log(z + y + x);
console.log(z + (y + x)); // işlem önceliği tanımlamak için parantez kullanılabilir.

console.log("John" + "Doe"); // String concatenation

// DİĞER İŞEMLER
// String ile number işlemi yapılacağı zaman string number'a çevrilebiliyorsa işlem number'a çevirilip yapılır. Çevrilemiyorsa sonuç NaN çıkar.

// Number * Number = Number
// Number * String => String'in içerisindeki değer sayıya çevrilebilir mi?
// i. Evet => String Number'a çevrilir ve sonuç bir number gelir.
// ii. Hayır => String Number'a çevrilemez ve sonuç NaN gelir.

let word = "Hello";

// ÇIKARMA
console.log("Çıkarma: ", x - z);
console.log("Çıkarma: ", x - word);

// BÖLME
console.log("Bölme: ", x / z);
console.log("Bölme: ", x / word);

// ÇARPMA
console.log("Çarpma: ", x * y); // 40
console.log("Çarpma: ", x * z); // 75 => stringi number'a çevirbiliyorsa number'a çevirir.

console.log("Çarpma: ", x * word); // NaN = Not a Number => Hata değildir, bir değerdir.

let myNan = x * word;
console.log(myNan); // NaN
console.log(typeof myNan); // number

// ÜS ALMA
console.log("Üs alma: ", x ** z);
console.log("Üs alma: ", x ** word); // NaN

// MOD ALMA (MODULUS)
console.log("Mod: ", x % z);
console.log("Mod: ", x % word); // NaN

console.log("String * string", word * word);

// Verilen bir sayının rakamları toplamını bulunuz.
let num = 987;
let unitsDigit;
let sum = 0;

unitsDigit = num % 10; // 7
sum = sum + unitsDigit; // 0 + 7 = 7

num = parseInt(num / 10);
console.log(num);

unitsDigit = num % 10; // 8
sum = sum + unitsDigit; // 7 + 8 = 15
num = parseInt(num / 10);

unitsDigit = num % 10; // 9
sum = sum + unitsDigit; // 15 + 9 = 24
num = parseInt(num / 10);

console.log(sum);
