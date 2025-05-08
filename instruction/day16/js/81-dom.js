//DOM css düzenlemeleri
console.log(document.querySelector("h1"));
document.querySelector("h1").style.color = "red";
document.querySelector("h1").style.textAlign = "center";

// getElementById("id")
const firstPara = document.getElementById("first");
console.log(firstPara);
console.log(firstPara === document.querySelector("#first")); // true

// getElementsByTagName("tagName")
const allPara = document.getElementsByTagName("p");
console.log(allPara);
console.log(allPara[2]);

// allPara.map((item) => item) TypeError

// HTMLCollection => Array çevirme
const allParaArr = Array.from(allPara);
console.log(allParaArr);
allParaArr.map((item) => item);

// getElementsByClassName("class")
const lastPara = document.getElementsByClassName("last");
console.log(lastPara);
console.log(lastPara[0]);

const lastParaArr = Array.from(lastPara);
console.log(lastParaArr);
