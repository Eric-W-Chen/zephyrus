function evenOrOdd(n) {
  // Guard clause
  if (typeof n !== "number" || !Number.isFinite(n) || !Number.isInteger(n)) {
    console.error("Please input a valid number");
    return;
  }

  return n % 2 === 0 ? "Even" : "Odd";
}

console.log(evenOrOdd(3));
console.log(evenOrOdd(8));

/* Complexity Analysis:
- Time Complexity: O(1). The function performs only a few simple checks and a modulo operation.
- Space Complexity: O(1). No additional data structures are used.


Design Choices:
- A guard clause handles invalid input to ensure the function can process numbers accurately.
- The main logic uses a ternary operator (`n % 2 === 0 ? "Even" : "Odd"`) for brevity and readability.


Edge Cases:
- Non-integer numbers (e.g., 3.5) are rejected.
- Non-numeric inputs (e.g., strings, arrays) are rejected.
- Special numeric cases like `Infinity` and `NaN` are rejected. 


Challenge:
- The most challenging part was identifying edge cases and determining what should be considered invalid input. To ensure the number can be accurately classified as even or odd, I implemented the following criteria:
1. The input must be of type "number."
2. The number must be finite (handled by `isFinite`) and cannot be NaN (both `isFinite` and `isInteger` address this).
3. The input must be an integer (not a double or float) to correctly determine even or odd. */
