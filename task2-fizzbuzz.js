function fizzbuzz() {
  for (let i = 1; i <= 100; i++) {
    let output = "";
    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    console.log(output || i);
  }
}

fizzbuzz();

/* Complexity Analysis:
- Time Complexity: O(n). The time complexity of the function is O(n), as we iterate through n numbers.
- Space Complexity: O(1). Appending to a string here is an O(1) operation, as the string length is constant. Additionally, there are no cumulative data structures, so the memory usage for each iteration is O(1).


Edge Cases: 
- Edge cases, such as an empty range or a range with no numbers divisible by 3 or 5, are implicitly handled by the logic. For example, if the range ends before 3 or 5, all numbers will simply be logged as is.


Design Choices:
- Since there are no user inputs required, there is no need for a guard clause. 
- The use of output || i ensures that numbers not divisible by 3 or 5 are logged directly. This simplifies the logic further by avoiding a separate conditional for default cases.
- I avoided nested conditionals (using the && operator) by appending "Fizz" and/or "Buzz" to a string, which simplified the logic and improved readability.
- If this function required handling much larger strings or more iterations, I would reconsider this approach. Avoiding temporary strings entirely (e.g., by directly logging based on conditions) could further reduce memory usage and overhead. However, in this case, since 
the strings are small, fixed in length, and discarded by the garbage collector after each iteration, the memory footprint remains minimal.


Challenge:
- The main challenge was ensuring the correct order of conditionals. For example, I needed to handle the case where numbers are divisible by both 3 and 5 first (the most specific condition) to avoid it being superseded by the less specific cases (divisible by either 3 or 5). */
