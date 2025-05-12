// DOM Element
const inputEl = document.getElementById("input");
const btnAddEl = document.getElementById("btnAdd");
const listEl = document.querySelector("ul");

// .createElement(tagİsmi)

const liEl = document.createElement("li");
console.log(liEl);

const pEl = document.createElement("p");
console.log(pEl);

// parent.appendChild(child)

liEl.classList.add("list-group-item");
liEl.textContent = "1. Item";
listEl.appendChild(liEl);

// append(element/metin, element/metin ...)

const liEl2 = document.createElement("li");
liEl2.textContent = "2. Item";
liEl2.classList.add("list-group-item");

listEl.append("<li class='list-group-item'>Başka bir element</li>", liEl2);

// prepend(element/metin, element/metin ...)

const liEl3 = document.createElement("li");
liEl3.textContent = "3. Item";
liEl3.classList.add("list-group-item");

listEl.prepend("Başa eklenecek", liEl3);

// remove()

listEl.children[0].remove();
listEl.children[0].remove();
listEl.children[0].remove();
listEl.textContent = "";

// Örnek
btnAddEl.addEventListener("click", () => {
  const input = inputEl.value;

  const liEl = document.createElement("li");
  liEl.textContent = input;
  liEl.setAttribute("class", "list-group-item bg-info");
  // liEl.classList.add("list-group-item", "bg-info")

  console.log(liEl);

  listEl.prepend(liEl);
});
