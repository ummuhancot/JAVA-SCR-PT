// Do-While döngüsü, while döngüsüne benzer ancak koşul kontrolü döngünün sonunda yapılır. Bu nedenle, en az bir kez çalıştırılır.
// Başlangıç değeri
let i = 10;

// Do en az bir kez icra edilir.
do {
  console.log(`Merhaba ${i}`);
  // Değişim
  i++;
  // Koşul
} while (i < 10);

for (let k = 10; k < 10; k++) {
  console.log(`For loop'tan merhaba - ${k}`);
}

let j = 10;

while (j < 10) {
  console.log(`While loop'tan merhaba - ${j}`);

  j++;
}
