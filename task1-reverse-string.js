function reverseString(str) {
  // Guard clause
  if (typeof str !== "string") {
    console.error("Please input a valid string");
    return;
  }

  // Convert the string into an array (since strings are immutable in JavaScript)
  let reversedArr = str.split("");

  let left = 0,
    right = reversedArr.length - 1;

  // Use two-pointer technique to reverse the array in place
  while (left < right) {
    [reversedArr[left], reversedArr[right]] = [
      reversedArr[right],
      reversedArr[left],
    ]; // Swap characters
    left++;
    right--;
  }

  // Convert the array back into a string and return the result
  return reversedArr.join("");
}

console.log(reverseString("hello"));

/* To approach reversing a string, we had three approaches to choose from: (1.) Using JavaScript built-in methods (split, reverse, join) (2.) Manual iterative approach (3.) Two-pointer approach.
I was able to compare the time and space complexity of the different approaches to reach a conclusion on the two-pointer approach. 

With the JavaScript built-in methods approach, split() returns an array, reverse() returns another array, and join() returns the final string. While the time complexity of this approach is O(n), the multiple intermediate memory allocations make
it slightly less optimal in terms of space usage, even though the space complexity remains O(n). Since the goal was to find the most optimized approach, I decided against this method.

With the manual iterative approach, concatenating a string is less efficient because every string concatenation returns a new string in memory as strings are immutable in JavaScript. This means that the cost of copying grows with the size of the string, and ultimately
could cause a O(n^2) time complexity in the worst case. This is because each concatenation takes O(k) time as it requires copying the previous string into the new string, with k being the current length of the new string. Having to perform this operation n amount of times
causes this operation to ultimately be a O(^2) time complexity. The space complexity is still O(n), but involves unnecessary memory overhead compared to the other approaches. 

Finally, I reached the conclusion that the two-pointer approach is O(n) is the most optimized approach as its time complexity will be reliably O(n) as it iterates through each character exactly once and only performs a simple swap, which only takes O(1) time. 
Apart from the initial split(), which takes O(n) space, we only create two extra variables for the two pointers, which only takes O(1) space, and I was able to reach the conclusion that this method would reliably be the most optimized approach in terms of both time and memory. 

The main challenge was considering JavaScript's immutable string nature, which necessitated converting the string into a mutable data structure (an array). Once this was addressed, the two-pointer technique provided a clean and efficient solution. */
