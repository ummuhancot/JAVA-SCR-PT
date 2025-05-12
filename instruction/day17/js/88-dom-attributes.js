// DOM Elementleri
const usernameEl = document.getElementById("username");
const btnEl = document.querySelector(".btn");

// .getAttribute(attributeİsmi)
console.log(usernameEl.getAttribute("type"));
console.log(usernameEl.getAttribute("class"));
console.log(btnEl.getAttribute("title"));

// setAttribute(attributeİsmi, değer)
// Kendisinden önceki tüm attributeları silip yazılan attribute'u ekler.
usernameEl.setAttribute("type", "password");
usernameEl.setAttribute("placeholder", "Şifrenizi giriniz.");

btnEl.setAttribute("title", "İleri");
btnEl.setAttribute("class", " btn-primary mt-3 p-3");

console.log(usernameEl);
console.log(btnEl);

// .removeAttribute(attributeİsmi)
usernameEl.removeAttribute("class");
console.log(usernameEl);

// attributes
console.log(btnEl.attributes);

// Örnek

btnEl.addEventListener("click", () => {
  console.log("İleri basıldı");
  // Input text'ten passworda dönecek, placeholder düzenlenecek

  usernameEl.setAttribute("placeholder", "Şifrenizi giriniz.");
  usernameEl.setAttribute("type", "password");
  usernameEl.value = "";

  // Button innerText ve title değişecek

  btnEl.innerText = "Gönder";
  btnEl.setAttribute("title", "Formu gönder");
});
