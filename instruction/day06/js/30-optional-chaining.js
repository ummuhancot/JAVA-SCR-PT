//olmayanın hicliğini istiyoruz 
//var mi yok mu emin degilsek bunu kullanmak garantiliyor isi 
//çok fazla data olduğunda da kullanmak iyi olur
let user = {
    name: "Jane",
    age: 20,
    // address: {
    //     city: "London",
    //     country: "England"
    // }
}


document.querySelector("#name").innerText = user.name;
document.querySelector("#age").innerText = user.age;
document.querySelector("#address").innerText = user?.address?.country;

// Object'in olmayan bir property'sini almaya çalışırsanız undefined gelir. 
console.log(user.height); // undefined
// Undefined'ın property'sini almaya çalışırsanız JS error atar.
// console.log(user.height.cm); // error
// Bu gibi durumlarda error'ü engellemek için Optional Chaining (?) kullanılır.
console.log(user?.height?.cm); // undefined
