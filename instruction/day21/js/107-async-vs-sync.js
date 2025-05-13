//* === ASYNC VS SYNC ===

//! JavaScript'te iki tür işlem yürütme şekli vardır: senkron (sync) ve asenkron (async). Bu iki tür işlem yürütme şekli, JavaScript'in çalışma mantığını ve performansını etkileyen önemli kavramlardır.

//! Senkron (Sync) işlemler, kodun sırasıyla yürütülmesini sağlar. Yani, bir işlem tamamlanmadan diğerine geçilmez. Bu, kodun daha öngörülebilir olmasını sağlar, ancak uzun süren işlemler sırasında uygulamanın donmasına neden olabilir.

//! Asenkron (Async) işlemler ise, kodun arka planda çalışmasına izin verir. Bu, uzun süren işlemlerin uygulamanın diğer bölümlerini etkilemeden yürütülmesini sağlar. JavaScript, asenkron işlemleri yönetmek için callback fonksiyonları, Promise'ler ve async/await yapısını kullanır.

//! Asenkron işlemler, uygulamanın daha hızlı ve daha verimli çalışmasını sağlar. Ancak, kodun akışını takip etmek daha zor olabilir ve hata ayıklama süreci karmaşıklaşabilir.

//! JavaScript, tek iş parçacıklı bir dil olduğu için, ilk synchronous işlemleri ilk önce yürütür ve ardından asenkron işlemleri sırayla yürütür. Bu, JavaScript'in olay döngüsü (event loop) mekanizması ile sağlanır. Olay döngüsü, asenkron işlemleri yönetir ve bu işlemlerin tamamlanmasını beklerken diğer kodların çalışmasına izin verir.

//! ASynchronaous ve Synchronous 

//? Kodların Uygulanma Sırası

//? Sync: Her işlem kendisinden önceki işlemin bitmesini bekler. Bu sıra katı bir şekilde uygulanır.
// function syncFunction(){

//     console.log("Task 1");
//     console.log("Task 2");
//     console.log("Task 3");

// }

// syncFunction();

//? Async: İşlemler arka planda paralel olarak yürütülür. Bu sıralama katı değildir.
// function asyncFunction() {
//   console.log("Task 1");

//   setTimeout(() => {
//     console.log("Task 2");
//   }, 20);

//   console.log("Task 3");

//   setTimeout(() => {
//     console.log("Task 4");
//   }, 10);
// }

// asyncFunction();

//* JavaScript'in uygulama sırası öncelikle sync sonra async olarak devam eder.

//! Blocklanma

//! Sync: İşlem bitene kadar thread ilgili işlemle ilginecek ve bu da programı blocklayacaktır.

// console.log("Task 1");
// for(let i = 0; i < 10000000000; i++){

// }

// console.log("Task 2");

//! Async: Bloklanma söz konusu olmaz.
setTimeout(() => {
  console.log("Task 1");
}, 1000);

setTimeout(() => {
  console.log("Task 2");
}, 1000);

setTimeout(() => {
  console.log("Task 3");
}, 1000);
