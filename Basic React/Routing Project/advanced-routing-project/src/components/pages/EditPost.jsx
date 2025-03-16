import { redirect, useActionData, useLoaderData, useNavigation } from "react-router-dom"
import { getPost, updatePost } from "../../api/posts"
import { getUsers } from "../../api/users"
import PostForm, { postFormValidators } from "../PostForm"

function EditPost() {
    const {post, users} = useLoaderData();
    const {state} = useNavigation();
    const isSubmitting = state === "submitting";

    const errors = useActionData();

    return (
        <div className="container">
            <h1 className="page-title">Edit Post</h1>
            <PostForm users={users} post={post} isSubmitting={isSubmitting} errors={errors}/>
        </div>
    )
}

async function action({request, params: {postId}}) {
    const formData = await request.formData();
    const title = formData.get("title");
    const body = formData.get("body");
    const userId = formData.get("userId");

    const errors = postFormValidators({title, body, userId})
    if (Object.keys(errors).length > 0){
        return errors
    }

    const post = await updatePost(postId, { title, body, userId }, {signal: request.signal});

    return redirect(`/posts/${post.id}`)
    
}

async function loader({request: {signal}, params: {postId}}) {
    const post = getPost(postId, {signal});
    const users = getUsers({signal});
    return {post: await post, users: await users}
}


export const editPostRoute = {
    loader,
    action,
    element: <EditPost />
}