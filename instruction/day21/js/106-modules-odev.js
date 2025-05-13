//! ÖDEV
const arr = [9, 200, 3];
console.log(arr.sort());
console.log(arr.sort((a, b) => a - b)); // NumberAsc
console.log(arr.sort((a, b) => b - a)); // NumberDesc

const arr2 = ["aa", "ab", "Z", "zz", "Ba", "Ab"];

console.log(arr2.sort());
console.log(arr2.sort((a, b) => a.localeCompare(b))); // StringAsc
console.log(arr2.sort((a, b) => b.localeCompare(a))); // StringDesc
