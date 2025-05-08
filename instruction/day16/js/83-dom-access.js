const listEl = document.getElementById("list");
const aboutEl = document.getElementById("about");

// .closest("gidilecekParentElement")
// Hiyerarşik olarak yukarısındaki en yakın elementi getirir.
console.log(aboutEl.closest("li"));
console.log(aboutEl.closest("ul"));
console.log(aboutEl.closest("div"));

console.log(aboutEl.closest("p")); // null
console.log(aboutEl.closest("h1")); // null

// .children
console.log(listEl.children);
console.log(listEl.children[2]);

console.log(aboutEl.children); // HTMLCollection []

// firstElementChild, lastElementChild
console.log(listEl.firstElementChild);
console.log(listEl.lastElementChild);
console.log(listEl.children[0]);
console.log(listEl.children[listEl.children.length - 1]);

// parentElement
console.log(aboutEl.parentElement);
console.log(aboutEl.parentElement.parentElement.parentElement);

// nextElementSibling, lastElementSibling

console.log(listEl.nextElementSibling);
console.log(listEl.previousElementSibling);

// aboutEl'den h2'ye geç
console.log(aboutEl.closest("ul").nextElementSibling);
console.log(aboutEl.closest("div").children[2]);
