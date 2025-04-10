let inputEl = document.querySelector("input");
let welcomeEl = document.querySelector("#welcome");
// input'un innerText özelliği yok
// inputEl.innerText = "Merhaba";
// console.log(inputEl.innerText);
let name = inputEl.value;
welcomeEl.innerText = `Merhaba ${name}`;
