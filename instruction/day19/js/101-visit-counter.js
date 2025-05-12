// DOM Element
const counterEl = document.getElementById("visit");

function counterVisit() {
  let visits = localStorage.getItem("visits");

  visits = visits ? +visits + 1 : 1;

  localStorage.setItem("visits", visits);

  // console.log(visits);

  counterEl.textContent = visits;
}

counterVisit();
