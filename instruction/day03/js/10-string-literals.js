//String literals
//1.amac icerisinde iki tane ("") ve ('') kullandığımızda javaSctript string bitti sayıyor bunu önler
let sentence_with_double_quotes = "Ayşe İstanbul'da yaşıyor";
console.log(sentence_with_double_quotes);

let sentence_with_single_quotes = 'Ayşe "JavaScript" öğreniyor ';
console.log(sentence_with_single_quotes);

let firstName = "Jane";
let lastName = "Doe";
let age = 30;
let salary = 30000;

//2.amac burda icerisine veraybıl atamasında boşlukları oluşturmadan yazmayı saglar
console.log(
  "Benim adım " + firstName + lastName + ". Yaşım " + age + ". Maaşım " + salary
);

console.log(
  `Benim adım ${firstName} ${lastName}. Yaşım ${age}. Maaşım ${salary}`
);

let sentence = `${firstName} İstanbul'da yaşıyor ve "JavaScript" öğreniyor.`;

console.log(sentence);

//3.amac Backtik birden fazla satırlı yazı tanımlamamıza izin verir.
let myString = `
    Herhangi
    bir
    cümle
    yazalım.
`;

console.log(myString);
