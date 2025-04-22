const fiyatlar = [123, 5666, 126, 67];
const fiyatlar2 = [10, 20, 30, 40];

function increaseByPercentage(arr, percentage) {
  //validasyon
  //  Array mi              percentage number mi diye sorduk
  if (!Array.isArray(arr) || isNaN(percentage)) {
    alert("Argümanlar hatalı!");
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    // arr[i] = arr[i] + arr[i] * (percentage / 100);
    arr[i] += (arr[i] * percentage) / 100;
  }

  return arr;
}

console.log(increaseByPercentage(fiyatlar, 20));
console.log(increaseByPercentage(fiyatlar2, 10)); //fiyaz , yüzde kac istedimiz.
