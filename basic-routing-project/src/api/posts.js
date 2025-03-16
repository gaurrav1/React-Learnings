import { baseApi } from "./base";

export function getPosts(options) {
    return baseApi.get("posts", options)
                .then((response) => response.data);
}

export function getPost(postId, options) {
    return baseApi.get(`posts/${postId}`, options)
                .then((response) => response.data);
}