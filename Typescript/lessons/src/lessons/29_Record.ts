// type Person = {
//     name: string
//     age: number
// }
//
// type PeopleGroupedByName = {
//     [index: string]: Person[]
// }

type Person = {
    name: string
    age: number
}

type PeopleGroupedByName = Record<Person["name"], Person[]>

// Record utility type constructs an object type whose property keys are Keys and whose property values are Type.
const peopleByName: PeopleGroupedByName = {
    "Alice": [{ name: "Alice", age: 30 }, { name: "Alice", age: 25 }],
    "Bob": [{ name: "Bob", age: 28 }]
}

console.log(peopleByName)
// Output: { Alice: [ { name: 'Alice', age: 30 }, { name: 'Alice', age: 25 } ], Bob: [ { name: 'Bob', age: 28 } ] }

// In this example, we define a Person type with name and age properties.
// We then use the Record utility type to create a PeopleGroupedByName type,
// which groups Person objects by their name property.
// The resulting peopleByName object is an example of how to use this type.

// The Record utility type is useful for creating types that represent objects with specific keys and value types.
// It allows for more flexible and dynamic object structures while maintaining type safety.