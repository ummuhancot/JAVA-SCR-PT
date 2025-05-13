// Bir file içerisinde sınırsız export kullanılabilir:
// export => import { identifierAdı } ...
// export {identifierAdı} => import { identifierAdı } ...

// Bir file içerisinde YALNIZCA BİR KEZ export default kullanılabilir:
// export default => import istediğinizAd ... (Süslü parantez yok, identifier ile aynı isim yazma zorunluluğu yok)

import { sum } from "./106-sum.js";
import anotherFile, { printInfo, PI } from "./106-multiply.js";

// DOM Elementleri
const firstNumberEl = document.getElementById("num1");
const secondNumberEl = document.getElementById("num2");
const btnSumEl = document.getElementById("btnSum");
const btnMultiplyEl = document.getElementById("btnMultiply");
const outputEl = document.querySelector("p");

// Event
btnSumEl.addEventListener("click", () => {
  const firstNumber = +firstNumberEl.value;
  const secondNumber = +secondNumberEl.value;

  const sumValue = sum(firstNumber, secondNumber);

  outputEl.innerText = `İşlemin Sonucu: ${sumValue}`;
});

btnMultiplyEl.addEventListener("click", () => {
  const firstNumber = +firstNumberEl.value;
  const secondNumber = +secondNumberEl.value;

  const multiplyValue = anotherFile(firstNumber, secondNumber);

  outputEl.innerText = `İşlemin Sonucu: ${multiplyValue}`;
});

printInfo("Hello World");
console.log(PI);
