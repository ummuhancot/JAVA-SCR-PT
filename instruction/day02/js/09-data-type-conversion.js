//======= Number olarak cevirme ========\\
let indirim = "100";
console.log(typeof Number(indirim));

let para = 100;
let vergi = 10;
console.log(para + vergi); //10010
console.log(Number(para) + vergi); //110

let isim = "Jhon";
console.log(isim + vergi); //John10
console.log(Number(isim) + vergi) //NaN

// Eğer bir data tipini number'a çevirmek istiyorsak Number() veya + işaretini kullanabilir
console.log(+para +vergi); //110

//Number yapınca "100" burdaki tırnagı atıyor ve 100 olarak algılıyor.
//Eeee varsa ee yi atıyor bir sayı olmayınca NaN veriyor. 

// //neye cevirmek istiyorsak onun parantezine almalıyız 
// String()
// Array()
// Boolean() gibi.