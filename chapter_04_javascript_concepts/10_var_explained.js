var a = 10;

console.log(a); //global scope

function printHello() {
    console.log("Hello TA");
    var a = 20; //local scope
    console.log(a);
}

printHello();