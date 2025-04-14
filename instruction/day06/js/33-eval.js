console.log(eval("Math.sqrt(5*10+9-5+10)"));

function calculate() {
  let num = document.querySelector("#num").value;
  let result = eval(num);
  document.querySelector("#result").innerText = result;
}
