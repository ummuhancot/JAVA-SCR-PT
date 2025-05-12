// ============= SPREAD OPERATOR =============

// ARRAY

console.log("-------------- ARRAY --------------");

const arr = [1, 2, 3, 4, 5];

arr.forEach((item) => console.log(item));

// Array elemanlarını köşeli parantezden çıkararak tek tek almamıza yarayan yapı spread operator'dır
console.log(...arr);

// Bir dizi içindeki sayıları ayrı ayrı parametre olarak topla fonksiyonuna gönderen kodları yazınız.

// Parametrede ... olunca rest:
function topla(...numbers) {
  return numbers.reduce((acc, item) => acc + item, 0);
}

const toplanacakSayilar = [5, 10, 15, 20];

console.log(topla(1, 2, 3)); // 6
// Argümanda ... olunca spread:
console.log(topla(...toplanacakSayilar)); // 50

const arr1 = [1, 2, 3];
const arr2 = arr1.slice(); // yeni referans oluşturur
const arr3 = [...arr1]; // spread operator ile yeni referans oluşturulabilir.

arr1[1] = 9;

console.log("1- ", arr1);
console.log("2- ", arr2);
console.log("3- ", arr3);

const numbers = [1, 2, 3];
const letters = ["a", "b", "c"];

console.log(numbers.concat(letters, "Hello", "World"));
const newArr = [...numbers, ...letters, "Hello", "World"];
console.log(newArr);

console.log("-------------- OBJECT --------------");

// OBJECT
//1- olan data yı update ederken spread operator kullanılır.
//2- yeni bir referans oluştururken spread operator kullanılır objelerde.

const student = {
  firstName: "Ali",
  lastName: "Gel",
  age: 20,
};

const newStudent = student;

//bunu yapmak yerine 
/* 
* const newStudent2 = {
* firstName: student.firstName,
* lastName: student.lastName,
* age: student.age,
*}; // yeni referans oluşturur
*/
// ? bunu yaparız.Yeni referans oluşturmak için 
const anotherStudent = { ...student }; // spread operator ile yeni referans oluşturulabilir. İcerik aynı olsa bile yeni referans oluşturur.



console.log(anotherStudent === student); // false
console.log(newStudent === student); // true
console.log(student, anotherStudent, newStudent);

const newStudent2 = {
  firstName: student.firstName,
  lastName: student.lastName,
  age: student.age,
}; // yeni referans oluşturur

console.log(student === newStudent2); // false

student.country = "Türkiye";
console.log(student);

//data ekleme
// student objesine country propertysini ekleyelim
const address = {
  country: "Türkiye",
  city: "Bursa",
  street: "Çıkmaz Sok.",
  zip: "16604",
};

// Spread Operrator ile kolaylıkla objectlere property ekleyip olan propertyleri güncellyebiliriz.
const detailedStudentInfo = { ...student, ...address, eyeColor: "Mavi" };

// Bir objeyi güncellemek istiyorsak spread operator'ı başta kullanmamız gerekiyor.
const updatedDetailedStudentInfo = {
  ...detailedStudentInfo,
  city: "İstanbul",
  street: "Başka Bir Sok.",
  zip: "34404",
};
console.log(updatedDetailedStudentInfo);


console.log("-------------- güncelleme kücük örnek --------------");

const car = {
  brand : "Mercedes",
  price:1000,
}

console.log(car);

//objeyi güncellerken spreadsiz
car.price = 2000;
console.log(car);
//objeyi güncellerken spread kullandı
console.log({...car, price: 3000}); // 3000
