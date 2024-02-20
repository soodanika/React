import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import UserContext from "./utils/UserContext";

const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout = () => {
    // let [userData, setUserData] = useState("");
    // useEffect(() => {
    //     //Authentication
    //     //API call and get the data
    //     const data = {
    //         name: "Anika Sood"
    //     }
    //     setUserData(data.name)
    // }, [])
    return (
        // <UserContext.Provider value={{ loggedInUser: userData }}>
        <div id="app">
            <Header />
            <Outlet />
        </div>
        // </UserContext.Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading grocery store...</h1>}><Grocery /></Suspense>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)
