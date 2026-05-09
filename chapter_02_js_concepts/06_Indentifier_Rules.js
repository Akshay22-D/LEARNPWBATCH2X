// JavaScript Identifier Rules Examples

// 1. Valid identifier names
var a = 10;
var myVariable = 20;
var $price = 30;
var _count = 40;
var firstName = "Akshay";
var last_name = "Dhiman";
var user2 = "student";

// 2. Identifiers cannot start with a digit
// The following are invalid and will throw a syntax error if uncommented:
// var 1value = 50;
// var 123name = "invalid";

// 3. Identifiers can include digits after the first character
var value1 = 100;
var item2026 = "today";

// 4. Only letters, digits, underscore (_), and dollar sign ($) are allowed
// Invalid examples (uncommenting will cause errors):
// var user-name = "error";
// var total@price = 200;
// var my value = "space";

// 5. Identifiers are case-sensitive
var score = 90;
var Score = 95;

// 6. Reserved words cannot be used as identifiers
// The following are invalid identifiers:
// var for = 1;
// var function = "no";
// var return = 2;

// 7. Naming conventions (not required, but common)
var camelCaseExample = "camel case";
var PascalCaseExample = "Pascal case";
var snake_case_example = "snake case";
var UPPER_CASE_CONSTANT = 999;

console.log("a:", a);
console.log("myVariable:", myVariable);
console.log("$price:", $price);
console.log("_count:", _count);
console.log("firstName:", firstName);
console.log("last_name:", last_name);
console.log("user2:", user2);
console.log("value1:", value1);
console.log("item2026:", item2026);
console.log("score:", score);
console.log("Score:", Score);
console.log("camelCaseExample:", camelCaseExample);
console.log("PascalCaseExample:", PascalCaseExample);
console.log("snake_case_example:", snake_case_example);
console.log("UPPER_CASE_CONSTANT:", UPPER_CASE_CONSTANT);

