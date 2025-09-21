type Person = {
    name: string
    age: number
    isProgrammer?: boolean
}

const age = getValue("age", { name: "Gaurav", age: 20})

console.log(age)

function getValue(key: keyof Person, person: Person) {
    return person[key]
}

function groupBy(key: keyof Person, people: Person[]) {
    return people.map(person => person[key])
}

const people: Person[] = [
    { name: "Gaurav", age: 20, isProgrammer: true },
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30, isProgrammer: false }
]

console.log(groupBy("isProgrammer", people))

// The keyof operator in TypeScript is used to create a union type of all the keys (property names) of a given type.
// This is particularly useful when you want to restrict a variable or function parameter to only accept valid property names of a specific type.
// By using keyof, you can enhance type safety and ensure that your code adheres to the defined structure of the type.
// It helps in preventing errors that may arise from using invalid property names, thereby improving code reliability and maintainability.