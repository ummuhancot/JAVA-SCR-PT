// Array'deki elemanları birleştirerek tek bir string haline getirin.

// Data
const flowers = ["Gül", "Papatya", "Orkide", "İlyum", "Karanfil", "Lale"];
const numbers = [11, 22, 33, 44];

/** Array'deki elemanları birleştirerek string'e çevirilmesini sağlar.
 *
 * @param {any []} arr
 * @returns {string}
 */
const convertArrayIntoString = (arr) => {
  // Validasyon
  if (!Array.isArray(arr) || arr.length === 0) {
    return "Geçersiz input.";
  }

  let resultString = "";

  for (let item of arr) {
    resultString =
      resultString + item + (arr[arr.length - 1] === item ? "" : " ");
  }

  return resultString;
};

console.log(convertArrayIntoString(flowers)); // Gül Papatya Orkide İlyum Karanfil Lale
console.log(convertArrayIntoString(numbers)); // 11 22 33 44
console.log(convertArrayIntoString("numbers")); // Geçersiz input.
console.log(convertArrayIntoString([])); // Geçersiz input.
