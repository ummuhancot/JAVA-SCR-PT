// DOM Elementleri
const btnStartEl = document.getElementById("start");
const btnClearEl = document.getElementById("clear");
const listEl = document.getElementById("list");

let intervalId;

btnStartEl.addEventListener("click", () => {
  startInterval(100);
});

btnClearEl.addEventListener("click", () => {
  clearInterval(intervalId);
});

// Function
function startInterval(ms) {
  intervalId = setInterval(() => {
    const randomNumber = Math.floor(Math.random() * 1000) + 1000;

    const liEl = document.createElement("li");
    liEl.textContent = randomNumber;
    liEl.setAttribute("class", "list-group-item bg-info text-center");
    listEl.appendChild(liEl);
  }, ms);
}
