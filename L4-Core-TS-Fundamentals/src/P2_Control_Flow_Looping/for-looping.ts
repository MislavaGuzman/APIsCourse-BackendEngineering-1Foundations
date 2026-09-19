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


// Task 1: Use a 'for' loop to iterate over an array of extracted user IDs and format them into a database query string.
  //  const userIds: number[] = [101, 102, 103, 104];
  // Declare a for loop 
  // Transverse the array 
  // In a console log show the following message  SELECT * FROM users WHERE id = 
  /// declare a query const 
  // And display the id in the array.

export function ejemploApi() {
    const userIds: number[] = [101, 102, 103, 104];
    for (let i = 0; i < userIds.length; i++ ) {
        
        const query = `SELECT * FROM users WHERE id = ${userIds[i]}`;
        console.log(`Executing ${query}`);

    }

}
