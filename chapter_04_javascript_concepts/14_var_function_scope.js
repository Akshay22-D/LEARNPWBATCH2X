var b = 90;
function printHello() {
    console.log("hello");
    var a = 20; //local scope
    console.log(a);
    if (true) {
        var a = 30;
        console.log(a); //30
    }
    console.log("F -->", a)
}

console.log("G -->", b);
printHello();
// result is 30 because var always picks latest values hence it is a baddie