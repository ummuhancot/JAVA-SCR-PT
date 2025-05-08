const btnContainer = document.querySelector(".btn-container");
const h1El = document.querySelector("h1");

btnContainer.addEventListener("click", (e) => {
  // console.log(e.target.textContent);

  switch (e.target.textContent.toLowerCase()) {
    case "add":
      console.log("Add basıldı");
      h1El.classList.add("blue");
      break;
    case "remove":
      console.log("Remove basıldı");
      h1El.classList.remove("blue");
      break;
    case "toggle":
      console.log("Toggle basıldı");
      h1El.classList.toggle("red");
      break;
    case "replace":
      console.log("Replace basıldı");
      h1El.classList.replace("red", "cyan");
      break;
  }

  if (h1El.classList.contains("cyan")) {
    alert("H1 Elementi Cyan rengindedir.");
  }
});
