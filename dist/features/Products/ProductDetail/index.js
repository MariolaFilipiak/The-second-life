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
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { selectProducts } from "../productsSlice";
import { shuffleProducts } from "../shufleProducts";
import { getProductsData } from "../../../common/getData";
import { addToCart, selectCartItems } from "../../../common/Cart/cartSlice";
import ProductsCard from "../ProductsCard";
import { Loading } from "../../../common/Loading";
import Error from "../../../common/Error";
const ProductDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const products = useSelector(selectProducts);
    const displayedProducts = shuffleProducts(products).slice(0, 4);
    const [error, setError] = useState(false);
    const cartItems = useSelector(selectCartItems);
    useEffect(() => {
        const fetchProduct = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const response = yield axios.get(`/The-second-life/products.json`);
                const productsData = response.data;
                const selectedProduct = productsData.find((product) => product.id === parseInt(id));
                if (selectedProduct) {
                    setProduct(selectedProduct);
                }
                else {
                    setError(true);
                }
            }
            catch (error) {
                setError(true);
            }
        });
        fetchProduct();
        getProductsData();
    }, [id]);
    const handleCart = (product, redirect) => {
        if (product) {
            const isAlreadyInCart = cartItems.some((item) => item.id === product.id);
            if (!isAlreadyInCart) {
                dispatch(addToCart(product));
            }
            if (redirect) {
                navigate("/cart");
            }
            setShowModal(true);
        }
    };
    const closeModal = () => {
        setShowModal(false);
    };
    if (error) {
        return _jsx(Error, {});
    }
    return (_jsxs("div", { className: "container mb-5", children: [_jsxs(Link, { to: "/products", className: "btn mb-5 my-5", children: [_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", className: "bi bi-arrow-left", viewBox: "0 0 16 16", children: _jsx("path", { fillRule: "evenodd", d: "M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" }) }), " ", "Back to shop"] }), _jsxs("div", { className: "d-flex flex-wrap mb-5", children: [_jsx("div", { className: "col-md-6", children: _jsx("img", { src: product === null || product === void 0 ? void 0 : product.image, alt: product === null || product === void 0 ? void 0 : product.title, height: "100%", width: "80%" }) }), _jsxs("div", { className: "col-md-6", children: [_jsx("h4", { className: "text-uppercase text-black-50", children: product === null || product === void 0 ? void 0 : product.category }), _jsx("h1", { className: "display-5", children: product === null || product === void 0 ? void 0 : product.title }), _jsxs("h3", { className: "display-6 fw-bold my-4", children: ["$ ", product === null || product === void 0 ? void 0 : product.price] }), _jsx("p", { className: "lead", children: product === null || product === void 0 ? void 0 : product.description }), _jsx("button", { className: "btn btn-outline-dark px-4 py-2", onClick: () => product && handleCart(product), children: "Add to Cart" }), _jsx(Link, { to: "/cart", className: "btn btn-dark ms-2 px-3 py-2", onClick: () => product && handleCart(product, true), children: "Go to Cart" })] })] }), _jsx("div", { className: "container", children: _jsxs("div", { className: "mb-5", children: [_jsx("h1", { className: "display-6 fw-bolder text-center text-uppercase", children: "you may like" }), _jsx("hr", {})] }) }), displayedProducts.length > 0 ? (_jsx(ProductsCard, { products: displayedProducts })) : (_jsx(Loading, {})), _jsxs(Modal, { show: showModal, onHide: closeModal, centered: true, children: [_jsx(Modal.Header, { closeButton: true, children: _jsx(Modal.Title, { children: "Product Added" }) }), _jsx(Modal.Body, { children: _jsx("p", { children: "The product has been added to your cart." }) }), _jsxs(Modal.Footer, { children: [_jsx(Link, { to: "/cart", className: "btn btn-dark", onClick: () => product && handleCart(product, true), children: "Go to Cart" }), _jsx("button", { className: "btn btn-dark", onClick: closeModal, children: "Close" })] })] })] }));
};
export default ProductDetail;
