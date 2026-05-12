//let - Block scoped
let a = 10;

let retryCount = 0;
retryCount = retryCount + 1;
retryCount = retryCount + 1;
console.log("retry attempt: ", retryCount);

let retryCount = 5; //SyntaxError: Identifier 'retryCount' has already been declared

//let is block scoped
if (testStatus === "pending") {
    let executionTime = 1200;
    console.log("Inside block:", executionTime); //1200
}

console.log(executionTime); //ReferenceError: executionTime is not defined

let name = "people";
name = "ceria";
// {} - Block
// if(){}
// function name(){}

//let = loyal
// var = variable / traitor

