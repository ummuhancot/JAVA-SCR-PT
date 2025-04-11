

// ======== PRIMITIVE (İLKEL) =======

// STRING(tırnak icine yazılan her şey)
let isim = "Ali";
let soyisim = 'Demir';
console.log(isim); // Ali
console.log(soyisim); // Demir
console.log(typeof isim); // string
//typeof data tipini bilmediğimizde yazarız data tipini öğrenmek icin


// Number(sadece numaralar)
let yas = 18;
console.log(yas); // 18
console.log(typeof yas); // number

const kdv = 1.18;
console.log(kdv);
console.log(typeof kdv); // number
let negativeNumber = -100;
console.log(negativeNumber); //-100

let maxNum = 1.7976931348623157e308;
console.log(maxNum); // 1.7976931348623157e+308
let maxSafeNmber = Number.MAX_SAFE_INTEGER;
console.log(maxSafeNmber); // 9007199254740991


//BIGINT
let x = 100n;
console.log("big:"+x); //100n
console.log(typeof x); // bigint

console.log(x + 1n);
// bigint ile number arasında bazı işlemler yapılamaz


// BOOLEAN
let isRetired = true;
let isWorking = false;
console.log(isRetired);
console.log(isWorking);
console.log(typeof isRetired, typeof isWorking); // boolean boolean


// SYMBOL(unik değerler alır.)
let mySymbol = Symbol("id");
console.log(mySymbol); // Symbol(id)
console.log(typeof mySymbol);



// UNDEFINED
let undef;
console.log(undef);//undefined
console.log(typeof undefined) //undefined


//NULL  
let myNull = null;
console.log(myNull); //null
console.log(typeof myNull); //object


// ======== NON - PRIMITIVE (İLKEL OLMAYAN) =======

//ARRAY
let myArray = [1, 2, 3, 4, "Beş"];
let myNames = ["John", "Doe", false];
console.log(myArray); //[1, 2, 3, 4, "Beş"];
console.log(myNames); // ['John', 'Doe', false]
console.log(myArray.length); //5
console.log(typeof myArray, typeof myNames) //object object

//OBJECT
let myObject = {
    id:1,
    firstName:"Jonhn",
    lastName:"Doe",
    age:30,
    id:5
};

console.log(myObject) //{id:1, firtName: 'John, lastName: 'Doe, age:30}
console.log(myObject.id); //1
console.log(typeof myObject) //object

console.log(myObject.lastName) //Doe

//FUNCTİON(kod bloğunun tekrar tekrar oluşturalbilmesi icin yazılır.)
function ortalamaHesapla() {

};

console.log(typeof ortalamaHesapla);//function

//==================================
// JavaScript data types tanımlamada dinamiktir. Bir değişken sonradan bir değer ataması yapıldığında data type'ını kendisi dönüştürür. 


let general = "Hello";
console.log(typeof general);
general = 12;
console.log(typeof general);
general = 10n;
console.log(typeof general);
general = true;
console.log(typeof general);
general = Symbol("unique");
console.log(typeof general);
general = undefined;
console.log(typeof general);
general = null;
console.log(typeof general);
general = [1];
console.log(typeof general);
general = {};
console.log(typeof general);
general = () => {};
console.log(typeof general);

