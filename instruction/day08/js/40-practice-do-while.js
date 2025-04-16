// Eğer elementi alıyorsak global'e yazabiliriz. Ancak kullanıcının yapacağı bir değişikliği (input) düzgün bir şekilde almak istiyorsak ilgili alana yazmamız lazım.
let numberEl = document.querySelector("#number");
let resultEl = document.querySelector("#result");

// Fonksiyonu oluştur.
// Girilen değeri al.
// Sonucu atayacak değişkeni oluştur.
// Edge case varsa buna uygun validasyon yap

function calculate() {
  let number = +numberEl.value;
  let multiplication = 1;

  if (number === 0) {
    resultEl.innerText = `${number}! sonucu: 1`;
    // Fonksiyonu durdurur.
    return;
  }

  // negatif sayı girilmesi, tam olmayan sayı girilmesi için validasyon
  if (number > 0 && Number.isInteger(number)) {
    // Faktöriyeli döndür:
    do {
      multiplication = number * multiplication;
      number--; // number = number - 1
    } while (number > 0);

    resultEl.innerText = `${numberEl.value}! sonucu: ${multiplication}`;
  } else {
    resultEl.innerText = `Lütfen geçerli bir sayı giriniz.`;
  }
}
