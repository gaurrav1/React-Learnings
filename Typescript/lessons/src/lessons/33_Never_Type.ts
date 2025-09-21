type Todo = {
    title: string,
    priority: "High" | "Medium" | "Low",
    isComplete: boolean,
    description?: string
    dueDate: Date | string
}

function extendTodo(toDo : Todo) {
    switch (toDo.priority) {
        case "High":
            console.log("High priority task")
            break
        case "Medium":
            console.log("Medium priority task")
            break
        case "Low":
            console.log("Low priority task")
            break
        default:
            // console.log("Priority type is never: " + toDo.priority)
            const exhaustiveCheck: never = toDo.priority
            throw new Error(`Unhandled case: ${exhaustiveCheck}`)
    }
}

// With the never type, you can ensure that all possible cases are handled in a switch statement.
// If a new priority level is added to the Todo type, TypeScript will raise an error in the default case, prompting you to handle the new case.
// This helps catch unhandled cases at compile time, improving code safety and maintainability.

const myTodo: Todo = {
    title: "Learn TypeScript",
    priority: "High",
    isComplete: false,
    dueDate: new Date()
}
extendTodo(myTodo)

const anotherTodo: Todo = {
    title: "Learn TypeScript",
    priority: "Medium",
    isComplete: false,
    dueDate: "2023-12-31"
}
extendTodo(anotherTodo)

// If you uncomment the following code, TypeScript will raise an error in the switch statement above,
// because "Urgent" is not handled in the switch cases.
// const invalidTodo: Todo = {
//     title: "Learn TypeScript",
//     priority: "Urgent", // Error: Type '"Urgent"' is not assignable to type '"High" | "Medium" | "Low" | "None"'.
//     isComplete: false,
//     dueDate: new Date()
// }
// extendTodo(invalidTodo)