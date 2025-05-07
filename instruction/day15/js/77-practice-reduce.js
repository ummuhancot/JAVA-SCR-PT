// Maaş 3000'den fazlaysa (filterleme) %10 zam uygula (mapleme) ve toplamını getir (reducelama).

// Data
const employees = [
  {
    id: 1,
    name: "Alice",
    salary: 2800,
  },
  {
    id: 2,
    name: "Bob",
    salary: 3500,
  },
  {
    id: 3,
    name: "Charles",
    salary: 2900,
  },
  {
    id: 4,
    name: "David",
    salary: 2200,
  },
  {
    id: 5,
    name: "Eve",
    salary: 3200,
  },
  {
    id: 6,
    name: "Jake",
    salary: 1100,
  },
];

function calculateTotalPayroll(arr) {
  // Validasyon
  if (!Array.isArray(arr) || arr.length === 0) {
    return {
      status: "error",
      message: "Geçersiz input",
    };
  }

  // // 3000'den az olanları filtreleme:
  // const filteredArr = arr.filter((item) =>item?.salary < 3000);

  // // console.log(filteredArr);

  // // %10 zam uygula
  // const increasedSalaries = filteredArr.map((item) => Math.round(item?.salary * 1.1));

  // console.log(increasedSalaries);

  // // Toplamını getir
  // const totalIncreasedSalaries = increasedSalaries.reduce((acc, item) => acc + item, 0);

  // return totalIncreasedSalaries

  const totalPayroll = arr
    .filter((item) => item.salary < 3000)
    .map((item) => Math.round(item.salary * 1.1))
    .reduce((acc, item) => acc + item, 0);

  return {
    status: "success",
    data: totalPayroll,
  };
}

const response = calculateTotalPayroll(employees);
if (response.status === "error") {
  console.log(response.message);
} else {
  console.log("Total payroll: ", response.data);
}
