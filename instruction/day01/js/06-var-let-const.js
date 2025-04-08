//======== VARIABLES (DEĞİŞKENLER) =========
//VAR
//var x = 1;
var x; //bu şekilde oluşturulabilir değişken
console.log(x);

x = 5; //tanımlama yapılabilir.
console.log(x);

x = 7; //yeniden tanımlama yapılabilir.
console.log(x);

//varı kullanmama sebebimiz var ile tanımlanan değişkenler tekrar tanımlanabiliyor.
//hata alma riski var.
var x = "John";
console.log(x);

//var ile tanımlanan değişkenler tekrar tanımlanabiliyor.
var x = true;
console.log(x);

//LET
let x;
x = 2;
console.log(x);

x = 5;
console.log(x);

//x = false ; //tanımlanan değişken tekrar tanımlanamıyor

let y = 2;
//let y = 3;//hata verir tekrar atama yapamazsın.
console.log(y);
let y2 = 2; //bu şekilde verebilirsiniz.
console.log(y2);

// ===== CONSTANTS (SABİTLER) =====
//CONST
const z = 3; //yazıldığında tanımlanması gerekir.sabittir.
//const z1; bu şekilde yazılmaz yani

//z=10; Yeniden tanımlama yapamazsınız.

const kdv = 1.18;

/* //////HOCANIN YAZDIĞI KISIM/////// */
// ===== VARIABLES (DEĞİŞKENLER) =====
// VAR
var x;
console.log(x);

x = 5; // Tanımlama yapılabilir. 
console.log(x); // 5

x = 7 // Yeniden tanımlama yapılabilir.
console.log(x); // 7

// var ile tanımlanan değişkenler tekrar tanımlanabilir.
var x = "John"; 
console.log(x); // John
var x = true;
console.log(x); // true

// LET
let y1;
console.log("y: ",y); // undefined
y = 2;
console.log(y); // 2

y = 5;
console.log(y); // 5

// let y  = false; Tanımlanan değişken tekrar tanımlanamaz.

// ===== CONSTANTS (SABİTLER) =====
// CONST
const z1 = 8; // yazıldığında tanımlanması gerekir.
// z = 10; Yeniden tanımlama yapılmaz.

const kdv1 = 1.18;