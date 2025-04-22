const cars = [
  {
    brand: "Mercedes",
    model: "S500",
    price: 75000,
  },
  {
    brand: "BMW",
    model: "X5",
    price: 65000,
  },
  {
    brand: "Audi",
    model: "A8",
    price: 89000,
  },
  {
    brand: "Porsche",
    model: "911",
    price: 65000,
  },
];

const containerEl = document.querySelector(".container");

function populateCars(arr) {
  for (let i = 0; i < arr.length; i++) {
    containerEl.innerHTML += `
        <div class="card">
            <h2> ${arr[i].brand} </h2>
            <h3> ${arr[i].model}  </h3>
            <p> ${arr[i].price}  </p>
        </div>
        `;
  }
}

populateCars(cars);
