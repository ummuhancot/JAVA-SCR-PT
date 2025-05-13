// DOM Element
const btnConfirmEl = document.getElementById("btnConfirm");
const resultEl = document.getElementById("result");

// Event
btnConfirmEl.addEventListener("click", () => {
  confirmAsync("Kabul etmek istiyor musunuz?")
    .then((res) => {
      console.log(res);
      showResult("", res);
    })
    .catch((err) => {
      console.log(err);
      showResult("error", err);
    });
});

// Function
const confirmAsync = (message) => {
  // Normalde confirm sync çalışır bunu async'e çevirmek için setTimeout ve promise ile kullanıyoruz.

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = confirm(message);

      if (result) {
        resolve("Başarıyla kabul edildi!");
      } else {
        reject("Kabul etmekten vazgeçildi.");
      }
    }, 1000);
  });
};

function showResult(status, message) {
  resultEl.innerHTML = "";
  resultEl.innerText = message;

  resultEl.setAttribute(
    "class",
    `alert mt-3 ${status === "error" ? "alert-danger" : "alert-success"}`
  );
}
