import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PageOne from "../components/PageOne";
import PageTwo from "../components/PageTwo";
import PageThree from "../components/PageTree";
import ProductList from "../components/ProductList";
import Productdetail from "../components/Productdetail";
import Navbar from "../components/Navbar";
import Cart from "../components/Cart";


const Layout =({children})=>(
    <>
        <Navbar />
        {children}
    </>
   
)


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout><ProductList /> </Layout>          
    },
    {
        path: "/1",
        element: <Layout><PageOne /></Layout>,
    },
    {
        path: "/2",
        element: <Layout><PageTwo /></Layout>,
    },
    {
        path: "/3",
        element:<Layout><PageThree /></Layout> ,
    },
    {
        path: "/products/:id",
        element:<Layout><Productdetail /></Layout> ,
    },
    {
        path: "/cart",
        element:<Layout><Cart /></Layout>,
    },


])

export default router;