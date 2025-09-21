const person = {
    name: "Gaurav",
    age: 20
}

Object.entries(person).forEach(([key, value]) => {
    console.log(key, value)
})

// type Tuple = [string, string | number]

// TypeScript tuples are a special type of array that allows you to define a fixed number of elements with specific types for each element. They are useful when you want to represent a collection of values where the order and types of the elements are important.
// Tuples are defined using square brackets [] and can contain elements of different types. Each element in a tuple can have its own type, and the types are specified in the order they appear in the tuple.

type PersonTuple = [string, number, boolean?]

const person1: PersonTuple = ["Gaurav", 20, true]
const person2: PersonTuple = ["Alice", 25] // boolean is optional

console.log(person1)
console.log(person2)

// Tuples are useful in scenarios where you want to group related values together while maintaining their specific types and order.
// They provide better type safety compared to regular arrays, as TypeScript can enforce the types and number of elements in a tuple.
// This helps in preventing errors and ensures that the data structure adheres to the expected format.
// Tuples can be particularly useful in functions that return multiple values, as they allow you to specify the types of each returned value explicitly.
function getPersonInfo(): PersonTuple {
    return ["Bob", 30, false]
}

const personInfo = getPersonInfo()
console.log(personInfo)
console.log(`Name: ${personInfo[0]}, Age: ${personInfo[1]}, Is Programmer: ${personInfo[2] ?? "N/A"}`)

// Destructuring tuples
const [name, age, isProgrammer] = getPersonInfo()
console.log(`Name: ${name}, Age: ${age}, Is Programmer: ${isProgrammer ?? "N/A"}`)

// Rest elements in tuples
type FlexibleTuple = [string, ...number[]]

const flexibleTuple1: FlexibleTuple = ["Gaurav", 20, 25, 30]
const flexibleTuple2: FlexibleTuple = ["Alice"]

console.log(flexibleTuple1)
console.log(flexibleTuple2)

// Tuples with readonly modifier
type ReadonlyTuple = readonly [string, number]

const readonlyTuple: ReadonlyTuple = ["Gaurav", 20]
// readonlyTuple[0] = "Alice" // Error: Cannot assign to '0' because it is a read-only property.

console.log(readonlyTuple)

// The readonly modifier in TypeScript tuples is used to create immutable tuples, meaning that once a tuple is created, its elements cannot be changed or reassigned.
// This is particularly useful when you want to ensure that the data structure remains constant throughout its lifecycle, preventing accidental modifications that could lead to bugs or inconsistencies in your code.
// By using readonly tuples, you can enhance type safety and maintain the integrity of your data, making your code more reliable and easier to reason about.
// Readonly tuples are defined using the readonly keyword before the tuple type definition, and they can be used in the same way as regular tuples, except that any attempt to modify their elements will result in a compile-time error.