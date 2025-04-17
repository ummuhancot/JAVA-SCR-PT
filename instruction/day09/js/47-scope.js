// Global Scope
// Farklı yerlerden ulaşılabildiği için tercih edilir.
let num = 5;

console.log("Global Scope", num);

// Function Scope
function myFunc() {
  console.log("Function Scope", num);

  let functionScope = "Ben function scope değişkeniyim.";
  console.log(functionScope);
}

myFunc();
// console.log(functionScope); // ReferenceError: functionScope is not defined

// Block Scope
if (true) {
  console.log("Block scope", num);

  let blockScope = "Ben block scope değişkeniyim.";
  console.log(blockScope);
}

// console.log(blockScope); // ReferenceError: blockScope is not defined

// Global vs Function

let sayi = 10;
let sayi2 = 20;
let sayi3 = 30;

function fonk() {
  // Aynı isimli değişlenler hem global'de hem de function scope'ta kullanıldıysa function scope öncelikli olarak kendi scope'undaki değişken değerlerini kullanır. Eğer karşılık gelen değişken function scope'ta tanımlanmadıysa global scope'taki değeri alır.
  let sayi = 1;
  let sayi2 = 2;

  return sayi + sayi2 + sayi3;
}

let sayilar = fonk();
console.log("Sayılar: ", sayilar); // 3
console.log(sayi + sayi2); // 30
console.log(sayi); // 10;

// Block Scope Farkı

let a = "a";

function fonk1() {
  let b = "b";

  if (true) {
    let c = "c";
  }

  console.log(a);
  console.log(b);
  //   console.log(c); // ReferenceError: c is not defined
}

console.log(a);
// console.log(b); // ReferenceError: b is not defined
// console.log(c); // ReferenceError: c is not defined

fonk1();

function fonk2() {
  if (true) {
    let word = "let";
    var myVar = "var";
  }

  // var'lar block scope tanımazlar
  console.log(myVar);

  var myVar2 = "var2";
}

fonk2();
