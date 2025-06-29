import { createBrowserRouter, NavLink } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";

const router=createBrowserRouter([
    {
        path:'/',
        Component:HomeLayout,
        children:[
            {
                path:"",
                Component: Home

            },
            {
                path:"/category/:id",
                Component: CategoryNews,
                loader:()=>fetch("/news.json")

            }
        ]
    },
    {
        path:"/auth",
        element:<h2>This is authentication layout page</h2>
    },
    {
        path:"/news",
        element:<h2>this is news</h2>
    },
    {
        path:"/*",
        element:<div className="text-center my-40 flex flex-col gap-10">
            <h2 className="text-red-500 font-semibold">Error 404- Page Not Found</h2>
            <NavLink className="btn mx-auto btn-primary" to="/">Go Back to Home</NavLink>
        </div>
    }
])

export default router;