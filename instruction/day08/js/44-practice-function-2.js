function calculate() {
  let input = +document.querySelector("#number").value;
  let resultEl = document.querySelector("#result");

  const prime = isPrime(input);

  resultEl.innerText = `${input} sayısı asal bir ${
    prime ? "sayıdır" : "sayı değildir"
  }.`;

  resultEl.classList.remove(!prime ? "asal" : "asal-degil");
  resultEl.classList.add(prime ? "asal" : "asal-degil");
}

function isPrime(number) {
  if (number < 2) return false;

  for (let i = 2; i < number; i++) {
    // Kendisi ve 1 arasındaki herhangi bir sayıya tam bülünoyrsa asal değildir.
    if (number % i === 0) return false;
  }

  return true;
}
