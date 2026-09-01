// ==========================================
// Type Conversion and Coercion
// ==========================================

const stringNum = "10";
const actualNum = 5;
// Implicita
//console.log(`Coercion with  (+): ${stringNum + actualNum}`);
//
//
//console.log(`Coercion with (-): ${stringNum - actualNum}`);
//
//console.log(`stringNum type is: ${typeof stringNum}`); 
// Type conversion explicita

const urlParamId = "404"; 
const databaseId = Number(urlParamId)

//console.log(`Converted ID type is: ${typeof databaseId}`); 


const apiKey = "AK_23131DGASD6"
const noKey = '' // falsy 

// Double bang !!  ?? falsy 0 / ''  

console.log(`Has API Key?: ${!!apiKey}`); // true
console.log(`Has API Key?: (Empty): ${!!noKey}`); //false
// ==========================================
//  TASKS
// ==========================================

// Task 1: Pagination Parameter Conversion
// You receive a 'page' query parameter from an API request. It arrives as a string.
// Convert it to a number type, and calculate the database 'offset'.
// The formula for the offset is: page * 20.
const pageQuery = "3";

// TODO: Write your code here to convert the string, calculate the offset, and log it to the console.





// Task 2: Environment Variable Boolean Check
// Environment variables are always read as strings. 
// You have a variable that says "true", but you need an actual boolean type (true/false) to use in an if-statement.
const envMaintenanceMode = "true";

// TODO: Write your code here to check if the maintenance mode is active, save it as a STRICT boolean type, and log both the value and its type to the console.