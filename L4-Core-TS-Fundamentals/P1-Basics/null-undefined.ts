// ==========================================
// Null & Undefined
// ==========================================








// ==========================================
// TASKS
// ==========================================

// Task 1: Environment Variables Fallback
// We are simulating an environment variable for a server port that might be missing (undefined).
// Use the Nullish Coalescing operator (??) to assign a default port of 8080 if 'envPort' is null or undefined.
const envPort = undefined;

// TODO: Write your code here to calculate 'serverPort' and log it to the console.




// Task 2: Safe Object Access
// You received a mock payload from a third-party API, but the profile data is missing (null).
// Safely attempt to extract the user's city (payload -> profile -> address -> city) using Optional Chaining (?. ). 
const mockPayload = {
    id: 101,
    profile: null 
};

// TODO: Write your code here to safely extract the city into a variable and log it to the console.