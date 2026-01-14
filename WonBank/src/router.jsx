import { createBrowserRouter } from "react-router-dom";
import RecommendPage from "./pages/RecommendPage";
import ProductInfoPage from "./pages/ProductInfoPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RecommendPage/> 
    },
    {
        path: '/product',
        element: <ProductInfoPage/> 
    },
])

export default router