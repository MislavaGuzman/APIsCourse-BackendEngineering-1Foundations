// ==========================================
// Numbers & Mathematical Operators
// ==========================================

/**
 * 
 * + - * /
 * %
 * Math
 * NaN 
 * Infinity
 */
// Example A: Basic Operations & Modulo

const totalItems = 25;
const itemsPerPage = 10; 

const totalPages = totalItems / itemsPerPage
console.log(`Total Pages (Exact): ${totalPages} `);



const remainder = totalItems % itemsPerPage;
console.log(`Items per page ${remainder}`);

// Example B: The Math Object

const price = 19.99;
console.log(`Rounded price: ${Math.round(price)}`);
console.log(`Floor Price: ${Math.floor(price)}`)

// Example C: Exponentiation
const base = 2;
const exponent = 3; 

console.log(`2 to the power of 3 is: ${base ** exponent }`);

const random = Math.random()
console.log(`Random ${random}`);


// ==========================================
//  TASKS
// ==========================================

// Task 1: Calculate the area of a circle. 
// Given the radius, use the Math object to get Pi and use the exponentiation operator to find the area. 
// The mathematical formula is: $A = \pi r^2$
const radius = 5;

// TODO: Write your code here to calculate the area and log it to the console.





// Task 2: Check if a dynamic user ID is even or odd.
// Use the Modulo operator (%) to determine if the number is perfectly divisible by 2.
const userId = 402;

// TODO: Write your code here to check if the ID is even, save it in a boolean variable, and log it to the console.