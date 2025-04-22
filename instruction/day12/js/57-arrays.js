//!ARRAy
//?Diziler(Array), bir veri yapısı olup sıfır, bir veya birden fazla veriyi saklamak icin kullanılır.

//*1. Tanımlama Yönltemi
const kurslar = [];
console.log(kurslar);
const kurslar1 = ["HTML", "CSS", "Bootstrap", "JavaSctrip"];
console.log(kurslar1); //["HTML", "CSS", "Bootstrap", "JavaSctrip"]
console.log(typeof kurslar1); //object
console.log(kurslar1 instanceof Array); //instanceof : Array mı demiş olduk (true)

//*2. Tanımlama Yönltemi
const digerKurslar= new Array("SASS", "API", "React","Next");
console.log(digerKurslar);//["SASS", "API", "React","Next"]

//*Array Elemanlarına Erişim
console.log(kurslar1[0]); //HTML
console.log(kurslar1[1]); //CSS
console.log(kurslar1[2]); //Bootstrap
console.log(kurslar1[3]); //JavaSctrip
console.log(kurslar1[4]);//olmayan bir elementi istedimiz icin (undefined) gelir

//*Array Uzunluğu
console.log(kurslar1.length); //4
console.log(digerKurslar.length); //5


//*Array' in son elemanına erişim
/*  index + 1 = length
    index = length - 1 olur                  */
//? index           0       1         2            3
//? length          1       2         3            4

console.log(kurslar1[1]); //CSS
console.log(kurslar1[kurslar1.length-1]); //son eleman JavaSctrip

//*Array Verisi Eklemek Veya Olan Veriyi Değiştirmek
//? değiştirme
kurslar1[0] = "XML";
console.log(kurslar1);
kurslar1["Figma"];
console.log(kurslar1);
//? ekleme
kurslar1[kurslar1.length]= "php";
console.log(kurslar1);
kurslar1[kurslar1.length]= "Wep";
console.log(kurslar1);

//? Array de ileri bir değer verme 5 e kadar vedik boş geçtik diğerleri sonra 10 ya array verdik.
console.log(kurslar1.length);
kurslar1[10]="Motion";
console.log(kurslar1);//['XML', 'CSS', 'Bootstrap', 'JavaSctrip', 'php', 'Wep', empty × 4, 'Motion']

//? Yeni Atama Yapılamaz
kurslar1 = [1,2];//TypeError: Assignment to constant variable
// Object ve Array non - primitive olduğu icin const ile tanımlanmış olsa bile icindeki değerler değiştirilebilir fakat yeni atama yapılamaz.