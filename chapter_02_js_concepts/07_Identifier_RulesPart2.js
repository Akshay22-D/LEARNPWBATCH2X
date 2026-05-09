// Identifier Naming Case Examples

// 1. camelCase: common for variables and functions in JavaScript
var camelCaseExample = "camel case example";
function sayHelloWorld() {
    return "Hello World";
}

// 2. PascalCase: common for constructor functions and class names
function Person(name) {
    this.name = name;
}
var personInstance = new Person("Akshay");

// 3. snake_case: often used in constants or older naming styles
var snake_case_example = "snake case example";

// 4. UPPER_CASE_SNAKE: common for constants
var MAX_USERS = 100;
var API_KEY = "ABC123";

// 5. kebab-case: not allowed as a JavaScript identifier
// The following are invalid and will cause syntax errors:
// var kebab-case = "invalid";
// var my-variable = 10;

// 6. Mixed usage examples with valid identifiers
var userName = "Akshay";       // camelCase
var UserEmail = "akshay@example.com"; // PascalCase
var user_address = "Delhi";    // snake_case
var TOTAL_COUNT = 50;           // UPPER_CASE_SNAKE

console.log("camelCaseExample:", camelCaseExample);
console.log("sayHelloWorld():", sayHelloWorld());
console.log("personInstance.name:", personInstance.name);
console.log("snake_case_example:", snake_case_example);
console.log("MAX_USERS:", MAX_USERS);
console.log("API_KEY:", API_KEY);
console.log("userName:", userName);
console.log("UserEmail:", UserEmail);
console.log("user_address:", user_address);
console.log("TOTAL_COUNT:", TOTAL_COUNT);
