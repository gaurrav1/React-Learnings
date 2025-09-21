type UserApiResponse = {
    status: 'success' | 'error'
    data?: { id: string; name: string }
    errorMessage?: string
}

function handleResponse(res: UserApiResponse) {
    if (res.status === 'success') {
        console.log(res.data?.name)
    } else {
        console.log(res.errorMessage?.length)
    }
}
handleResponse({ status: 'success', data: { id: '1', name: 'Gaurav' } })

// Her we know when status is 'success', data will be present
// and when status is 'error', errorMessage will be present.
// This is called a discriminated union, where the status field discriminates between different types of responses.
// This allows TypeScript to narrow down the type of res based on the value of the status field,
// enabling safe access to the corresponding properties without additional type checks.

type SuccessResponse = {
    status: 'success'
    data: { id: string; name: string }
}

type ErrorResponse = {
    status: 'error'
    errorMessage: string
}

type UserApiResponse2 = SuccessResponse | ErrorResponse

function handleResponse2(res: UserApiResponse2) {
    if (res.status === 'success') {
        console.log(res.data.name)
    } else {
        console.log(res.errorMessage.length)
    }
}
handleResponse2({ status: 'success', data: { id: '1', name: 'Gaurav' } })

// The above example is the same as the previous one, but here we explicitly define separate types for success and error responses.
// This can make the code more readable and maintainable, especially if the response types are more complex.
// However, for simple cases, the first approach with optional properties is often sufficient.

// Discriminated unions are a powerful feature in TypeScript that allow you to create types that can take on different shapes based on a common discriminant property.
// This is particularly useful for handling different kinds of data that share some common structure but also have unique properties.

// Note: When using discriminated unions, it's important to ensure that the discriminant property (in this case, status) has a unique value for each variant of the union.
// It will now work if we are using 1 response string and other response as number or boolean or any other type.
// For example, the following would not work as expected:

// type SuccessResponse = {
//     status: 'success'
//     data: { id: string; name: string }
// }
// type ErrorResponse = {
//     status: 404
//     errorMessage: string
// }

// type UserApiResponse = SuccessResponse | ErrorResponse

// function handleResponse(res: UserApiResponse) {
//     if (res.status === 'success') {
//         console.log(res.data.name)
//     } else {
//         // Error: Object is of type 'never'.
//         console.log(res.errorMessage.length)
//     }
// }

// In this case, TypeScript cannot narrow down the type of res based on the value of status,
// because the values 'success' and 404 are of different types (string and number).
// As a result, it cannot determine which variant of the union res belongs to in the else branch,
// leading to a type error when trying to access errorMessage.
// To fix this, ensure that the discriminant property has values of the same type across all variants of the union.