// Difference between null and undefined in JavaScript

// undefined: Represents a variable declared but not assigned a value
let x;
console.log(x); // undefined
console.log(typeof x); // 'undefined'

// undefined: Accessing a non-existent property
let obj = {};
console.log(obj.missingProp); // undefined

// null: Intentional absence of any object value
let y = null;
console.log(y); // null
console.log(typeof y); // 'object'

// Comparison
console.log(null == undefined); // true (loose equality)
console.log(null === undefined); // false (strict equality)

// Both are falsy
console.log(!x); // true
console.log(!y); // true