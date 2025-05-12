// DOM Element
const offcanvas = document.getElementById("offcanvas");
const btnAccept = document.getElementById("accept");
const btnClose = document.getElementById("close");

let isPrivacyPolicyAccepted = localStorage.getItem("privacyPolicy");
console.log(isPrivacyPolicyAccepted);

if (isPrivacyPolicyAccepted) {
  offcanvas.remove();
}

// Event
btnAccept.addEventListener("click", () => {
  console.log("object");
  localStorage.setItem("privacyPolicy", true);
  offcanvas.remove();
});

btnClose.addEventListener("click", () => {
  offcanvas.classList.remove("show");

  setTimeout(() => {
    offcanvas.classList.add("show");
    console.log("object");
  }, 3000);
});
