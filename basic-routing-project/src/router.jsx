import { createBrowserRouter, Navigate, useRouteError } from "react-router-dom";
import RootLayout from "./components/layouts/RootLayout";
import { postsRoute } from "./components/pages/Posts";
import { usersRoute } from "./components/pages/Users";
import { tasksRoute } from "./components/pages/Tasks";
import { userRoute } from "./components/pages/User";
import { postRoute } from "./components/pages/Post";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <RootLayout />,
            children: [
                {
                    errorElement: <ErrorPage/>,
                    children: [
                        {
                            index: true,
                            element: <Navigate to={"/posts"} />
                        },
                        {
                            path: "posts",
                            children: [
                                {
                                    index: true,
                                    ...postsRoute
                                },
                                {
                                    path: ":postId",
                                    ...postRoute
                                },
                            ],
                        },
                        {
                            path: "users",
                            children: [
                                {
                                    index: true,
                                    ...usersRoute
                                },
                                {
                                    path: ":userId",
                                    ...userRoute
                                }
                            ],
                        },
                        {
                            path: "tasks",
                            children: [
                                {
                                    index: true,
                                    ...tasksRoute
                                }
                            ],
                        },
                        {
                            path: "*",
                            element: <h1>404 - Page is not available</h1>
                        }
                    ]
                }
               
            ]
        }
    ]
)

function ErrorPage() {
    const error = useRouteError();

    return (
        <div>
            <h1>Error- Something Went Wrong</h1>
            {import.meta.env.MODE != "production" && (
                <>
                    <pre>{error.message}</pre>
                    <pre>{error.stack}</pre>
                </>
            )}
        </div>
    )
}