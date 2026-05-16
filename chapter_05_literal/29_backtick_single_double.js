// Differences between backticks, single quotes, and double quotes in JavaScript strings

// Single quotes: Basic string literal, no interpolation
let single = 'Hello World';
console.log(single); // Hello World

// Double quotes: Same as single quotes, interchangeable
let double = "Hello World";
console.log(double); // Hello World

// Backticks: Template literal, supports interpolation and multi-line
let name = 'Alice';
let backtick = `Hello ${name}! This is a
multi-line string.`;
console.log(backtick); // Hello Alice! This is a
// multi-line string.
