function func(data: unknown) {
    if (data !== null && typeof data === "object" && "name" in data) {
        // Here, TypeScript knows that data is an object with a name property
        console.log(data.name); // Safe to access name property
    } else {
        console.log("Data is not an object with a name property");
        // Handle other types of data appropriately
    }

    if (typeof data === "string") {
        // Here, TypeScript knows that data is a string
        console.log(data.toUpperCase()); // Safe to call string methods
    } else {
        console.log("Data is not a string");
        // Handle other types of data appropriately
    }

    if (Array.isArray(data)) {
        // Here, TypeScript knows that data is an array
        console.log(data.length); // Safe to access array properties
    } else {
        console.log("Data is not an array");
        // Handle other types of data appropriately
    }
}

// With the unknown type, you must perform type checks before using the value.
// This ensures type safety and prevents runtime errors.
func({ name: "Alice" }); // Output: Alice
func("Hello, World!"); // Output: HELLO, WORLD!
func([1, 2, 3]); // Output: 3