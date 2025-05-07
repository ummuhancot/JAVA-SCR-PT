// Data
const products = [
  {
    id: 1,
    name: "Laptop",
    price: 3000,
  },
  {
    id: 2,
    name: "Telefon",
    price: 900,
  },
  {
    id: 3,
    name: "Saat",
    price: 2500,
  },
  {
    id: 4,
    name: "Tablet",
    price: 1300,
  },
  {
    id: 5,
    name: "Kablo",
    price: 50,
  },
];

// Fiyatı 1000'den yüksek olanlara 10%, düşük olanlara 15% zam yap.

const updatedProducts = products.map(function (product) {
  console.log(product.price);
  if (product.price >= 1000) {
    product.price *= 1.1;
  } else {
    product.price *= 1.15;
  }

  return product;
});

console.log(updatedProducts);
