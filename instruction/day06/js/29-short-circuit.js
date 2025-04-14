
function showNum() {
  let num = document.querySelector("input").value;

  // if(num < 0 || num > 100){
  //     alert("Lütfen 0'dan 100'e kadar bir sayı giriniz...");
        //return;//bu fonksiyonun çalışmasını durdurur.
  //     document.querySelector("p").innerText = "";
  // } else{
  //     document.querySelector("p").innerText = num;
  // }
  //ternary operator (kısa devre) ile yazılmış hali
  // (koşul) ? (doğruysa yapılacak işlem) : (yanlışsa yapılacak işlem)
  // (num > 0 && num < 100) ? alert("Lütfen 0 ile 100 arasında bir sayı giriniz...") : document.querySelector("p").innerText = num;

  (num < 0 || num > 100) &&
    alert("Lütfen 0'dan 100'e kadar bir sayı giriniz..."); // if block
  num < 0 || num > 100 || (document.querySelector("p").innerText = num); // else block

  //&& ve || operatörleri ile kısa devre yaparak kodu daha kısa yazabiliriz.
  //&& operatörü ile kısa devre yaparak kodu daha kısa yazabiliriz.
  //|| operatörü ile kısa devre yaparak kodu daha kısa yazabiliriz.
}