var v = 10;
let l = 30;
const c = 30;

var browser = "chrome";
var browser = "firefox"; //redeclaration allowed
browser = "edge"; // reasssignment allowed

//for , function
var testCases = ["login", "logout", "signup"];

for (var i = 0; i < testCases.length; i++) {
    console.log("Running test:", testCases[i]);
}

console.log("loop counter leaked outside:", i);

function say() {
    console.log("Hi from function");
}

say();