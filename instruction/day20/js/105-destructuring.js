// Destructuring arraylerde item, objectlerde propertyleri tek tek almamıza yarayan yapıdır.

// OBJECT
// Objectleri destructure ederken kullanılan değişkenler ile object'in keylerinin ismi birebir aynı olmalıdır.

const age = 20;

const myObject = {
  firstName: "John",
  lastName: "Doe",
  // middleName: "Ali",
  age: 50,
  eyeColor: "mavi",
};

const myString = `Benim adım ${myObject.firstName} ${myObject.lastName}. Yaşım ${myObject.age} ve göz rengim ${myObject.eyeColor}.`;

console.log(myString);

// Global'de olan bir identifier ile objenin içerisinden çıkardığımız bir key aynı ise : kullanarak yeni isim verebiliriz:
const { firstName, lastName, age: objectAge, eyeColor } = myObject;

const myString2 = `Benim adım ${firstName} ${lastName}. Yaşım ${objectAge} ve göz rengim ${eyeColor}.`;
console.log(myString2);

// Eğer bir key destructure edilen object'te bulunmuyorsa ve default bir değer verilmesi gerekiyorsa aşağıdaki yapı kullanılır.
const { middleName = "Jefferson" } = myObject;
console.log(middleName);

const user = {
  name: "Tom",
  address: {
    city: "İzmir",
    country: "Türkiye",
  },
};
// İçiçe geçmiş object'ler için destructure aşağıdaki şekilde yapılabilir:
const {
  name,
  address,
  address: { city, country },
} = user;
console.log(name, address, city, country);

// ARRAY
// Arrayleri destructure ederken kullanılan değişkenlerin isminin önemi yoktur. Değişkenler arrayin indexlerine göre sıralanırlar.

const myArray = ["Mercedes", "BMW", "Audi"];

const myString3 = `Benim ${myArray[0]}'im var, ancak ${myArray[1]} ve ${myArray[2]}'m yok.`;

console.log(myString3);

//index  0    1    2
const [mer, bmw, aud] = myArray;

const myString4 = `Benim ${mer}'im var, ancak ${bmw} ve ${aud}'m yok.`;

console.log(myString4);

const myArray2 = [1, 2, 3, 4, 5];

// Eğer array destructure ederken bazı sayıları atlamak istiyorsak aşağıdaki gibi virgüllerden yararlanabiliriz.
const [bir, , üç, , beş] = myArray2;

myArray2[myArray2.length - 1] = 10; // en son elemanı almak için bir algoritma son elemanı değiştirdik

console.log(bir, üç, beş);

const menu = ["burger", "pizza", "milkshake", "tiramusu"];

// Rest operator sayesinde kalan elementleri tek bir array'de toplayabiliriz.
const [burger, pizza, ...paket] = menu;

console.log(burger, pizza);
console.log(menu);
console.log(paket);

// FUNCTION

/* bu fountion .
* function printUserInfo(obj) {
* console.log(firstName, lastName);
*} 
*/
//destructure edilerek çağrılabilir.
function printUserInfo({ firstName, lastName }) {
  console.log(firstName, lastName);
}

const admin = {
  firstName: "John",
  lastName: "Doe",
};

printUserInfo(admin);
