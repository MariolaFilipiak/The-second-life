import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, selectProducts } from "../productsSlice";
import { shuffleProducts } from "../shufleProducts";
import Categories from "../../Categories";
import ProductsCard from "../ProductsCard";
import { Loading } from "../../../common/Loading";
const PopularProducts = ({ products }) => {
    const dispatch = useDispatch();
    const fetchedProducts = useSelector(selectProducts);
    const displayedProducts = shuffleProducts(fetchedProducts).slice(0, 8);
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);
    return (_jsxs("div", { className: "container-fluid", children: [_jsxs("div", { className: " mb-5", children: [_jsx("h1", { className: "display-6 fw-bolder text-center", children: "POPULAR PRODUCTS" }), _jsx("hr", {})] }), _jsxs("div", { children: [_jsx("div", { className: "d-flex flex-wrap my-3 py-3 justify-content-center ", children: _jsx(Categories, {}) }), displayedProducts.length > 0 ? (_jsx(ProductsCard, { products: displayedProducts })) : (_jsx(Loading, {}))] })] }));
};
export default PopularProducts;
