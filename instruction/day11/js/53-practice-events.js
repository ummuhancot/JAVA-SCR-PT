//* === DOM Elementleri ===
const midtermEl = document.querySelector("#midterm");
const finalEl = document.querySelector("#final");
const btnCalculateEl = document.querySelector("#btnCalculate");
const resultEl = document.querySelector("#result");

//* === Event ===
btnCalculateEl.addEventListener("click", convertNumberGradeToLetterGrade);

//* === Functionlar ===
function convertNumberGradeToLetterGrade() {
  //* Inputları alma:
  const midterm = +midtermEl.value;
  const final = +finalEl.value;

  //* Validasyon
  if (
    midterm < 0 ||
    midterm > 100 ||
    final < 0 ||
    final > 100 ||
    isNaN(midterm) ||
    isNaN(final)
  ) {
    alert(
      "Lütfen ara sınav ve final notlarınızı 0 ile 100 arasında bir değer olarak girin."
    );
    return;
  }

  //* Ortalama bulma: Ara sınav = %40 - Final = %60
  const average = midterm * 0.4 + final * 0.6; // midterm / 60 * 100

  //* Ortalamaya göre harf notunu bulma
  let letterGrade = findLetterGrade(average);

  //*   Harf notunu resultEl içerisindeki span'e yazdırma
  const letterGradeValue = resultEl.querySelector("span");
  letterGradeValue.innerText = letterGrade;

  //*   ResultEl stillendirmesini düzenleme
  resultEl.classList.remove("alert-secondary");
  if (letterGrade === "F") {
    resultEl.classList.remove("alert-success");
    resultEl.classList.add("alert-danger");
  } else {
    resultEl.classList.remove("alert-danger");
    resultEl.classList.add("alert-success");
  }
}

//* Not ortalamasını harf notuna çeviren fonksiyon
const findLetterGrade = (avg) => {
  switch (true) {
    case avg >= 90:
      return "A";
      break;
    case avg >= 80:
      return "B";
      break;
    case avg >= 70:
      return "C";
      break;
    case avg >= 50:
      return "D";
      break;
    default:
      return "F";
      break;
  }
};
