import { createBrowserRouter, NavLink } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../pages/Loading";

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
                loader:()=>fetch("/news.json"),
                hydrateFallbackElement:<Loading></Loading>

            }
        ]
    },
    {
        path:"/auth",
        // element:<h2>This is authentication layout page</h2>,
        Component:AuthLayout,
        children:[
            {
            path:"/auth/login",
            Component:Login
            },
            {
            path:"/auth/register",
            Component:Register
            }
    ]
    },
    {
        path:"/news-details/:id",
        // Component:NewsDetails,
        element:(
        <PrivateRoute>
            <NewsDetails></NewsDetails>
        </PrivateRoute>
        ),
        loader:()=>fetch("/news.json"),
        hydrateFallbackElement:<Loading></Loading>
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