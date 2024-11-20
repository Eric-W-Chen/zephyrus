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

/* I found this task straightforward. Since no additional data structures or variables are necessary, the space complexity is O(1). Similarly, the time complexity is also O(1) as the function only performs a few simple checks and a modulo operation.

The most challenging part was identifying edge cases and determining what should be considered invalid input. To ensure the number can be accurately classified as even or odd, I implemented the following criteria:
1. The input must be of type "number."
2. The number must be finite (handled by `isFinite`) and cannot be NaN (both `isFinite` and `isInteger` address this).
3. The input must be an integer (not a double or float) to correctly determine even or odd. */
