type Todo = {
    id: number
    title: string
    description?: string
    completed: boolean
    dueDate: Date | string
}

function extendTodo(toDo : Todo) {
    if (typeof toDo.dueDate === "string") {
        console.log(toDo.dueDate)
    } else {
        // This will always be a Date for TypeScript
        console.log(toDo.dueDate.toDateString())
    }

    if (toDo.dueDate instanceof Date) {
        console.log(toDo.dueDate.toDateString())
    } else {
        // This will always be a string for TypeScript
        console.log(toDo.dueDate)
    }

    if (toDo.dueDate instanceof Date) {
        // This will always be a Date for TypeScript
        return
    }

    // This will always be a string for TypeScript, since we returned in the if block above
    console.log(toDo.dueDate)
}

// Type guards are used to narrow down the type of variable within a conditional block.
// This is particularly useful when dealing with union types, where a variable can hold multiple types.
// By using type guards, you can ensure that TypeScript understands the specific type of variable in different code paths, allowing for safer and more precise operations on that variable.

extendTodo({
    id: 1,
    title: "Learn TypeScript",
    completed: false,
    dueDate: new Date()
})

extendTodo({
    id: 2,
    title: "Learn TypeScript",
    completed: false,
    dueDate: "2023-12-31"
})