//======== dökümana ulaşma ========
let h2Elements = document.querySelectorAll('h2');
console.log(h2Elements);


//innerText 1. ayıra biliriz elementleri icindeki yazıyı değiştirdik burda(tamamen string olarak algılayacak)
h2Elements[0].innerText =
  "Bu başlık <strong class='text-danger'> innerText </strong> ile oluşturulmuştur.";
console.log(h2Elements[0].innerText);


//innerHTML(html kısmınıda değiştiriyor olabilicez hemde string kısmını)
h2Elements[1].innerHTML = "Bu başlık innerHTML ile oluşturulmuştur.";

h2Elements[1].innerHTML =
  "Bu başlık <strong class='text-danger'> innerHTML </strong> ile oluşturulmuştur.";
console.log(h2Elements[1]);

//sayfa dinamikligi icin bi veraybıla atanır ve o şekilde istenir.
let para1El = document.querySelector("#para1");
let firstName = "John";
//1.kullanım
// para1El.innerText = `Merhaba ${firstName}`;
//2.kullanım
document.querySelector("#para1").innerHTML = `Merhaba ${firstName}`;

