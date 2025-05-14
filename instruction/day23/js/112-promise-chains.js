const giveOrder = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task 1");
    }, 5000);
  });
};

const eatMeal = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task 2");
    }, 4000);
  });
};

const watchMovie = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task 3");
    }, 3000);
  });
};

const eatPopCorn = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Task 4");
    }, 2000);
  });
};

document.addEventListener("click", () => {
  // Sıralama olmadan her işlemi kendi süresinde tamamlayıp bitirir:
  // giveOrder().then(response => console.log(response)).catch(err => console.log(err));

  // eatMeal().then(response => console.log(response)).catch(err => console.log(err));

  // watchMovie().then(response => console.log(response)).catch(err => console.log(err));

  // eatPopCorn().then(response => console.log(response)).catch(err => console.log(err))
  // 4 - 3 - 2 - 1

  // Promise Chain
  giveOrder()
    .then((response) => {
      console.log(response);
      return eatMeal();
    })
    .then((response) => {
      console.log(response);
      return watchMovie();
    })
    .then((res) => {
      console.log(res);
      return eatPopCorn();
    })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => console.log(err));
  // 1 - 2 - 3 - 4
});

const getId = () => {
  return new Promise((resolve) => {
    let id = "123";

    setTimeout(() => {
      resolve(id);
    }, 1000);
  });
};

const getUsernameById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`ID: ${id} olan kullanıcı getirildi.`);
    }, 3000);
  });
};

// Çalışmayacak:
// getId().then(res => id = res)
// getUsernameById(id).then((res) => console.log(res));

// Önce id alınıp sonra username id ile alındığı için çalışacak:
getId()
  .then((res) => getUsernameById(res))
  .then((res) => console.log(res));
