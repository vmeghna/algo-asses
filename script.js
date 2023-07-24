// 1.Write a JavaScript function that counts the number of vowels in each string.

function countVowel(str) {
  // find the count of vowels
  const count = str.match(/[aeiou]/gi).length;
  // return number of vowels
  return count;
}

// take input
const string = "skill safari";

const result = countVowel(string);

console.log(result);

// 2.Create a program that prints the first 10 Fibonacci numbers.
// take input from the user
const number = 5;
let n1 = 0,
  n2 = 1,
  nextTerm;

console.log("Fibonacci Series:");

for (let i = 1; i <= number; i++) {
  console.log(n1);
  nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm;
}

// 3.Create a program that checks if a given number is a power of two.
function power_of_2(n) {
  if (typeof n !== "number") return "Not a number";

  return n && (n & (n - 1)) === 0;
}

console.log(power_of_2(16));

// 4.Create a program that sorts an array of numbers in ascending order.
let city = ["China", "Bhutan", "Paris", "Kashmir"];
let sortedArray = city.sort();
console.log(sortedArray);

// 5.Write a function that finds the second smallest element in an array.
let num = [4, 12, 99, 1, 3, 123, 5];
let sort = num.sort((a, b) => {
  return a - b;
});
console.log(sort[1]);

// 6.Create a program that checks if a given string is a valid email address.
function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}
const email1 = "meg.vas@example.com";
const email2 = "invalid.email";
console.log(isValidEmail(email1));
console.log(isValidEmail(email2));

// 7.Write a JavaScript function to reverse a string.
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Example usage:
const originalString = "Hello, World!";
const reversedString = reverseString(originalString);
console.log(reversedString);

// 8. Write a function to find the GCD (Greatest Common Divisor) of two numbers.
function findGCD(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return Math.abs(a);
}

const num1 = 48;
const num2 = 18;
const gcd = findGCD(num1, num2);
console.log(gcd);

// 9.Write a function that checks if all elements in an array are the same.
function areAllElementsSame(arr) {
  if (arr.length === 0) {
    return true;
  }
  const firstElement = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== firstElement) {
      return false;
    }
  }
  return true;
}

const array1 = [3, 3, 3, 3];
const array2 = [2, 4, 2, 2];
console.log(areAllElementsSame(array1));
console.log(areAllElementsSame(array2));

// 10.Create a program that calculates the sum of all multiples of 3 and 5 below 1000.
function multiples(number) {
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(multiples(10));
console.log(multiples(5));
