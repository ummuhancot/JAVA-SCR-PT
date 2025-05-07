const fruits = ["Çilek", "Karpuz", "Mango", "Muz"];

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

for (let i = 0; i < fruits.length; i++) {
  console.log(i);
  console.log(fruits[i]);
}

console.log("-----------");

for (let index in fruits) {
  console.log(index);
  console.log(fruits[index]);
}

for (let key in person) {
  console.log(key);
  console.log(person[key]);
}

// İki arayın aynı inkdesine sahip değerleri toplayıp yeni bir arraye geçir.

const numbers1 = [1, 3, 5, 7];
const numbers2 = [2, 4, 6, 8];

const sumOfTwoArray = (nums1, nums2) => {
  if (!Array.isArray(nums1) || !Array.isArray(nums2)) {
    return {
      status: "error",
      message: "Array giriniz.",
    };
  }

  const summedArray = [];

  for (let num in nums1) {
    summedArray.push(nums1[num] + nums2[num]);
  }

  return summedArray;
};

console.log(sumOfTwoArray(numbers1, numbers2));
