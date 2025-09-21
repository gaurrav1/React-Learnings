type Todo = {
    title: string
    dueDate: Date | string
    isComplete: boolean
}

const toDo = {
    title: "Gaurav",
    dueDate: new Date(),
    // complete: false // Error: Object literal may only specify known properties, and 'complete' does not exist in type 'Todo'.
    isComplete: false
} satisfies Todo

toDo.dueDate.setDate(4)

// For the above example:
// If we make toDo as Todo, then dueDate would be treated as Date | string.
// So, we would not be able to call setDate on it directly.
// But since we used satisfies, TypeScript knows that toDo has a dueDate of type Date,
// so we can safely call setDate on it, and it also shows an error if toDo does not conform to the Todo type.

// Here, the satisfies operator checks that the toDo object conforms to the Todo type.
// If toDo did not have the correct properties or types, TypeScript would raise an error.
// However, unlike as casting, satisfies does not change the type of toDo.
// Instead, it ensures that toDo meets the requirements of the Todo type while preserving its original type.