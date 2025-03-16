import { createBrowserRouter, Navigate, Outlet, redirect, useNavigation } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Store from "./components/Store";
import Team from "./components/Team";
import NewMember from "./components/NewMember";
import TeamMember from "./components/TeamMember";
import Navbar from "./components/navbar/Navbar";
import TeamNav from "./components/navbar/TeamNav";

export const router = createBrowserRouter([
    {
        element: <NavLayout />,
        errorElement: <div>There is Error</div>,
        children: [
            // { path: '*', element: <div>Not Found</div> },
            { path: '*', element: <Navigate to={"/"} /> },
            { path: '/', element: <Home /> },
            { path: '/about', element: <About /> },
            { path: '/store', element: <Store /> },
            { path: '/test/*', element: <div> Test</div> },
            { path: '/test/new', element: <div>New Test</div> },
            {
                path: '/team',
                element: <TeamNavLayout />,
                loader: ({ request: { signal } }) => {
                    return fetch("https://jsonplaceholder.typicode.com/users?_limit=2", { signal })
                },
                children: [
                    { index: true, element: <Team /> },
                    {
                        path: ':memberId',
                        loader: ({ params, request: { signal } }) => {
                            return fetch(`https://jsonplaceholder.typicode.com/users/${params.memberId}`, { signal })
                                    .then(res => {
                                        if (res.status === 200) {
                                            return res.json()
                                        }
                                        throw redirect("/team")
                                    })
                        },
                        element: <TeamMember />
                    },
                    { path: 'new', element: <NewMember /> },
                ]
            },
        ]
    },
])

function NavLayout() {
    const {state} = useNavigation()
    
    return (
        <>
            <Navbar />
            {state === "loading" ? <h1>Loading...</h1> : <Outlet />}
        </>
    )
}

function TeamNavLayout() {
    return (
        <>
            <TeamNav />
            <Outlet context={"Hey from outlet context!"} />
        </>
    )
}