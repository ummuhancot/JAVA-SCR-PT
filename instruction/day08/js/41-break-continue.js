for (let i = 0; i < 5; i++) {
  if (i % 2 === 1) {
    // Continue bulunduğu tekrarı bitirir.
    continue;
  }

  console.log(i);
}

for (let k = 0; k < 5; k++) {
  if (k === 3) {
    // Break döngüyü tamamen bitrir.
    break;
  }

  console.log(k);
}
