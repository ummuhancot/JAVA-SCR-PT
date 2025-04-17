// Declaration Yöntemi

declarationFunc(); // function declaration tanımlandığı satırın üstüne çağırılır. Buna hoisting özelliği denir.

function declarationFunc() {
  console.log("Bu function declaration olarak oluşturulmuştur.");
}

declarationFunc();

// Expression Yöntemi

// expressionFunc(); // ReferenceError: Cannot access 'expressionFunc' before initialization

const expressionFunc = function () {
  console.log("Bu function expression olarak oluşturulmuştur.");
};

expressionFunc();

// Arrow Function

// arrowFunc(); // ReferenceError: Cannot access 'arrowFunc' before initialization

const arrowFunc = () => {
  console.log("Bu function arrow olarak oluşturulmuştur.");
};

arrowFunc();

// const arrowFunc2 = (parametre) => {
//     return parametre;
// };

// Tek satırda ve süslü parantez kullanılmadan yazılan arrow function'lar otomatik olarak return kullanacaktır.
const arrowFunc2 = (parametre) => parametre; // burada parametre return edilecektir.

const arg = arrowFunc2(1);
console.log(arg);

// İki sayının toplamını döndüren fonksiyon yazınız.

function sum(a, b) {
  return a + b;
}

console.log(sum(12, 15));

const sum2 = function (a, b) {
  return a + b;
};

console.log(sum2(10, 20));

const sum3 = (a, b) => {
  return a + b;
};

console.log(sum3(1, 2));

const sum4 = (a, b) => a + b;

console.log(sum4(3, 4));
