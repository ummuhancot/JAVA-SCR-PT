// console.log(1);

let timeoutId = setTimeout(() => {
  console.log("2 saniye içerisinde gözükeceğim - 1");
}, 2000);

let timeoutId2 = setTimeout(() => {
  console.log("2 saniye içerisinde gözükeceğim - 2");
}, 2000);

console.log(timeoutId, timeoutId2);
// clearTimeout ile id'si yazılan setTimeout durdurulabilir:
clearTimeout(timeoutId2);

console.log(2);
let startTimeoutId;

document.getElementById("start").addEventListener("click", () => {
  startTimeoutId = setTimeout(() => {
    console.log("2.5 saniye sonra gözükeceğim.");
  }, 2500);
});

document.getElementById("clear").addEventListener("click", () => {
  clearTimeout(startTimeoutId);
});
