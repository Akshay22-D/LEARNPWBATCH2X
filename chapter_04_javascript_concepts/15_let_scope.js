let b = 90;
function printHello() {
    console.log("hello");
    let a = 20; //local scope
    console.log(a);
    if (true) {
        let a = 30;
        console.log(a); //30
    }
    console.log("F -->", a)
}

console.log("G -->", b);
printHello();
// result is 30 because var always picks latest values hence it is a baddie