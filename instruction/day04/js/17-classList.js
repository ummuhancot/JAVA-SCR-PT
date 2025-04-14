////DOM Manipülasyon
//DOM Element yukarda ulaşım saglanır
// DOM Element
const h1El = document.querySelector("h1"); //burda 'h1' yazılırsa hata veriyor
let pStyles = document.querySelector("p").classList;

// DOM Manipülasyon
console.log(h1El.classList);
h1El.classList.add("blue");

pStyles.remove("blue");
pStyles.add("green");

pStyles.remove("green");
pStyles.add("red");


// ==========================
const spanEl = document.querySelector(".company");
spanEl.innerHTML = `${h1El.innerText} <sup>&copy;</sup>`;