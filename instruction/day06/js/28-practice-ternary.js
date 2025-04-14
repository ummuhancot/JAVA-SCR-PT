function setSalary() {
  console.log("input girildi.");

  const statusEl = document.querySelector("input[name='status']:checked");
  const salaryEl = document.querySelector("#salary");
  const resultEl = document.querySelector("#result");

  const status = statusEl ? statusEl.value : "";
  const salary = +salaryEl.value;

  console.log(status);
  const updatedSalary = status === "retired" ? salary * 0.9 : salary;

  resultEl.innerText = updatedSalary;
}
