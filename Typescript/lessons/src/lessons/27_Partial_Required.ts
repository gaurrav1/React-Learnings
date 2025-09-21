// Required<Type> - makes all properties in Type required
type Person = {
    id?: string
    name: string
    age?: number
    isActive: boolean
    address?: {
        street?: string
    }
}

// Makes every parent property required, but not the nested ones
type RequiredPerson = Required<Person>

const person: RequiredPerson = {
    id: "1",
    name: "John",
    age: 30,
    isActive: true,
    address: {
        street: "123 Main St",
    }
}

console.log(person)

// Partial<Type> - makes all properties in Type optional
type PartialPerson = Partial<Person>

const partialPerson: PartialPerson = {
    name: "Jane"
}

console.log(partialPerson)

// You can also combine them with Omit and Pick
type RequiredPick<T, Key extends keyof T> = Required<Pick<T, Key>> & T
type PartialPick<T, Key extends keyof T> = Partial<Pick<T, Key>> & Omit<T, Key>

type PersonWithRequiredName = RequiredPick<Person, "name">
type PersonWithOptionalName = PartialPick<Person, "name">

const personWithRequiredName: PersonWithRequiredName = {
    id: "2",
    name: "Alice",
    isActive: false
}

const personWithOptionalName: PersonWithOptionalName = {
    id: "3",
    isActive: true
}

console.log(personWithRequiredName)
console.log(personWithOptionalName)

// The Required utility type is used to create a type with all properties of the original type set to required.
// This means that when creating an object of this type, all properties must be provided.
// Using Required is particularly useful when you want to ensure that certain data is always present,
// preventing accidental omissions and enhancing code safety.

// The Partial utility type is used to create a type with all properties of the original type set to optional.
// This means that when creating an object of this type, any subset of properties can be provided.
// Using Partial is particularly useful when dealing with scenarios like updates or configurations,
// where not all properties need to be specified, allowing for more flexible and concise code.
// You can also create custom utility types by combining existing ones like Pick, Omit, Required, and Partial.
// This allows for more tailored type definitions that suit specific use cases in your application.
// For example, you can create a utility type that makes certain properties required while keeping others optional,
// providing a balance between strictness and flexibility in your type definitions.
// This enhances type safety and helps maintain consistency in your codebase.
// These utility types are part of TypeScript's standard library and are widely used in various applications to manage and manipulate types effectively.
// They help in creating more expressive and maintainable type definitions, making it easier to work with complex data structures.
// By leveraging these utility types, developers can ensure that their code adheres to desired constraints and behaviors,
// ultimately leading to fewer runtime errors and improved developer experience.
// Example usage of Required and Partial utility types
type Config = {
    host?: string
    port?: number
    useSSL?: boolean
}

// Making all properties required
type RequiredConfig = Required<Config>
const requiredConfig: RequiredConfig = {
    host: "localhost",
    port: 8080,
    useSSL: true
}

// Making all properties optional
type PartialConfig = Partial<Config>
const partialConfig: PartialConfig = {
    host: "localhost"
}

console.log(requiredConfig)
console.log(partialConfig)

// In this example, we define a Config type with optional properties.
// We then create RequiredConfig and PartialConfig types using the Required and Partial utility types, respectively.
// The requiredConfig object must include all properties, while the partialConfig object can include any subset of properties.
// This demonstrates how these utility types can be used to enforce different levels of property requirements in type definitions.
// These utility types are especially useful in scenarios like configuration objects, where you might want to enforce certain properties to be present while allowing others to be optional.