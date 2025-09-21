// *.d.ts files are used to declare types for existing JavaScript code.
// They are also used to provide type information for libraries that do not have built-in TypeScript support.
// Declaration files typically have a .d.ts extension and contain only type declarations without any implementation code.
// They can declare types for variables, functions, classes, interfaces, and modules.
// Declaration files can be created manually or generated automatically using tools like the TypeScript compiler or third-party libraries.
// They are especially useful when working with JavaScript libraries that do not have TypeScript typings available.
// By using declaration files, developers can leverage TypeScript's static type checking and autocompletion features even when working with plain JavaScript code or third-party libraries without built-in TypeScript support.
// Example of a declaration file (example.d.ts):
// declare module "my-library" {
//     export function myFunction(param: string): number;
//     export const myVariable: boolean;
//     export interface MyInterface {
//         name: string;
//         age: number;
//     }
// }
// In the above example, we declare a module named "my-library" and provide type information for a function, a variable, and an interface.
// This allows TypeScript to understand the types when we import and use "my-library" in our code.
// To use the declaration file, we can simply import the module in our TypeScript code:
// import { myFunction, myVariable, MyInterface } from "my-library";
// const result: number = myFunction("Hello");
// const isTrue: boolean = myVariable;
// const obj: MyInterface = { name: "John", age: 30 };
// Declaration files are an essential part of the TypeScript ecosystem, enabling seamless integration with existing JavaScript code and libraries.
// They help ensure type safety and improve developer productivity by providing accurate type information and autocompletion support.