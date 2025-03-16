import { baseApi } from "./base";

export function getTasks(options) {
    return baseApi.get("todos", options)
                .then((response) => response.data);
}

export function getTask(userId, options) {
    return baseApi.get(`users/${userId}/todos`, options)
                .then((response) => response.data);
}