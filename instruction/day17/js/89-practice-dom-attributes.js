// DOM Element
const usernameEl = document.getElementById("username");
const btnUpdateEl = document.getElementById("btnUpdate");

// Default olarak disabled olacak:
btnUpdateEl.setAttribute("disabled", true);

usernameEl.addEventListener("input", (e) => {
  // console.log(e.target.value);
  // console.log(!e.target.value);

  // İçi boşsa disabled'a dönecek
  if (!e.target.value) {
    btnUpdateEl.setAttribute("disabled", true);
  } else {
    // İçi doluysa disabled kalkacak
    btnUpdateEl.removeAttribute("disabled");
  }
});
