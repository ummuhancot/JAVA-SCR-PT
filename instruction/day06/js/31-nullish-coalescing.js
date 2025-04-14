console.log(null ?? "nul değil");
console.log("nul değil" ?? null);

console.log(undefined ?? "undefined değil");
console.log("undefined değil" ?? undefined);

console.log("" ?? "boş");
console.log(false ?? "false");

//veya mantığıyla calışır null ve undefined de oluyor sadece
console.log(null ?? undefined);//undefined
console.log(undefined ?? null);//null

//------------------------------
console.log(null ?? "null değil");
console.log("null değil" ?? null);

console.log(undefined ?? "undefined değil");
console.log("undefined değil" ?? undefined);

console.log(false ?? "");
console.log(null ?? undefined); // undefined
console.log(undefined ?? null); // null