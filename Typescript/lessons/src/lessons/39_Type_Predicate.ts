type Person = {
    name: string
}

type ToDo = {
    title: string
}

// function print(obj: Person | ToDo) {
//     if ("name" in obj) {
//         console.log(obj.name)
//         return
//     }
//     console.log(obj.title)
// }

// In the above example, we have a function print that takes an argument obj which can be either a Person or a ToDo.
// We use the in operator to check if the name property exists in obj.
// If it does, we know that obj is of type Person, so we can safely access the name property.
// Otherwise, we treat obj as a ToDo and access the title property.

function isPerson(obj: Person | ToDo) : obj is Person {
    return "name" in obj
}
function print(obj: Person | ToDo) {
    if (isPerson(obj)) {
        console.log(obj.name)
        return
    }
    console.log(obj.title)
}

// In the above example, we define a type predicate function isPerson that checks if an object is of type Person.
// The return type obj is Person tells TypeScript that if the function returns true, then obj can be treated as a Person.
// We then use this type predicate in the print function to safely determine the type of obj and access the appropriate properties.

// Type predicates are useful when you have complex type checks that cannot be easily expressed using simple type guards like typeof or instanceof.
// They allow you to create custom logic for determining the type of value and help TypeScript narrow down the types accordingly.
print({ name: 'Gaurav' })
print({ title: 'Learn TypeScript' })

// It also has downsides of using type predicates like "as" casting.
// If the logic inside the type predicate function is incorrect or incomplete, it can lead to runtime errors.
// For example, if we mistakenly check for a property that does not uniquely identify the type, we might end up with incorrect type narrowing.
// This can result in accessing properties that do not exist on the actual type, leading to runtime exceptions.
// Therefore, it's important to ensure that the logic in type predicate functions is accurate and thoroughly tested.

// Example 2:
const PRIORITIES = ["HIGH", "MEDIUM", "LOW"] as const
type Priority = (typeof PRIORITIES)[number]

type ToDoSchema = {
    title: string
    description: string
}

function func(todo: ToDoSchema) {
    if (isPriority(todo.description)) {
        console.log("It's priority")
    } else {
        console.log("It's random description")
    }
}

function isPriority(description: string): description is Priority {
    return PRIORITIES.includes(description as Priority)
}

func( { title: "Gaurav", description: "HIGH" } )
func( { title: "Gaurav", description: "Random" } )
// In the above example, we have a function isPriority that checks if a given description is one of the defined priorities.
// The return type description is Priority tells TypeScript that if the function returns true, then description can be treated as a Priority.
// We then use this type predicate in the func function to determine if the description is a priority or just a random string.
// This allows us to handle the description appropriately based on its type, ensuring type safety and preventing potential runtime errors.
// However, if the logic inside isPriority is incorrect (for example, if we forget to include one of the priorities in the PRIORITIES array),
// it could lead to incorrect type narrowing and potential runtime errors when accessing properties or methods specific to the Priority type.
// Therefore, it's crucial to ensure that the logic in type predicate functions is accurate and thoroughly tested.

// Example 3:
type Animal = {
    species: string
}

type Vehicle = {
    model: string
}

function identify(obj: Animal | Vehicle) {
    if (isAnimal(obj)) {
        console.log(`It's an animal of species: ${obj.species}`)
    } else {
        console.log(`It's a vehicle of model: ${obj.model}`)
    }
}

function isAnimal(obj: Animal | Vehicle): obj is Animal {
    return (obj as Animal).species !== undefined
}

identify({ species: 'Dog' })
identify({ model: 'Tesla' })

// In this example, we have a function isAnimal that checks if an object is of type Animal by verifying the existence of the species property.
// The return type obj is Animal indicates to TypeScript that if the function returns true, then obj can be treated as an Animal.
// We then use this type predicate in the identify function to determine whether the provided object is an Animal or a Vehicle,
// allowing us to access the appropriate properties safely.
// Again, it's important to ensure that the logic in the isAnimal function is accurate to prevent incorrect type narrowing and potential runtime errors.