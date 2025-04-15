function calculate() {
  // Başlangıç
  let num = +document.querySelector("#num").value;
  let sum = 0;

  // Koşul
  while (num > 0) {
    let lastDigit = num % 10;

    sum += lastDigit;

    // Değişim
    // Ondalıklı sayılardan kurtulmak için uygulanabilecek metodlar:
    // num = Math.floor(num / 10);
    num = parseInt(num / 10);
  }

  document.querySelector("#result").innerText = `Yazılan sayının rakamları toplamı ${sum}'dır`;
  
}
