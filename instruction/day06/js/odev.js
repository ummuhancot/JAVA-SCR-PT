// Input alanını seç
const inputField = document.getElementById("num");

// Buton değerlerini input alanına ekler
function appendValue(value) {
  if (inputField.value === "0") {
    inputField.value = value; // Eğer input sıfırsa, yeni değeri yaz
  } else {
    inputField.value += value; // Mevcut değerin sonuna ekle
  }
}

// Hesaplama işlemini gerçekleştirir
function calculate() {
  try {
    inputField.value = eval(inputField.value); // Matematiksel ifadeyi hesapla
  } catch (error) {
    inputField.value = "Hata"; // Hatalı giriş durumunda
  }
}

// Input alanını temizler
function clearInput() {
  inputField.value = "0"; // Input alanını sıfırla
}
