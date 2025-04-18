// ============ DOM Elementleri ============
const inputEl = document.querySelector("#input");
const startBtnEl = document.querySelector("#start");
const guessBtnEl = document.querySelector("#guess");
const resultEl = document.querySelector("#result");

//inputEl.value;//bir kere kullanılacaksa value ile alıyırız. ama bir fazla kullancamız icin aşadaki yol.

// ============ Değişken / Sabit ============
let randomNumber = 0;
const minRange = 1;
const maxRange = 100;
const totalShots = 10;//oyuncunun toplam hak sayısı.
let remainingShots = totalShots;

// ============ Functions / Events ============
// const generateRandomNumber = (min, max) => {
//     // Math.random() 0 ile 1 arasında rastgele bir sayı üretir.
//     // Math.floor() ise bir sayıyı aşağıya yuvarlar.
//     return Math.floor(Math.random() * (max - min + 1) + min);
//     //math.floor değerelir aşağıya yuvarlar.
// }
//          ^
//yukarıda diğer kullanım şekli var.

const generateRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// console.log(Math.random()); // [0, 1)
function start(){

  //Rastgele numara atamak:
  randomNumber = generateRandomNumber(minRange, maxRange);
  //console.log(randumNumber); // 1 ile 100 arasında rastgele bir sayı üretildi.
  //oyun yeniden başlatıldığında kalan hak sayısını sıfırla:
  inputEl.value = ""; // inputEl içerisini boşaltır.
  inputEl.focus(); // elemente focus (odaklanmasını) sağla.
  guessBtnEl.classList.remove("d-none"); // tahmin butonunu göster.
  startBtnEl.innerText = "Tekrar oyna";
  resultEl.innerText = "";
}
// console.log(generateRandomNumber(1, 100)); // 1 ile 100 arasında rastgele bir sayı üretildi.

function guess() {
  const guessNumber = +inputEl.value;

  // Validasyon
  if (
    !guessNumber ||
    isNaN(guessNumber) ||
    guessNumber < minRange ||
    guessNumber > maxRange
  ) {
    resultEl.innerText = `Lütfen ${minRange} ile ${maxRange} arasında bir sayı giriniz.`;
    resultEl.classList.add("alert", "alert-danger");
    return;
  }

  console.log(randomNumber);

  if (guessNumber === randomNumber) {
    resultEl.innerText = "🏆🏆🏆 Kazandınız!!! 🏆🏆🏆";
    resultEl.classList.remove("alert", "alert-danger");
    resultEl.classList.add("alert", "alert-success");
    reset();
  } else if (guessNumber > randomNumber) {
    resultEl.innerText = "⏬ Daha düşük bir sayı dene ⏬";
    resultEl.classList.remove("alert", "alert-danger");
    resultEl.classList.add("alert", "alert-warning");
    remainingShots--;
  } else {
    resultEl.innerText = "⏫ Daha yüksek bir sayı dene ⏫";
    resultEl.classList.remove("alert", "alert-danger");
    resultEl.classList.add("alert", "alert-warning");
    remainingShots--;
  }

  if (remainingShots === 0) {
    resultEl.innerText = "Tüm haklarını kullandın. Tekrar oynamak ister misin?";
    reset();
  }

  inputEl.focus();
  inputEl.value = "";
}

function reset() {
  guessBtnEl.classList.add("d-none");
  startBtnEl.innerText = "Oyunu Başlat";
  remainingShots = totalShots;
}


