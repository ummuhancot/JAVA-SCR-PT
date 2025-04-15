function calculate() {
  // İndirim oranını al.
  let discount = document.querySelector("#price").value;

  // Fiyatları al
  let priceList = document.querySelectorAll("ul li span");
  // console.log(priceList[3]);

  console.log("Lenght: ", priceList.length);

  // Fiyatlara indirim uygula
  // let price = priceList[0].innerText;
  // price *= ((100-discount)/100);
  // priceList[0].innerText = price;

  for (let index = 0; index < priceList.length; index++) {
    // console.log(priceList[index].innerText);

    let price = priceList[index].innerText;

    // let newPrice = price - (price * discount / 100);
    price *= (100 - discount) / 100;
    console.log(price);

    // Sayfaya indirimli fiyatları gir
    priceList[index].innerText = Math.ceil(price);
  }
}
