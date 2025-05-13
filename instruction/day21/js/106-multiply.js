export default function multiply(a, b) {
  return a * b;
}
//* default export ise süslü parantez yok import ile cağırma yapılırken
//* export ise süslü parantez var import ile cağrıldığında 

//örnekler

function printInfo(str) {
  console.log(str);
}

export const PI = 3.14;

export { printInfo };

// ? export default function anotherFunction(){
//     console.log("Hello");
//}
// ? sadece bir tane default export olabilir

export const expression = function () {};

export const arrow = () => {};
