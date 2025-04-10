//.value ile sadece değerine ulaşırız.
function calculateSum() {
  let num1El = document.querySelector("#num1");
  let num2El = document.querySelector("#num2");

  let numberToSum1 = +num1El.value;
  let numberToSum2 = +num2El.value;
  let sum = numberToSum1 + numberToSum2;

  document.querySelector("#sonuc").innerHTML = `Sonuç: ${sum}`;
}