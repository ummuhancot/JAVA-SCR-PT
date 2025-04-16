// Yaş hesaplayan program yapınız.

function calculateAge() {
  console.log(`Benim yaşım: ${2025 - 1980}`);
}

calculateAge();

// ====================================

function calculateAge2(dateOfBirth) {
  console.log(`Benim yaşım: ${2025 - dateOfBirth}`);
}

calculateAge2(2000);
calculateAge2(1990);

// ====================================

function calculateAge3(dateOfBirth) {
  return `Benim yaşım: ${2025 - dateOfBirth}`;
}

let userAge = calculateAge3(2001);
console.log(userAge);

// ====================================

console.log(new Date()); // Wed Apr 16 2025 16:47:43 GMT+0300 (GMT+03:00)

function calculateAge4(dateOfBirth) {
  let currentYear = new Date().getFullYear();
  return `Benim yaşım: ${currentYear - dateOfBirth}`;
}

console.log(calculateAge4(2010));

// ====================================

function calculateAge5(event) {
  // console.log(event);

  let age = calculateAge4(event);
  console.log(age);

  document.querySelector("#result").innerText = `Benim yaşım ${age}`;
}
