// ==========================================
// TOPIC: Truthy and Falsy Values
// ==========================================


// ==========================================
// TASKS (Complete during/after class)
// ==========================================

// TASK 1: You are writing input validation middleware for a user profile endpoint.
// 1. Declare an explicitly typed variable 'middleName' with the value null (type: string | null).
// 2. Write an 'if / else' check using truthiness:
//    - If 'middleName' is truthy, log: `Profile: Middle name is set to '${middleName}'.`
//    - Else, log: "Profile: No middle name provided."
// Write your code below:



// TASK 2 (API Context): You are preparing a JSON response summary for a dashboard endpoint.
// Convert the following variables into explicit booleans using the '!!' operator:
const dbApiKey: string | undefined = "sk_live_998877";
const unreadNotificationsCount: number = 0;

// 1. Declare 'isKeyConfigured' (boolean) by casting 'dbApiKey'.
// 2. Declare 'hasUnreadNotifications' (boolean) by casting 'unreadNotificationsCount'.
// 3. Log both results.
// Write your code below:



// TASK 3 (The Breakdown): Un-comment the block below.
// Notice the bug: The developer assumes 'foundUsers' will be falsy if the database returns 0 records.
// But empty arrays '[]' are TRUTHY in JavaScript!
// Fix the bug so it correctly logs "No users found" when the array is empty.
// const foundUsers: string[] = [];
// if (foundUsers) {
//   console.log("Users retrieved successfully.");
// } else {
//   console.log("No users found in database.");
// }