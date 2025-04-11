function changeMode(){

   
    // let mode = document.querySelector("body").classList.contains("bg-dark"); //contains bg-dark var mı yok mu ona bakıyor

   


  let bodyEl = document.querySelector("body");
  let btnEl = document.querySelector("button");
  let iconEl = document.querySelector("button > i");
  let mode = bodyEl.classList.contains("bg-dark");

  if (mode) {
    // Mode true ise light theme yapılacak
    bodyEl.classList.remove("bg-dark");
    bodyEl.classList.remove("text-light");
    btnEl.classList.remove("btn-light");
    btnEl.classList.add("btn-dark");
    iconEl.classList.remove("fa-sun");
    iconEl.classList.add("fa-moon");
  } else {
    // Mode false ise dark theme yapılacak
    bodyEl.classList.add("bg-dark");
    bodyEl.classList.add("text-light");
    btnEl.classList.remove("btn-dark");
    btnEl.classList.add("btn-light");
    // Icon değiştirme
    iconEl.classList.remove("fa-moon");
    iconEl.classList.add("fa-sun");
  }


}