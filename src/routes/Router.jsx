import { createBrowserRouter } from "react-router";

const router=createBrowserRouter([
    {
        path:'/',
        element:<h2>this is home page</h2>
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
        element:<h2>Error 404- Page Not Found</h2>
    }
])

export default router;