// Data
const countries = [
  {
    name: "Unites States",
    area: 9833520,
  },
  {
    name: "Canada",
    area: 9984670,
  },
  {
    name: "Greenland",
    area: 2166086,
  },
  {
    name: "Australia ",
    area: 7688287,
  },
  {
    name: "New Zealand",
    area: 268680,
  },
];

function calculateTotalArea(arr) {
  // Validasyon:
  if (!Array.isArray(arr)) {
    return {
      status: "error",
      message: "Input array değildir.",
    };
  } else if (arr.length === 0) {
    return {
      status: "error",
      message: "Array boştur.",
    };
  }

  const totalArea = arr.reduce((acc, item) => acc + item?.area, 0);

  // const formattedTotalArea = totalArea.toLocaleString("en-US");
  const formattedTotalArea = totalArea.toLocaleString("tr-TR");
  // toLocaleString değeri string'e çevirir, string dışındaki tüm işlemler uygulandıktan sonra stringe çevirme yapılmalı.

  return {
    status: "success",
    data: formattedTotalArea,
  };
}

console.log(calculateTotalArea(countries)?.data);
