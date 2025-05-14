// const promise1 = () => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve("Task 3");
//         }, 2000);
//     })
// }

// async function startPromise(){

//     console.log("Task 2");
//     // promise1().then(res => console.log(res)).catch(err => console.log(err))

//     try {

//         const response = await promise1();

//         console.log(response);

//         console.log("Task 4");

//         randomFunc(response)
//     } catch (error) {
//     console.log(err);
//     }
// }

// console.log("Task 1");
// startPromise();
// console.log("Task 5");

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

const startFunctions = async () => {
  const response1 = await giveOrder();

  console.log(response1);

  const response2 = await eatMeal();

  console.log(response2);

  const response3 = await watchMovie();

  console.log(response3);

  const response4 = await eatPopCorn();

  console.log(response4);
};

startFunctions();

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

const executeInOrder = async function () {
  const id = await getId();
  const username = await getUsernameById(id);
  console.log(username);
};

executeInOrder();
