//Aritmetik operatörler (-)
//===============================
const num1 = 2025;
const num2 = 1980;

console.log("Yaş: " + num1 - num2); // NaN
console.log("Yaş: " + (num1 - num2)); // Yaş: 45
console.log(`Yaş: ${num1 - num2}`);
//=============================== // Yaş: 45
//Aritmetik operatörler (*, **)
//.toFixed()=> noktadan sonra kaç basamak göstermek istiyorsunuz onu yazarsınız
const pi = 3.14;
let r = 5;
let alan = pi * r ** 2;
let cevre = 2 * pi * r;
console.log(alan, cevre.toFixed(2));
console.log("Alan: " + alan + " Çevre: " + cevre.toFixed(2));
console.log(`Çemberin alanı ${alan}. Çevresi ise ${cevre.toFixed(2)}cm'dir`);

console.log(Math.pow(5, 2));
console.log(5 ** 2);
//===============================
//Aritmetik operatörler (++, --, %)

// Eğer ++ veya -- değişkenden önce konulduysa 
// i. aritmetik işlem yapılır 
// ii. atama işlemi yapılır.

let a = 3;
let b = ++a;
let c = --b;

console.log(a, b, c); // 4 3 3

// Eğer ++ veya -- değişlenden sonra konulduysa 
// i. atama işlemi yapılır 
// ii. aritmetik işelm yapılr

let x = 5;
let y = x++; // y = x => x = x + 1
let z = x--; // z = x => x = x - 1

console.log(x, y, z); // 5 5 6

let number = 10;

number -= 5;
console.log(number);
number += 10;
console.log(number);
number *= 2;
console.log(number);
number /= 6;
console.log(number);
number **= 2;
console.log(number);
number %= 3;
console.log(number);
