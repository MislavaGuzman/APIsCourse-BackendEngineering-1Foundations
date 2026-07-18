// ==========================================
// Strings & String Methods
// ==========================================
/*

*/

// Example A: Template Literals & Basic Methods
const courseFocus = "  backend engineering ";
const language = "TypeScript";

// Using .trim() to clean the string, .toUpperCase(), and template literals
const welcomeMessage = `Welcome to the ${courseFocus.trim().toUpperCase()} course using ${language}!`;
//console.log(welcomeMessage); 


// Example B: Searching and Splitting Strings

const techStack = "Node.js, Express, TypeScript, Oracle"
//Search strings
const usesExpress = techStack.includes("Python"); 

//console.log(`Uses Express ${usesExpress}` );

const stackArray = techStack.split(", ");
console.log(stackArray);

// ==========================================
//  TASKS
// ==========================================

// Task 1: Clean up the following user input by removing extra spaces at the ends and converting the entire string to lowercase.
const messyInput = "   RESTful APIs are AWESOME   ";

// TODO: Write your code here to clean the input and log it to the console.




// Task 2: Extract the domain name from the email address and check if it starts with the word "gmail".
const email = "student@gmail.com";

// TODO: Write your code here to extract the domain, check if it starts with "gmail", and log the results to the console.