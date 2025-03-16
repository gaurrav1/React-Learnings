import { useLoaderData } from "react-router-dom";
import { getUser, getUserPosts, getUserTasks } from "../../api/users"
import ToDoItem from "../ToDoItem";
import PostCard from "../PostCard";

function User() {
    const { posts, tasks, user } = useLoaderData();
    console.log(user);
    return (
        <>
            <div className="container">

                <h1 className="page-title">{user.name}</h1>
                <div className="page-subtitle">{user.email}</div>
                <div><b>Company:</b> {user.company.name}</div>
                <div><b>Website:</b> {user.website}</div>
                <div><b>Address:</b> {user.address.suite}, {user.address.street}, {user.address.city}, {user.address.zipcode}</div>

                <h3 className="mt-4 mb-2">Posts</h3>
                <div className="card-grid">
                    {posts.map((post) => {
                        return (
                            <PostCard key={post.id} post={post} />
                        )
                    })}

                </div>

                <h3 className="mt-4 mb-2">Todos</h3>
                <ul>
                    {tasks.map((task) => {
                        return (
                            <ToDoItem key={task.id} task={task} />
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

async function loader({ request: { signal }, params: { userId } }) {
    const user = getUser(userId, { signal });
    const posts = getUserPosts(userId, { signal });
    const tasks = getUserTasks(userId, { signal });
    return { posts: await posts, tasks: await tasks, user: await user };
}

export const userRoute = {
    loader,
    element: <User />
}