function checkLength(a: string, b: number) {
    return a.length < b;
}
type Func = () => void
// type ReturnOfFunc = ReturnType<Func> // void

// ReturnType<T>
type ReturnOfLengthCheck = ReturnType<typeof checkLength>

// Parameters<T>
type Params = Parameters<typeof checkLength>
type FirstParam = Parameters<typeof checkLength>[0]
type SecondParam = Parameters<typeof checkLength>[1]
type FuncParams = Parameters<Func>

// The ReturnType and Parameters utility types are used to extract the return type and parameter types of functions, respectively.
// This is particularly useful when you want to create types based on existing functions without manually defining them.
// By using ReturnType, you can easily determine what type a function returns, and with Parameters, you can get a tuple of the types of its parameters.
// This enhances type safety and helps maintain consistency in your codebase, especially when dealing with higher-order functions or callbacks.

const result: ReturnOfLengthCheck = checkLength("Hello", 10) // boolean
const funcParams: Params = ["Hello", 10] // [string, number]
const firstParam: FirstParam = "Hello" // string
const secondParam: SecondParam = 10 // number
const funcParamsEmpty: FuncParams = [] // []

console.log(result)
console.log(funcParams)
console.log(firstParam)
console.log(secondParam)
console.log(funcParamsEmpty)