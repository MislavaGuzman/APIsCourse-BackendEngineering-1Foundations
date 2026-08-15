// ==========================================
// Null & Undefined
// ==========================================
let unintializedToken; // Declared, but no value assigned
let clearToken = null; // Explicity set to empty
//console.log(`Unitialized: ${unintializedToken}` )
//console.log(`Cleared: ${clearToken}`);
//

// Nullish Coalescing (??) vs Logical Operator (||)
const userRetryLimit = 0; // 0 is falsy, but it's a valid number

// || falls back because 0 is falsy  OR
const badLimit = userRetryLimit || 3;

// ?? Only falls back because 0 is falsy
const goodLimit = userRetryLimit ?? 3;



//console.log(`Bad Limit (||): ${badLimit}`); 
//
//console.log(`Good Limit (??): ${goodLimit}`);



// Example C: Optional Chanining (?.) 
const apiResponse  = {
    statuts: 200,
    data: {
        user: { name: "Alice"}
    }
}

const emptyResponse = {
    status: 404,  data: null
}

// Encadenar propiedades de forma segura 

console.log(apiResponse.data?.user?.name);

console.log(emptyResponse.data?.user?.name);



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