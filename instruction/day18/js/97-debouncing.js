import { countries } from "../../day14/data/countries.js";

// DOM Elementleri
const searchEl = document.getElementById("query");
const listEl = document.querySelector("ul");

let timeoutId;

searchEl.addEventListener("input", (e) => {
  const query = e.target.value;

  // Daha önceden başlamış olan bir timeout varsa durdurmak için:
  if (timeoutId) clearTimeout(timeoutId);

  // Yeni timeout oluşturup belirli bir süre içerisinde çalıştırılmasını sağlamak için:
  timeoutId = setTimeout(() => {
    populateList(filterData(query));
    console.log("Query kac defa çalıştı: " ,query);
  }, 3000);

  console.log(timeoutId);
});

// Function
function populateList(arr) {
  // Daha önceden list elemanı varsa boşaltmak içim
  listEl.innerHTML = "";

  // Her item'i tek tek almak için:
  arr.forEach((item) => {
    // Item içerisindeki ülke ismi kısmını almak için
    let countryName = item?.name?.official;

    // Listenin içerisine eklenecek liste elemanlarını oluşturmak:
    const liEl = document.createElement("li");
    liEl.innerText = countryName;
    liEl.setAttribute("class", "list-group-item bg-black text-center");
    listEl.appendChild(liEl);
  });
}

function filterData(q) {
  if (!q) {
    return countries;
  }

  return countries.filter((country) =>
    country?.name?.official.toLowerCase().startsWith(q.toLowerCase())
  );
}

// populateList(countries);
