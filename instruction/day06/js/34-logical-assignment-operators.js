//a += 1 ==> a +1

// a ??= b  ==>  a = a ?? b
// a &&= b  ==>  a = a && b
// a ||= b  ==>  a = a || b 

let a;
let b = 2;

console.log(a ??= b); // 2

let x;
let y = 5;

console.log(x &&= y); // undefined

let m = NaN;
let n = 8;

console.log(m ||= n); // 8