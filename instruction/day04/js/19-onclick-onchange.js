//function baglamaya yarıyor 
//yani butona tıkladığımızda console nin icindeki mesaj görünür.
// DOM Element
const pEl = document.querySelector("#welcome");
//aksiyonlar la ilgili değişiklik yani onclick ve onchange
function sayHello(){
    console.log("Button tıklandı. sayHello fonksiyonu çalıştırılıyor.");
    alert("Hello World");
}

function myFunction(){
    console.log("Onchange çalıştırıldı.");
    let fullName = document.querySelector("#fullName").value;
    pEl.innerText = `Merhaba ${fullName}`;
}