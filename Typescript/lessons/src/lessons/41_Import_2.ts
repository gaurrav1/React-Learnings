import type {User} from "./41_Import_1.ts";

function printUser(user: User) {
    console.log(`User: ${user.name}, Age: ${user.age}`);
}
printUser({id: '2', name: 'John', age: 25});
// Some library may be built with typescript and may have types defined in it.
// We can use those types in our code by importing them.

// But sometimes libraries are not built with typescript and may not have types defined in it.
// In that case, we can use DefinitelyTyped to get the types for those libraries.
// DefinitelyTyped is a community-driven project that provides type definitions for popular JavaScript libraries.
// These type definitions are stored in the @types namespace on npm.

// For example, if we want to use lodash library in our typescript code, we can install the types for lodash using the following command:
// npm install --save-dev @types/lodash

// After installing the types, we can import and use lodash in our typescript code with proper type checking and autocompletion support.