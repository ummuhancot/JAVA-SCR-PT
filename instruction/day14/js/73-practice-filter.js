// Negatif koordinatları bulup yeni bir array'de saklayınız:

const coordinates = [-100, 50, 244, -50, 42, -20];

const negativeCoordinates = coordinates.filter((item) => item < 0);

console.log(negativeCoordinates);

// Arrayin ilk harfi ile belirtilen harfi örtüşen elemanları döndürüp array'de saklayınız.

const people = [
  "Ayşe",
  "Ali",
  "Can",
  "Canan",
  "Mustafa",
  "Tuğçe",
  "Felix",
  "Teoman",
  "Turgut",
  "Muhammet",
  "mahmut",
];

function filterPeople(array, letter) {
  // Validasyon
  if (!Array.isArray(array)) return "Input hatalı.";

  const filteredArray = array.filter((item) =>
    item.toLowerCase().startsWith(letter.toLowerCase())
  );

  //   const filteredArray = array.filter(
  //     (item) => item[0].toLowerCase() === letter.toLowerCase()
  //   );

  //   const filteredArray = array.filter(
  //     (item) => item.at(0).toLowerCase() === letter.toLowerCase()
  //   );

  return filteredArray;
}

console.log(filterPeople(people, "T"));
console.log(filterPeople(people, "t"));
console.log(filterPeople(people, "A"));
console.log(filterPeople(people, "a"));
console.log(filterPeople(people, "z"));
