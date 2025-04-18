// JavaScript değişken, sabit ve fonksiyon görünce yukarıya taşır. Buna hoisting denir. Hoisting yalnızca declaration için geçerlidir. Teorik olarak let ve const hoist edilir. Ancak pratikte ikiside atanmadan kullanılamayacağı için ReferenceError verir.

console.log(a); // undefined
// ^(aşada oluşturuldu yokarıda cağrıldı.)
var a = 10;

var x; // declaration
x = 10; // initialization

myFunction();
// ^(aşada oluşturuldu yokarıda cağrıldı.)
function myFunction() {
  console.log("myFunction çalıştırıldı.");
}

// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;

// console.log(c); // ReferenceError: c is not defined

// arrowFunction(); // ReferenceError: Cannot access 'arrowFunction' before initialization

const arrowFunction = () => {
  console.log("Arrow Function çalıştırıldı.");
};
