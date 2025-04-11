let expression = "elma";

switch (expression) {
  case "armut":
    console.log("Armut seçildi");
    break;
  case "muz":
    console.log("Muz seçildi");
    break;
  case "elma":
    console.log("Elma seçildi");
    break;
    default: 
    console.log("İstediğiniz ürün yok.");
    // break;
}
// Switch expression kısmı ile case kısmını karşılaştırır. Eğer sonuç doğruysa case'i takip eden kod bloğunu çalıştırır.
// console.log(expression === "elma");

function calculate(){

    let price = document.querySelector("#price").value;
    // console.log(price);

    switch(true){
        case (price > 1500):
            price *= .85;
            break;
        case (price > 1000):
            price *= .87;
            break;
        case (price > 700):
            price *= .9;
            break;
        case (price > 500):
            price *= .93;
            break;
        case (price > 300):
            price *= .95;
            break;
        default:
            price *= .98;
            break

    }

    console.log(price);
    document.querySelector(".result").innerText = `Son fiyat: ${Math.ceil(price)}`;
}
//(floor yuvarlama yapar)
// console.log(Math.floor(3.7)); // 3
// console.log(Math.ceil(3.7)); // 4
//ceil yuvarlama yapar üste yuvarlar
// console.log(Math.round(3.7)); // 4
