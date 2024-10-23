function divideNumbers(a, b) {
    try {
        // Try to perform the division
        if (b === 0) {
            // Throw an error if trying to divide by zero
            throw new Error("Cannot divide by zero!");
        }
        const result = a / b; // Perform the division
        console.log(`Result: ${result}`); // Print the result
    } catch (error) {
        // Catch and handle the error
        console.log(`Error: ${error.message}`); // Print the error message
    } finally {
        // This block will run no matter what
        console.log("Execution finished."); // Indicate that the execution is done
    }
}

// Test the function
divideNumbers(10, 2); // Valid division
divideNumbers(10, 0); // Division by zero
