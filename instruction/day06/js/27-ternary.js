let number = -10;

// if(number > 0){
//     console.log("Pozitif");
// } else {
//     console.log("Negatif");
// }

//ternary operator
//condition ? true : false
//nested ternary operator
//condition ? true : condition ? true : false
number > 0 ? console.log("Pozitif") : console.log("Negatif");

function calculate() {
  const inputEl = document.querySelector("#salary");
  const resultEl = document.querySelector("#result");
  let salary = +inputEl.value;

  resultEl.innerText =
    salary > 20000 ? "İyi" : salary > 13000 ? "Normal" : "Kötü";

  // salary > 1300 ? resultEl.classList.toggle("yesil") : resultEl.classList.toggle("kirmizi");

  resultEl.classList.toggle(salary > 1300 ? "yesil" : "kirmizi");

  // if(salary > 13000){
  //     resultEl.innerText = "Normal";
  //     resultEl.classList.remove("kirmizi");
  //     resultEl.classList.add("yesil");
  // } else {
  //     resultEl.innerText = "Az";
  //     resultEl.classList.remove("yesil");
  //     resultEl.classList.add("kirmizi");
  // }
}
