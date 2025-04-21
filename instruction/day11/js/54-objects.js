
const firstName = "Ali";
const lastName = "Gel";

const firstName1 = "Veli";
const lastName1 = "Git";

let car = {
    //key : value 
    brand: "Mercedes",
    model: "S500",
    color: "siyah",
    gear: "Otomatik Vites",
    engine:{
        type : "Dizel",
        size : "6",
        age : 2024
    },
    firstHange: true,
    start:()=>{
        console.log("Araba çalıxtırıldı.");
        return "Araba Çalıştırıldıktan sonra dönecek değer"
    }
}

//Object'e ve değerlerine erişim:
console.log(car);
console.log(typeof car); //object
console.log(car.brand); //Mercedes
console.log(car.engine.age); //zincirleme şekilde datalar cekilebilir 2024
console.log(car.start);
car.start();//Araba calıştırıldı
console.log(car.start());

//Object'e property ekleme: objenin değerini güncellemiş oluyoruz
car.oil = "Super";
console.log(car);
console.log(car.oil); //Super

//Object değerini güncelleme:
car.firstHange= false;
console.log(car);

//Tüm objenin azerine yazar
//const olunca hata verirdi let old icin güncelleyebiliyoruz.
car = {
    isSold: false
}
console.log(car);//{isSold: false}

//!======= başka bir şekilde datayı cekme =======

let car1 = {
  //key : value
  brand: "Mercedes",
  model: "S500",
  color: "siyah",
  gear: "Otomatik Vites",
  engine: {
    type: "Dizel",
    size: "6",
    age: 2024,
  },
  firstHange: true,
  start: () => {
    console.log("Araba çalıxtırıldı.");
    return "Araba Çalıştırıldıktan sonra dönecek değer";
  },
};

console.log(car1.brand);//Mercedes
console.log(car1["brand"]);//Mercedes bu şekilde de cağrılabilir.
console.log(car1["engine"]["type"]);//Dizel
console.log(car1?.["1"]?.["1"]);//undefined


