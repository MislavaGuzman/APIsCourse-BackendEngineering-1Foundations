console.log("---Example A: Creating & Accessing");

export function Access() {
    const apiEndpoints: string[] = ["/user", "/product", "/orders"];

    const extractedId: number[] = [102, 103, 104];
    console.log(`Numerical array before modification ${extractedId[1]}`);
    // Access the first element (Index 0)
    console.log(`First Endpoint to hit: ${apiEndpoints[0]}`);
    console.log(`Third Endpoint to hit: ${apiEndpoints[2]}`);

    // Modification
    extractedId[1] = 404
    console.log(`New Id ${extractedId[1]}`);

    // 
    apiEndpoints[1] = `/skus`;
    console.log(apiEndpoints[1]);
 }