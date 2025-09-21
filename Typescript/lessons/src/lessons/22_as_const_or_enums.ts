// ####### Example 1 #######
// let a = 1 as const
// const b = 1
// a = 2 // Error

// ####### Example 2 #######
// readonly array
// const nums = ["1", "2", "3"] as const

// type of "2"
// const a = nums[1]

// ####### Example 3 #######
// const SKILL_LEVELS = ["Beginner", "Intermediate", "Advanced"] as const

// type SkillLevel = (typeof SKILL_LEVELS)[number]

// type Person = {
//     skillLevel: SkillLevel
// }

// SKILL_LEVELS.forEach(skillLevel => console.log(skillLevel))

// ####### Example 4 #######

// const person = {
//     name: "Gaurav",
//     age: 20,
//     address: {
//         street: "Gujarat",
//     }
// } as const
// console.log(person)
// person.age = 30 // Error
// person.address.street = "New York" // Error

// ---------> As Const
// The `as const` assertion in TypeScript is used to indicate that the value should be treated as a constant, immutable value.
// This means that the value cannot be changed or reassigned, and its type is narrowed down to the most specific literal type possible.
// Using `as const` is particularly useful when you want to create readonly arrays or objects, ensuring that their contents remain unchanged throughout the code.
// It enhances type safety by preventing accidental modifications and allows for more precise type definitions, which can lead to fewer runtime errors and improved code reliability.

// ---------> Enums
// enum Direction {
//     Up = "UP",
//     Down = "DOWN",
//     Left = "LEFT",
//     Right = "RIGHT"
// }
//
// function move(direction: Direction) {
//     console.log(`Moving ${direction}`)
// }
//
// move(Direction.Up)
// move(Direction.Down)
// move("UP") // Error

// Enums in TypeScript are a way to define a set of named constants, which can be either numeric or string values.
// They provide a way to group related values together under a single type, making the code more readable and maintainable.
// Enums are particularly useful when you have a fixed set of options or states that a variable can take,
// as they help to ensure type safety by restricting the variable to only the defined enum values.
// This can prevent errors that may arise from using arbitrary strings or numbers, thereby enhancing code reliability and clarity.
// Enums can also be used in switch statements and other control flow structures, making it easier to handle different cases based on the enum values.