//======================================================
// Example 1: The for Loop  - Iterating over endpoints

export function apiCall() { 
console.log("--- Extracting from Multiple Endpoints ---- ")
const apiEndpoints: string[] = ["/user", "/orders",  "/products"];

    for (let i = 0; i < apiEndpoints.length; i++ ) {
        console.log(`Extracting data from: https//api.example.com${apiEndpoints[i]}`);

    }
}

// Task 1: Use a 'for' loop to iterate over an array of extracted user IDs.

export function apiIds() {
    const userIds: number[] = [1, 2, 3, 4, 5];
    for (let i=0; i < userIds.length; i++) {
        console.log(`Extracting Ids ${userIds[i]}`);
}

    
}