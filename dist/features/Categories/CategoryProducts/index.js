var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Loading } from "../../../common/Loading";
import ProductsCard from "../../Products/ProductsCard";
import Categories from "..";
const CategoryProducts = () => {
    const { name } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = () => __awaiter(void 0, void 0, void 0, function* () {
            setIsLoading(true);
            const response = yield axios.get(`/The-second-life/products.json`);
            const data = response.data;
            const selectedProducts = data.filter((product) => product.category === name);
            setProducts(selectedProducts);
            setIsLoading(false);
        });
        fetchProducts();
    }, [name]);
    return (_jsxs("div", { className: "container mb-5 my-5", children: [_jsx("div", { className: "d-flex flex-wrap justify-content-center", children: _jsx(Categories, {}) }), _jsxs(Link, { to: "/products", className: "btn py-2 px-4", children: [_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", className: "bi bi-arrow-left", viewBox: "0 0 16 16", children: _jsx("path", { fillRule: "evenodd", d: "M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" }) }), " ", "Back to shop"] }), _jsx("div", { className: "text-center mb-5 mt-5", children: _jsx("div", { children: isLoading ? _jsx(Loading, {}) : _jsx(ProductsCard, { products: products }) }) })] }));
};
export default CategoryProducts;
