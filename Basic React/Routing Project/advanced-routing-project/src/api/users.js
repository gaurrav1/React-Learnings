import { baseApi } from "./base";

export function getUsers(options) {
    return baseApi.get("users", options)
                .then((response) => response.data);
}

export function getUser(userId, options) {
    return baseApi.get(`users/${userId}`, options)
                .then((response) => response.data);
}

export function getUserPosts(userId, options) {
    return baseApi.get(`users/${userId}/posts`, options)
                .then((response) => response.data);
}

export function getUserTasks(userId, options) {
    return baseApi.get(`users/${userId}/todos`, options)
                .then((response) => response.data);
}