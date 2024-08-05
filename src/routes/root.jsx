import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PageOne from "../components/PageOne";
import PageTwo from "../components/PageTwo";
import PageThree from "../components/PageTree";
import ProductList from "../components/ProductList";
import Productdetail from "../components/Productdetail";


const router = createBrowserRouter([
    {
        path: "/",
        element: <ProductList />,
    },
    {
        path: "/1",
        element: <PageOne />,
    },
    {
        path: "/2",
        element: <PageTwo />,
    },
    {
        path: "/3",
        element: <PageThree />,
    },
    {
        path: "/products/:id",
        element: <Productdetail />,
    },


])

export default router;