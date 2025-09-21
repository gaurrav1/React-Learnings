type ToDo = {
    title: string,
    completed: boolean
}

type FinalTodo = Readonly<ToDo>

// Readonly utility type makes all properties of a type immutable
const todo: FinalTodo = {
    title: "Learn TypeScript",
    completed: false
}

// todo.title = "Learn JavaScript" // Error: Cannot assign to 'title' because it is a read-only property
// todo.completed = true // Error: Cannot assign to 'completed' because it is a read-only property

console.log(todo) // Output: { title: 'Learn TypeScript', completed: false }

// The Readonly utility type is used to create a type with all properties of the original type set to read-only.
// This means that once an object of this type is created, its properties cannot be modified.
// Using Readonly is particularly useful when you want to ensure that certain data remains constant throughout the lifecycle of an application, preventing accidental mutations and enhancing code safety.