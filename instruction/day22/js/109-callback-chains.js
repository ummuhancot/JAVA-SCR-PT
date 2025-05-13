function giveOrder(callback) {
  console.log("Sipariş verildi.");

  setTimeout(() => {
    console.log("Sipariş hazır.");
    callback();
  }, 3000);

  console.log("Hello 1");
}

console.log("Hello 2");

function eatMeal(callback) {
  console.log("Yemeye başlandı.");

  setTimeout(() => {
    console.log("Yemek bitii, lezzetliydi...");
    callback();
  }, 2000);
}

function watchMovie(callback) {
  console.log("Film izlenmeye başlandı.");

  setTimeout(() => {
    callback();
  }, 5000);
}

function eatPopCorn() {
  console.log("Patlamış mısır yeniyor.");

  setTimeout(() => {
    console.log("Film bitti.");
    console.log("Patlamış mısır bitti.");
  }, 5000);
}

// Burada işlem sıralaması yoktur:
// giveOrder(() => {});
// eatMeal(() => {});
// watchMovie(() => {});
// eatPopCorn(() => {});

// Async'lerde işlem sıralaması yapabilmek için callback chainlere başvurduk:
giveOrder(
  // Bu kısım giveOrder'ın setTimeout içerisindeki kısmıdır:
  // cb1
  () => {
    console.log("Hello 3");
    eatMeal(
      // cb2
      () => {
        watchMovie(
          // cb3
          () => {
            eatPopCorn();
          }
        );
      }
    );
  }
);
