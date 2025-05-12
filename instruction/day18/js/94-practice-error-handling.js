// DOM Elementleri
const formEl = document.getElementById("formLogin");
const usernameEl = document.getElementById("username");
const passwordEl = document.getElementById("password");

formEl.addEventListener("submit", (e) => {
  // Submit default olarak sayfayı yeniler, bunun önünce geçmek için:
  e.preventDefault(); //=> submit in default davranışını iptal eder.

  const username = usernameEl.value;
  const password = passwordEl.value;

  // Önceden oluşturulmuş olan mesajları silme:
  if (formEl.nextElementSibling.classList.contains("alert")) {
    formEl.nextElementSibling.remove();
  }

  try {
    const trimmedUsername = username.trim();

    if (!trimmedUsername) {
      throw new Error("Username boş bırakılamaz");
    }

    if (!password) {
      throw new Error("Şifre boş bırakılamaz");
    }

    const messageEl = document.createElement("p");
    messageEl.innerText = "Giriş başarılı.";
    messageEl.setAttribute("class", "alert alert-success mt-3");
    formEl.after(messageEl);
  } catch (error) {
    console.log(error);
    const messageEl = document.createElement("p");
    messageEl.innerText = error.message;
    messageEl.setAttribute("class", "alert alert-danger mt-3");
    formEl.after(messageEl);
  }
});
