// All number types supported in JavaScript

// JavaScript primarily uses the 'number' type (64-bit floating-point IEEE 754)
// It can represent integers, decimals, scientific notation, etc.

// Integers
let intNum = 42;
console.log(intNum); // 42
console.log(typeof intNum); // 'number'

// Floating-point numbers
let floatNum = 3.14;
console.log(floatNum); // 3.14

// Scientific notation
let sciNum = 1.23e5; // 123000
console.log(sciNum); // 123000

// Negative numbers
let negNum = -42;
console.log(negNum); // -42

// Special values
let inf = Infinity;
console.log(inf); // Infinity

let negInf = -Infinity;
console.log(negInf); // -Infinity

let notANumber = NaN;
console.log(notANumber); // NaN
console.log(typeof notANumber); // 'number'

// BigInt: For arbitrary-precision integers (ES2020+)
let bigIntNum = 123456789012345678901234567890n;
console.log(bigIntNum); // 123456789012345678901234567890n
console.log(typeof bigIntNum); // 'bigint'

// Note: BigInt cannot be mixed with regular numbers in operations
// let mixed = bigIntNum + intNum; // Error: Cannot mix BigInt and other types

// Hexadecimal, Octal, Binary literals (all 'number' type)
let hexNum = 0xFF; // 255
console.log(hexNum); // 255

let octNum = 0o77; // 63
console.log(octNum); // 63

let binNum = 0b1111; // 15
console.log(binNum); // 15