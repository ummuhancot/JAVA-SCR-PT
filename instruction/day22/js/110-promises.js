const soz = () => {
  return new Promise((resolve, reject) => {
    // Pending State

    // Sistemden data çekiyoruz

    const isMealReady = true;

    if (isMealReady) {
      // Fulfilled state

      resolve("Siparişiniz hazır.");
    } else {
      // Rejected State

      reject("Siparişiniz yandı, tekrar sipariş verebilirisniz.");
    }
  });
};

// console.log(soz());

// Promise return eden soz() fonksiyonunu çağırdıktan sonra döndürdüğü datayı almak için .then() metodunu kullanılır. Resolve'daki değer fonksiyonun parametresine aktarılır, reject olursa bir hata gerçekleşir ve bu da catch'teki fonksiyonun parametresine aktarılır.

soz()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.warn(error);
  });

// .then normal fonksiyonlarda kullanılamaz:

// function sum(a, b) {
//   return a + b;
// }

// sum(1, 2).then((res) => console.log(res));
