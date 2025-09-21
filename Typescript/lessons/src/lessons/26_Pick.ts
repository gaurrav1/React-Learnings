type Person = {
    id: string
    name: string
    age: number
    isActive: boolean
    address: string
}

type PersonPreview = Pick<Person, "id" | "name" | "age">

const person: PersonPreview = {
    id: "1",
    name: "John",
    age: 30
}

console.log(person)

// The Pick utility type is used to create a new type by selecting a subset of properties from an existing type.
// This is particularly useful when you want to work with a simplified version of a type,
// focusing only on the properties that are relevant for a specific context or operation.
// By using Pick, you can enhance code readability and maintainability by avoiding unnecessary properties.
// It also helps in creating more precise types, which can lead to better type safety and fewer runtime errors.