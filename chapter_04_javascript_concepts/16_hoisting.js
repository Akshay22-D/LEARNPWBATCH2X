// JS Engine
//Line by line, JIT compilation

console.log("greeting");
var greeting = "hello";
console.log(greeting);

//behing the scenes
// var greeting; <-- hoisted with undefined
// console.log(greeting) <-- undefined
// greeting = "hello"; <-- assignment stays in place
// console.log("greeting"); <-- hello