import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import "./index.css";
const ProductsCard = ({ products }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");
    const openModal = (image) => {
        setSelectedImage(image);
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
    };
    return (_jsxs("div", { className: "container", children: [_jsx("div", { className: "row  row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4  ", children: products.map((product) => (_jsx("div", { className: "col", children: _jsx("div", { className: "mx-1 mb-4 w-100 ", children: _jsxs("div", { className: "card  text-center", children: [_jsx("img", { src: product.image, alt: product.title, height: "70%", onClick: () => openModal(product.image) }), _jsxs("div", { className: "card-body card-body-height", children: [_jsx("h5", { className: "card-title mb-2", children: product.title }), _jsxs("p", { className: "card-text lead fw-bold", children: ["$", product.price] }), _jsx(Link, { to: `/products/${product.id}`, className: "btn btn-outline-dark  py-2", children: "Buy Now" })] })] }) }) }, product.id))) }), _jsxs(Modal, { show: showModal, onHide: closeModal, centered: true, children: [_jsx(Modal.Body, { children: _jsx("img", { src: selectedImage, alt: "Product", className: "img-fluid" }) }), _jsx(Modal.Footer, { children: _jsx("button", { className: "btn btn-outline-muted rounded-circle", onClick: closeModal, style: {
                                position: "absolute",
                                top: "20px",
                                right: "20px",
                                width: "40px",
                                height: "40px",
                                padding: "0",
                                color: "gray",
                            }, children: "X" }) })] })] }));
};
export default ProductsCard;
