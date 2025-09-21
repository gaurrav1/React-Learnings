function sum(arr: number[]): number

function sum(a: number, b: number): number

function sum(a: number | number[], b?: number): number {
    if (Array.isArray(a)) {
        return a.reduce((acc, curr) => acc + curr, 0)
    }
    if (typeof b === 'number') {
        return a + b
    }
    throw new Error('Invalid arguments')
}

// Function overloads allow you to define multiple function signatures for a single function implementation.
// This is useful when you want a function to handle different types or numbers of arguments in a type-safe manner.
// In the above example, we have defined two overloads for the sum function:
// 1. The first overload takes two numbers as arguments and returns their sum.
// 2. The second overload takes an array of numbers and returns the sum of all elements in the array.
// The actual implementation of the sum function can handle both cases, but TypeScript will enforce the correct usage based on the defined overloads.
// Note that the implementation signature (the one with the actual function body) is not visible to the callers of the function.
// They can only see and use the overload signatures.

// Example usages:

const s1 = sum([1, 2])
const s2 = sum(1, 2)
console.log(s1, s2)

// const s3 = sum([1, 2], 3) // Error: No overload matches this call.
// const s4 = sum(1) // Error: No overload matches this call.