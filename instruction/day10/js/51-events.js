function sayHello() {
  alert("Hello");
}

// 2. Yöntem
const btn2El = document.querySelector("#btn2");
console.log(btn2El);
btn2El.onclick = sayHello;

// 2. Yöntem varyasyon:
btn2El.onclick = function () {
  alert("Hello 2");
};

// 3. Yöntem
const btn3El = document.querySelector("#btn3");
btn3El.addEventListener("click", function () {
  alert("Event listener'den merhaba");
});

// 3. Yöntem 1. varyasyon:
btn3El.addEventListener("click", sayHello);

// 3. Yöntem 2. varyasyon:
btn3El.addEventListener("click", () => {
  alert("Arrow function ile yazıldım.");
});

// Diğer eventler
const btn4El = document.querySelector("#btn4");
btn4El.addEventListener("dblclick", () => {
  btn4El.style.backgroundColor = "blue";
});

const input1El = document.querySelector("#input1");
const input2El = document.querySelector("#input2");

input1El.addEventListener("input", () => {
  console.log("Harfe basıldı");
});

input2El.addEventListener("change", () => {
  console.log("Değişiklik yapıldı");
});
