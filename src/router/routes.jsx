import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import CreateBlog from "../pages/CreateBlog";
import UpdateBlog from "../pages/UpdateBlog";

const BrowserRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "about",
                element: <AboutPage />,
            },
            {
                path: "contact",
                element: <ContactPage />,
            },
            {
                path: "create-blog",
                element: <CreateBlog />,
            },
            {
                path: "/update-blog/:id",
                element: <UpdateBlog />,
            }
        ],
    },
]);

export default BrowserRouter;