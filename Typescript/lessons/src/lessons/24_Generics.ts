// Generics in TypeScript allow you to create reusable components that can work with a variety of types rather than a single one. This provides flexibility and type safety.
// Example:
// let input = document.querySelector<HTMLInputElement>(".input");
// console.log(input?.value);

function getSecondElement<T>(array: T[]): T {
    return array[1];
}

const a = [1, 2, 3, 4];
const b = ["a", "b", "c"];
const c = [true, false, true];

console.log(getSecondElement<number>(a)); // 2
console.log(getSecondElement<string>(b)); // "b"
console.log(getSecondElement<boolean>(c)); // false

function arrayToObject<T>(array: [string, T][]) {
    const obj: {
        [index: string]: T
    } = {};

    array.forEach(([key, value]) => {
        obj[key] = value;
    })
    return obj;
}

const array: [string, string | number | boolean][] = [
    ["key1", 1],
    ["key2", "Two"],
    ["key3", true]
];

console.log(arrayToObject(array));

// Generics provide a way to create components that can work with any data type while still maintaining type safety.
// This is particularly useful for creating reusable functions, classes, and interfaces that can operate on different types without sacrificing the benefits of static typing.
// By using generics, you can write more flexible and adaptable code that can handle a variety of data types, making your codebase more maintainable and reducing redundancy.