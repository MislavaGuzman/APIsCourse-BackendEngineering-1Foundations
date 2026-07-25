// ==========================================
// TOPIC: Conditional Statements
// ==========================================

// --- API Status Mapper & Guard Clause Pattern ---


// ==========================================
// TASKS (Complete during/after class)
// ==========================================

// TASK 1: You are writing role-based access control (RBAC) middleware for an API.
// 1. Declare an explicitly typed string variable named 'userRole' with the value "editor".
// 2. Write an 'if / else if / else' block:
//    - If 'userRole' is "admin", log "Access Granted: Full system permissions."
//    - Else if 'userRole' is "editor", log "Access Granted: Write permissions."
//    - Else if 'userRole' is "viewer", log "Access Granted: Read-only permissions."
//    - Otherwise, log "Access Denied: Invalid role."
// Write your code below:



// TASK 2 (API Context): You are building a rate-limiting checker.
// You have a variable 'requestCount' representing requests made by an IP address in 1 minute.
const requestCount: number = 105;
const maxAllowedRequests: number = 100;

// Write a conditional statement:
// If 'requestCount' exceeds 'maxAllowedRequests', declare a string 'responseHeader' set to "429 Too Many Requests".
// Otherwise, set 'responseHeader' to "200 OK".
// Log the 'responseHeader' to the console.
// Write your code below:



// TASK 3 (The Breakdown): Un-comment the block below.
// Look at the error TS flags. Fix the condition using strict equality (===) and fix the type mismatch bug.
// const incomingPort: string = "8080";
// if (incomingPort == 8080) {
//   console.log("Running on standard HTTP port.");
// }