//false falsy
let x; //undefined
x = 0;
x = NaN;
x = -0;
x = 0n;
x = null;
x = "";
x = document.all; //kullanılmıyor artık

//===============
//true truthy
x = -10;
x = " ";
x = {}; //object 
x = []; //array
x = 5;
x = "0";
//.
//.
//.

// Mantıksal ifade olarak true ve false dışında ifadelere yer verilebilir. Bu durumda JavaScript ifadeleri truthy veya falsy olarak değerlendirir.

if(x){
    console.log(`True / truthy ${x}`);
}

if(!x){
    console.log(`False / falsy ${x}`);
}


function send(){
    let input = document.querySelector("input").value;
    console.log(input);

    if(!input){
        alert("Bu alan boş bırakılamaz.")
    }
}