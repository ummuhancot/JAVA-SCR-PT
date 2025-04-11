//============== js ile dökümana ulaşma ============
console.log(document);
//dom (document object model)
//document javaScript in html e ulaşmasını saglar.
//document(obje olduğu anlamına gelir . yazınca birseyler cıkarsa)

//html kısmındaki h1 e ulaşma 
//querySelector = arama yapılan yer
console.log(document);

console.log(document.querySelector("h1"));
console.log(document.querySelector("#navbar"));
console.log(document.querySelector(".unordered-list"));
console.log(document.querySelector("ul.unordered-list > li:nth-child(2)"));

//Aynı isimli p#para elementine ulaşmak için
console.log(document.querySelector("p#para"))//sadece ilk karşılaştığı p#para yı getirir.

const pElements= document.querySelectorAll("p#para");
console.log(pElements);
//Array elementlere dönüştürebiliyoruz 
console.log(pElements[0]);//birinci p#para yı getirir.
console.log(pElements[1]);//ikinci p#para yı getirir.
console.log(pElements[2]);//ücüncü p#para yı getirir.


console.log(document.querySelectorAll("p#para"))//bütün p#para yi getirir.