type Person = {
    name: string
    skillLevel: "beginner" | "intermediate" | "advanced" | "abc"
}

// Example: 1
const person: Person = { name: "Gaurav", skillLevel: "beginner" }

printSkillLevel(person.skillLevel)

function printSkillLevel(skillLevel: Person["skillLevel"]) {
    console.log(`Skill level is: ${skillLevel}`)
}

// Example: 2
type PeopleGroupedBySkillLevel = {
    [index in Person["skillLevel"]]: Person[]
}

const peopleGroupedBySkillLevel: PeopleGroupedBySkillLevel = {
    beginner: [{ name: "Gaurav", skillLevel: "beginner" }],
    intermediate: [],
    advanced: [],
    abc: []
}
console.log(peopleGroupedBySkillLevel)

// Example: 3
const a = {
    name: "Gaurav",
    age: 20,
    isProgrammer: true
}

type A = (typeof a)[keyof typeof a]
const b: A = "Gaurav"
const c: A = 20
const d: A = true
// const e: A = [] // Error

console.log(b, c, d)

// index types are used to create types that represent the keys or values of an object type.
// They are useful for creating more dynamic and flexible types that can adapt to changes in the underlying object structure.
// This helps in maintaining type safety while allowing for more complex and adaptable type definitions.