// 1- Data'yı al:
import { countries } from "../../day14/data/countries.js";

// 2- DOM Elemanlarını al
const countrySelectEl = document.getElementById("country");
const listEl = document.getElementById("list");

// 4a- Hangi data'nın seçildiğini bul:
countrySelectEl.addEventListener("change", (event) => {
  const selectedCountry = countries.filter(
    (country) => country?.ccn3 === event.target.value
  );

  console.log(selectedCountry);
  populateList(selectedCountry);
});

// 4b- Filterelenmiş data hakkında bilgileri listeye yerleştirmek için fonksiyon oluştur:
function populateList(array) {
  // Validasyon:
  if (!Array.isArray(array) || array.length === 0) {
    alert("Seçilen ülke getirilemedi.");
    return;
  }

  array.forEach((item) => {
    const liEl = `<li class="list-group-item"> ${item?.latlng} - ${item?.region} - ${item?.flag}  </li>`;
    listEl.innerHTML = liEl;
  });
}

// 3- Select elementine ülke datalarını yerleştirmek için fonksiyon oluştur
function populateSelect(array) {
  // Validasyon:
  if (!Array.isArray(array) || array.length === 0) {
    alert("Input geçersiz.");
    return;
  }

  // Burada kaldık:
  const optionElements = array
    .map(
      (item) => `
    <option value=${item?.ccn3} >${
        item?.name?.common || item?.name?.official
      }</option>
    `
    )
    .join("");

  countrySelectEl.innerHTML = optionElements;
}

populateSelect(countries);
