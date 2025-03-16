import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Store from "./components/Store";

export const router = createBrowserRouter(

    // Method 1
    [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/store", element: <Store /> },
    ]

    // Method 2
    // createRoutesFromElements(
    //     <>
    //         <Route path="/" element={<Home />} />
    //         <Route path="/store" element={<Store />} />
    //         <Route path="/about" element={<About />} />
    //     </>
    // )

    // There are more routers available like HashRouter, MemoryRouter, etc.
    // You can choose appropriate router based on your requirement.
)