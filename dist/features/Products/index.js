import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, selectProducts, selectProductsStatus, } from "./productsSlice";
import { Loading } from "../../common/Loading";
import Categories from "../Categories";
import ProductsCard from "./ProductsCard";
import Error from "../../common/Error";
const Products = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);
    const status = useSelector(selectProductsStatus);
    const displayedProducts = products.slice(0, 40);
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);
    return {
        loading: _jsx(Loading, {}),
        success: (_jsxs(_Fragment, { children: [_jsx("div", { className: "container ", children: _jsxs("div", { className: "mb-3", children: [_jsx("h1", { className: "display-6 fw-bolder text-center mt-3", children: "ALL PRODUCTS" }), _jsx("hr", {})] }) }), _jsx("div", { className: "container text-center d-flex flex-wrap my-3 py-3 justify-content-center ", children: _jsx(Categories, {}) }), _jsx(ProductsCard, { products: displayedProducts })] })),
        error: _jsx(Error, {}),
    }[status];
};
export default Products;
