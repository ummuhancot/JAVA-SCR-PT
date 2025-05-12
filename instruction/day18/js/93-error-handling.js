// SyntaxError -  => javaScript bu kodu anlamaz o yüzden tynaxError try catch ile yakalayamaz
// const a-b = 0;
// const x;

// TypeError +
// const a = 5;
// a = 10;

// ReferenceError +
// console.log(m);

const b = 10;

try {
  b = 20;
} catch (error) {
  console.log(error);
} finally {
  console.log("Finally uygulandı.");
}

console.log("İşlemler Tamamlandı.");

// Custom Error

const divison = (a, b) => {
  try {
    if (b === 0) {
      throw new Error("0 ile bölme olmaz!");
    }

    return a / b;
  } catch (error) {
    alert(error);
  } finally {
    console.log("Ben her zamana çalışacağım.");
  }
};

console.log(divison(0, 0));
console.log(divison(1, 0));
