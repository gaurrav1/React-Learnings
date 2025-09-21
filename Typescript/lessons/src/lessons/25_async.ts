function wait(duration: number): Promise<string> {
    return new Promise<string>(resolve => {
        setTimeout(() => resolve("Hi!"), duration);
    });
}

// async function wait(duration: number): Promise<any> {
//     return await fetch("Anything")
// }

wait(1000)
    .then(value => console.log(value))

// Async/Await is a way to handle asynchronous operations in JavaScript and TypeScript.
// It returns a type of Promise.
// The async keyword is used to declare an asynchronous function, which automatically returns a Promise.
// The await keyword is used to pause the execution of the async function until the Promise is resolved.
// This allows for writing asynchronous code in a more synchronous and readable manner.