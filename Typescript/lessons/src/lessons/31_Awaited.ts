type Async = Promise<string>

// type Value = Awaited<Async>
type Value = Awaited<ReturnType<typeof fetchData>>
// type Value = string

const fetchData = async (): Async => {
    return "Data fetched"
}

const result: Value = await fetchData()
console.log(result) // Output: Data fetched

// The Awaited utility type is used to extract the resolved type from a Promise.
// This is particularly useful when working with asynchronous functions that return Promises.
// By using Awaited, you can easily determine the type of value that will be available once the Promise is resolved, allowing for better type safety and code clarity in asynchronous operations.