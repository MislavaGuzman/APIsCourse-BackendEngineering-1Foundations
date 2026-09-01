// ==========================================
// TOPIC: The Switch Statement
// ==========================================
//onst httpMethod: string = "POST"

export function checkStatus(httpMethod: string): void {
    switch(httpMethod) {
    case "GET":
        console.log("Routing: Fetching resource list...");
        break;
    case "PUT": 
        console.log("Routing: Modify the resource.")
        break;

    default: 
        console.log(`Routing Error: 405 Method '${httpMethod}' Not Allowed`)
    }

    
}
// ==========================================
// STUDENT TASKS (Complete during/after class)
// ==========================================
// TASK 1: You are building an API response formatter based on database transaction status.
// 1. Declare an explicitly typed string variable 'txStatus' with the value "PENDING".
// 2. Write a 'switch' statement checking 'text':
//    - Case "SUCCESS": Log "200 OK: Transaction completed successfully."
//    - Case "PENDING": Log "202 Accepted: Transaction is processing in background."
//    - Case "FAILED": Log "422 Unprocessable Entity: Transaction was declined."
//    - Default: Log "500 Internal Server Error: Unknown transaction state."
// Write your code below

// Void (vacío) no retorna un valor o un tipo específicoexport
export function estadoValidacion(text: string): void {
    switch (text) {
        case "SUCCESS":
            console.log("200 OK: Transaction completed successfully.");
            break;
        case "PENDING":
            console.log("202 Accepted: Transaction is processing in background.");
            break;
        case "FAILED":
            console.log("422 Unprocessable Entity: Transaction was declined.");
            break;
       default:
            console.log("500 Internal Server Error: Unknown transaction state.");
    }

}

// ==========================================
// TASKS (Complete during/after class)
// ==========================================

// TASK 1: You are building an API response formatter based on database transaction status.
// 1. Declare an explicitly typed string variable 'txStatus' with the value "PENDING".
// 2. Write a 'switch' statement checking 'txStatus':
//    - Case "SUCCESS": Log "200 OK: Transaction completed successfully."
//    - Case "PENDING": Log "202 Accepted: Transaction is processing in background."
//    - Case "FAILED": Log "422 Unprocessable Entity: Transaction was declined."
//    - Default: Log "500 Internal Server Error: Unknown transaction state."
// Write your code below:



// TASK 2 (API Context): You are processing incoming notification events from a webhook.
// You have a variable 'eventType' representing the event name.
const eventType: string = "USER_CREATED";

// Write a switch statement for 'eventType':
// - For "USER_CREATED" or "USER_UPDATED", log "Webhook: Syncing user record with analytics cache."
// - For "USER_DELETED", log "Webhook: Purging user data from cache."
// - For any other event, log "Webhook: Event ignored."
// Write your code below:



// TASK 3 (The Breakdown): Un-comment the block below.
// Notice the logical bug: when 'environment' is "DEV", it logs BOTH "DEV" and "STAGING" because 'break' is missing.
// Fix the bug so each case executes independently.
// const environment: string = "DEV";
// switch (environment) {
//   case "DEV":
//     console.log("Config: Loading local .env file");
//   case "STAGING":
//     console.log("Config: Connecting to staging DB cluster");
//     break;
// }