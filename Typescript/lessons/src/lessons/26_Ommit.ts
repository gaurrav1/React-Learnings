type ToDo = {
    id: number
    title: string
    description: string
    completed: boolean
    createdAt: Date
    updatedAt: Date
}

type NewToDo = Omit<ToDo, "id" | "createdAt" | "completed" | "updatedAt" >

const createToDo = (todo: NewToDo): ToDo => {
    return {
        ...todo,
        id: Math.floor(Math.random() * 1000),
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date()
    }
}

const newToDo: NewToDo = {
    title: "Learn TypeScript",
    description: "Understand advanced types like Omit and Pick"
}

const todo = createToDo(newToDo)
console.log(todo)

// The Omit utility type is used to create a new type by excluding specific properties from an existing type.
// This is particularly useful when you want to create a variant of a type that omits certain properties,
// allowing you to work with a simplified version of the type in specific contexts.
// By using Omit, you can enhance code readability and maintainability by focusing only on the relevant properties,
// while also ensuring type safety by preventing access to the omitted properties.