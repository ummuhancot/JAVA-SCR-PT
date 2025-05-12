// Debugging
// 1. Hata ayıklama

document.getElementById("btn").addEventListener("click", () => {
  function sumArray(arr) {
    try {
      let sum = 0;
      for (let num of arr) {
        if (typeof num !== "number")
          throw new Error("Array elemanları number olmalıdır");

        sum += num;
      }

      return sum;
    } catch (error) {
      console.log(error.message);
    }
  }

  console.log(sumArray([3, 5, "7", 11]));
});

/*
 {
    Use IntelliSense to learn about possible attributes.
    Hover to view descriptions of existing attributes.
    For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "Launch Chrome against localhost", 
 *           "url": "http://localhost:5500", => burda host kısmını kendi serverindeki kısmı eklersin hangi serverde calışıyorsa
            "webRoot": "${workspaceFolder}"
        }
    ]
} */