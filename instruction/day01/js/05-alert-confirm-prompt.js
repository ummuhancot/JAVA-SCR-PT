alert("Bu sayfaya giriş yetkiniz yok!");//kullanıcıya mesaj verir geri dönüşü yok

//confirm("KVKK'yı kabul ediyorum.");//kullanıcıya geri dönüşü olan mesaj verir.
//true veya false döndürür.
let onay = confirm("KVKK'yı kabul ediyorum.");
console.log("KVKK'yı kabul ediyorum.",onay);
//User tamam derse true, iptal derse false değeri döndürür.

let isim = prompt("İsminizi giriniz.");
console.log(isim);
// User'ın yazdığı değeri döndürür.

console.log(isim, "isimli kullanıcı kvkk metnine onay verdi mi", onay);

// Bu tek satır yorumdur.

/*
Bu
block
yorumdur.
Birden 
fazla 
satır 
yazılabilir.
*/
