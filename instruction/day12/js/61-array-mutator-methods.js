// ========== MUTATOR METOTLARI ==========
// Mutator Metotları orijinal arrayi değiştir.

// ===== myArray.push(eklenecekEleman) =====
// Array'in sonuna eleman veya elemanlar ekler ve arrayin yeni eleman sayısını döndürür.
const arr1 = ["🐹", "🐹", "🐹"];
console.log("Orijinal: ", arr1); // ['🐹', '🐹', '🐹']
 //bir tane ekledik
const returnedArr1 = arr1.push("🦨");
console.log("Mutator: ", arr1);
console.log("Mutator dönen: ", returnedArr1); // 4

//birden fazla ekleyebiliyoruz
arr1.push("🐹", "🦨");
console.log(arr1);

// ===== myArray.pop() =====
// Array'in son elemanını siler ve silinen elemanı döndürür.
const arr2 = [1, 1, 1, 999];
console.log("Orijinal: ", arr2);
const returnedArr2 = arr2.pop();
console.log("Mutator: ", arr2);
console.log("Mutator dönen: ", returnedArr2);

// ===== myArray.shift() =====
// Array'in ilk(index 0) elemanını siler ve silinen elemanı döndürür.
const arr3 = ["ABC", "z", "z", "z"];
console.log("Orijinal: ", arr3);
const returnedArr3 = arr3.shift();
console.log("Mutator: ", arr3);//['ABC', 'z', 'z', 'z']
console.log("Mutator dönen: ",returnedArr3);//ABC

// ===== myArray.unshift(eklenecekEleman) =====
// Array'in başı(index 0)'a eleman veya elemanlar ekler ve arrayin yeni eleman sayısını döndürür.
const arr4 = [9,9,9];
console.log("Orijinal: ", arr4);
const returnedArr4 = arr4.unshift("1");
console.log("Mutator: ", arr4);//['1', 9, 9, 9]
console.log("Mutator dönen",returnedArr4);//4


// ===== myArray.sort() =====
// Array'i alfabetik veya aritmetik sıraya dizer ve dizilen arrayi döndürür.
const arr5 = ["b", "c", "a"];
console.log("Orijinal: ", arr5);
const returnedArr5 = arr5.sort();
console.log("Mutator: ", arr5);
console.log("Mutator dönen: ", returnedArr5);

const numberArr = [10000, 21, 3908, 4, 9];
console.log(numberArr.sort()) // [10000, 21, 3908, 4, 9]
numberArr.sort((x,y) => x - y);
console.log(numberArr); // [4, 9, 21, 3908, 10000]

// ===== myArray.reverse() =====
// Arrayin elemanlarının tersten yazar ve yeni arrayi döndürür.
const arr6 = ["a", "b", "a", "h", "r", "e", "M"];
console.log("Orijinal: " , arr6);
const returnedArr6 = arr6.reverse()
console.log("Mutator: " , arr6);
console.log("Mutator dönen: ", returnedArr6);

// Palindrome: 
const num = 12321;
console.log(+num.toString().split("").reverse().join("") === num);


// ===== myArray.splice(startIndex, deleteCount, eklenecekEleman) =====
// ===== myArray.splice(başlangıçIndeksi, silinecekElemanSayısı, eklenecekEleman) =====
// Array'in başlangıç indeksinden itibaren silinecek eleman sayısı kadar eleman silip eklenecek elemanları ekler, ve silinen değerleri döndürür.
// startIndex: Silinecek elemanların başlangıç indeksi
// deleteCount: Silinecek eleman sayısı
// eklenecekEleman: Eklenecek kısım 
const arr7 = ["00", "11", "22", "33", "44"];
console.log("Orijinal: ", arr7);
const returnedArr7 = arr7.splice(2, 1, "yirmiiki");
console.log("Mutator: ", arr7); // ['00', '11', 'yirmiiki', '33', '44']
console.log("Mutator dönen: ", returnedArr7); // ['22']

// Belirli bir indeksten sonraki tüm elemanları silmek için:
const arr8 = [0, 1, 2, 3, 4, 5];
arr8.splice(2);
console.log("Mutator: ", arr8); // [0, 1]

// Belirli bir indeksten sonra eleman eklemek için:
const arr9 = ["Bir", "İki", "Beş", "Altı"];
arr9.splice(2, 0, "Üç", "Dört");
console.log("Mutator: ", arr9);


