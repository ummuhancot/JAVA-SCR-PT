let number = 10;

number -= 5;
console.log(number);
number += 10;
console.log(number);
number *= 2;
console.log(number);
number /= 6;
console.log(number);
number **= 2;
console.log(number);
number %= 3;
console.log(number);

number &= 0; // number = (number && 0)(Çarpma yapıyor)
console.log(number);

number |= 10;
console.log(number); // number = (number || 10)(toplama yapıyor)

// Yukarıdaki atama operatörleri hem aritmetik işlem yapacak hem de işlem sonucunu değişkene atayacaktır. Bu yüzden eğer değişkenin değişmemesi gerekiyorsa aritmetik operatörler atamasız bir şekilde kullanılmalıdır.