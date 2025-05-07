// ========== ACCESS METHODS ==========
// Array'in orijinal halini değiştirmeden ve döndürdüğü değerlerle dizi elemanlarına veya diziye uygulanan metoda erişim sağlayan metodlardır.

const animals = ["kedi", "köpek", "panda", "tavuk", "aslan", "kedi", "köpek"];

// ==== myArray.concat(eklenecekElemen/lar) =====
// Array'e eleman veya elemanlar ekler.
const returnedConcat = animals.concat("balık");
console.log("Orijinal: ", animals);
console.log("Dönen: ", returnedConcat);

const newAnimals = ["Ayı", "Kurt", "Puma"];
const returnedConcat2 = animals.concat(newAnimals);
console.log(returnedConcat2);

const returnedConcat3 = animals.concat("tilki", ["ağaçkakan", "papağan"]);
console.log(returnedConcat3);

const returnedConcat4 = animals.concat([["Balık"]]);
console.log(returnedConcat4);

// ===== myArray.includes(arananEleman) =====
// Array'in elemanları arasında argüman elemanın olup olmadığına bakar ve buna göre true veya false döndürür.

const returnedIncludes = animals.includes("tavuk");
console.log("Dönen: ", returnedIncludes); // true
const returnedIncludes2 = animals.includes("balık");
console.log("Dönen: ", returnedIncludes2); // false

const returnedIncludes3 = animals.includes("Tavuk");
console.log("Dönen: ", returnedIncludes3); // false

// Örnek kullanım
if (!animals.includes("köpek")) {
  animals.push("köpek");
}

// ===== myArray.indexOf(arananEleman) =====
// Array'deki belirli bir elemanı ilk gördüğü yerdeki indexini döndürür. Eğer bulamazsa -1 döndürür.

const returnedIndexOf = animals.indexOf("kedi");
console.log("Dönen: ", returnedIndexOf); // 0
const returnedIndexOf2 = animals.indexOf("panda");
console.log("Dönen: ", returnedIndexOf2); // 2

const returnedIndexOf3 = animals.indexOf("Leopar");
console.log("Dönen: ", returnedIndexOf3); // -1

// Örnek kullanım
if (animals.indexOf("balık") === -1) {
  // ...
}

// ===== myArray.lastIndexOf(arananEleman) =====
// Array'deki belirli bir elemanı son gördüğü yerdeki indexini döndürür. Eğer bulamazsa -1 döndürür.

const returnedLastIndexOf = animals.lastIndexOf("köpek");
console.log("Dönen: ", returnedLastIndexOf); // 6

const returnedLastIndexOf2 = animals.lastIndexOf("karınca");
console.log("Dönen ", returnedLastIndexOf2); // -1

// ===== myArray.join(ayıraç) =====
// Array içerisindeki elemanların aralarına bir veya birden fazla karakter koyarak string olarak döndürür.

const returnedJoin = animals.join("-");
console.log(returnedJoin); // kedi-köpek-panda-tavuk-aslan-kedi-köpek
console.log(typeof returnedJoin); // string

const letters = ["M", "e", "r", "h", "a", "b", "a"];
const returnedJoin2 = letters.join("");
console.log(returnedJoin2); // Merhaba

const words = ["Ben", "Ali", "Gel", "23", "yaşımdayım"];
const returnedJoin3 = words.join(" ");
console.log(returnedJoin3);

const returnedJoin4 = animals.join();
console.log(returnedJoin4); // kedi,köpek,panda,tavuk,aslan,kedi,köpek

// ===== myArray.toString() =====
// Array içerisindeki elemanları aralarına virgül koyarak string olarak döndürür.

const returnedToString = animals.toString();
console.log(returnedToString); // kedi,köpek,panda,tavuk,aslan,kedi,köpek

// ===== myArray.slice(başIndex, bitişIndex) =====
// Arraayin içinden belirli bir bölümü yeni bir array olarak döndürür. Başlangıç değeri dahil, bitiş değeri dahil değildir.
// [ başlangıçDeğeri, bitişDeğeri )

const returnedSlice = animals.slice(3, 5);
console.log("Dönen: ", returnedSlice);

const returnedSlice2 = animals.slice(2);
console.log("Dönen: ", returnedSlice2);

const returnedSlice3 = animals.slice(0);
console.log("Animals: ", animals);
console.log("Dönen: ", returnedSlice3);
console.log(returnedSlice3 === animals); // false
