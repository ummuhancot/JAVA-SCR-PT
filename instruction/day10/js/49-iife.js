let firstName = "Ali";
let lastName = "Yılmaz";

const myFunction = function () {
  console.log("Hello IIFE");
};

myFunction();

// 1. Yöntem
(function () {
  let firstName = "John";
  let lastName = "Doe";
  console.log(`Benim adım ${firstName} ${lastName}`);
})();

// 2. Yöntem
!(function () {
  console.log("IIFE merhaba");
})();

// 3. Yöntem
(() => {
  console.log("Arrow Function IIFE'den merhaba");
})();
