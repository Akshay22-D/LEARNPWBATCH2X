// 38_Confusing_Comparision.js
// Confusing & Tricky Comparison Cases with == and ===

console.log("===== CONFUSING LOOSE EQUALITY (==) CASES =====");

// Case 1: Type Coercion Madness
console.log("\n--- Case 1: String to Number Coercion ---");
console.log(0 == "0");           // true (string "0" converted to number 0)
console.log(0 == "");            // true (empty string converts to 0)
console.log("0" == "");          // false (string comparison, both are strings)
console.log(0 == false);         // true (false converts to 0)
console.log("" == false);        // true (both convert to 0)
console.log("0" == false);       // true (false -> 0, "0" -> 0)

// Case 2: Null and Undefined
console.log("\n--- Case 2: Null vs Undefined ---");
console.log(null == undefined);  // true (special case in JS)
console.log(null === undefined); // false (different types)
console.log(null == 0);          // false (null doesn't convert to 0)
console.log(undefined == 0);     // false (undefined doesn't convert to 0)
console.log(null == false);      // false
console.log(undefined == false); // false

// Case 3: Boolean Coercion
console.log("\n--- Case 3: Boolean Coercion ---");
console.log(true == 1);          // true (true converts to 1)
console.log(false == 0);         // true (false converts to 0)
console.log(true == "1");        // true (true -> 1, "1" -> 1)
console.log(false == "");        // true (false -> 0, "" -> 0)
console.log(true == 2);          // false (true -> 1, not equal to 2)
console.log(true == "true");     // false (true -> 1, "true" -> NaN)

// Case 4: NaN - The Unique One
console.log("\n--- Case 4: NaN Behavior ---");
console.log(NaN == NaN);         // false (NaN is never equal to anything, including itself!)
console.log(NaN === NaN);        // false (same as ==)
console.log(isNaN(NaN));         // true (this is how to check for NaN)
console.log(Number.isNaN(NaN));  // true (better way to check)

// Case 5: Whitespace and String Conversion
console.log("\n--- Case 5: Whitespace in Strings ---");
console.log(" 0 " == 0);         // true (whitespace trimmed during conversion)
console.log("  " == 0);          // true (space-only string converts to 0)
console.log(" " == false);       // true (space converts to 0)
console.log("0.0" == 0);         // true (string "0.0" -> number 0)

// Case 6: Arrays and Objects (Reference vs Value)
console.log("\n--- Case 6: Arrays/Objects with == ---");
console.log([] == []);           // false (different array objects)
console.log([] == "");           // true (array converts to empty string)
console.log([0] == 0);           // true (array [0] -> "0" -> 0)
console.log([1] == 1);           // true
console.log([1, 2] == "1,2");     // true (array converts to comma-separated string)
console.log({} == {});           // false (different objects)
console.log({} == "[object Object]"); // false

// Case 7: The Transitivity Broken!
console.log("\n--- Case 7: Transitivity is Broken ---");
console.log(0 == "");            // true
console.log("" == "0");          // false
console.log(0 == "0");           // true
// So: 0 == "" AND 0 == "0" BUT "" != "0"  ⚠️ Transitivity BROKEN!

// Case 8: String Concatenation vs Comparison
console.log("\n--- Case 8: Different Interpretations ---");
console.log(1 + 2 == 3);         // true (addition first: 1 + 2 = 3)
console.log("1" + 2 == "12");    // true (concatenation: "1" + 2 = "12")
console.log(1 + "2" == "12");    // true (concatenation: 1 + "2" = "12")
console.log(1 + 2 == "3");       // true (addition: 1 + 2 = 3, then compare with "3" -> 3)

console.log("\n===== STRICT EQUALITY (===) - MORE PREDICTABLE =====");

// With ===, these are all false (type must match exactly)
console.log(0 === "0");          // false (different types)
console.log(true === 1);         // false (different types)
console.log(null === undefined); // false (different types)
console.log([] === []);          // false (different references)
console.log("" === false);       // false (different types)
console.log(0 === false);        // false (different types)

console.log("\n===== KEY TAKEAWAY =====");
console.log("❌ AVOID using == for comparisons");
console.log("✓ ALWAYS use === for comparisons");
console.log("Type coercion with == can lead to unexpected and confusing results!");
console.log("Use === to compare both value AND type explicitly.");
