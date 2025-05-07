// Negatif koordinatları pozitif'e çevirip alt alta konsola yazdırın
// Data
const coordinates = [-100, 150, -32, 43, -20];

// 1- Negatifleri filterele:
const filteredCoordinates = coordinates.filter((item) => item < 0);
console.log(filteredCoordinates); // [-100, -32, -20]

// 2- Filterelenen Negatifleri pozitife çevir:
// const absoluteFilteredCoordinates = filteredCoordinates.map((item) => item * -1);

const absoluteFilteredCoordinates = filteredCoordinates.map((item) =>
  Math.abs(item)
);

console.log(absoluteFilteredCoordinates); //  [100, 32, 20]

// 3- Pozitife çevrilen koordinatları alt alta konsola yazdır:
absoluteFilteredCoordinates.forEach((item) => console.log(item));

// PIPELINE METHOD
console.log("PIPELINE METHOD");
coordinates
  .filter((item) => item < 0)
  .map((item) => item * -1)
  .forEach((item) => console.log(item));
