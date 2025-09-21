type ToDo = {
    title: string
}

fetch('http://localhost:3000/graphql')
    .then(res => res.json())
    .then(data => {
        return data as ToDo
    })
    .then(data => {
        // From here, TypeScript knows that data is of type ToDo
        console.log(data.title)
    })

// With as casting, you can tell TypeScript to treat a value as a specific type.
// This is useful when you know more about the type of value than TypeScript can infer on its own.
// However, be cautious when using as casting, as it can lead to runtime errors if the value does not actually conform to the specified type.