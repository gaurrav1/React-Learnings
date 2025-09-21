// Use case - 1
const person = { name: "Gaurav", age: 20 }
const people: (typeof person)[] = []

people.push(person)
people.push({ name: "John", age: 30 })
// people.push(25) // Error


// Use case - 2
function sayHi(name: string) {
    console.log(name)
}

type FuncType = typeof sayHi

const func: FuncType = (name) => {
    console.log(`Hello, ${name}`)
}

func("Gaurav")
// func(25) // Error