// DOM Elementleri
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const spanEls = document.getElementsByClassName("colon");
const clockEl = document.querySelector(".clock");

// Global
let intervalId;

// Events
clockEl.addEventListener("click", () => {
  clearInterval(intervalId);
});

// Functions

function updateClock() {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();
  const currentSecond = currentTime.getSeconds();

  console.log(currentHour, currentMinute, currentSecond);

  // TODO tek sayı gösterilmesinin önüne geç
  //   padStart stringlerde ilk argüman kadar karakter bulunmazsa bu karakter sayısına kadar ikinci argümanı stringin başına ekler
  hourEl.textContent = currentHour.toString().padStart(2, "0");
  minuteEl.textContent = currentMinute.toString().padStart(2, "0");
  secondEl.textContent = String(currentSecond).padStart(2, "0");

  //HTMLColons dan Arrey'e çevirdik forEach ile döngüye alabilmek için.
  // : => kısmının acılıp kapanması için classList.toggle ile hidden class'ını ekleyip çıkartıyoruz.
  const colons = Array.from(spanEls);
  colons.forEach((colon) => colon.classList.toggle("hidden"));
}

updateClock();

intervalId = setInterval(() => {
  updateClock();
}, 1000);
