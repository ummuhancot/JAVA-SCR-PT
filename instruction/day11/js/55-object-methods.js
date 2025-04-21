const car ={
  //key:value
  //0  :1
  
    brand: "Audi",
    model: "A7",
    color: "red",
    transmission: "auto",
    price:{
        net:50000,
        tax:6000
    },
    start:() => {
        console.log("Araba çalıştırıldı.");
    }
}
// Object.entries(obj);

//Object'in her property'i çiftli array icerisine alarak bu çiftlerden array oluşturulur.
const objEntries = Object.entries(car);
console.log(objEntries);

//i ' nin 0 ' ı key, i ' nin 1 ' i value olacak 
for(let i = 0; i < objEntries.length; i++){
    console.log(`Key: ${objEntries[i][0] } Value: ${objEntries[i][1]}`);

}

//Object.keys(obj)
//Object'in sadece değerini (key) array icerisinde almaya yarar.
const objKeys = Object.keys(car);
console.log(objKeys);

//Object.keys(obj)
//Object'in sadece değerini (value) array icerisinde almaya yarar.
const objValue = Object.values(car);
console.log(objValue);

//Örnek yapı 
//of iceriğinin alınmasını yarıyordu
//Object'in özellik ve değerlerininn tek tek alınıp döndürülmesine yarayan yapı
//         0  ,1
for(const [key,value] of Object.entries(car)){
    console.log(`Key: ${key} - Value: ${value}`);
}

