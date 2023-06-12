import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, selectCartItems, selectCartTotalQuantity, selectCartTotalValue, updateQuantity } from "./cartSlice";
import CartIsEmpty from "./CartIsEmpty";
const Cart = () => {
    const navigate = useNavigate();
    const carts = useSelector(selectCartItems);
    const total = useSelector(selectCartTotalQuantity);
    const totalValue = useSelector(selectCartTotalValue);
    const dispatch = useDispatch();
    const handleInc = (id) => {
        const cart = carts.find((item) => item.id === id);
        if (cart) {
            const newQuantity = cart.quantity + 1;
            dispatch(updateQuantity({ productId: id, quantity: newQuantity }));
        }
        navigate("/cart");
    };
    const handleDec = (id) => {
        const cart = carts.find((item) => item.id === id);
        if (cart && cart.quantity > 1) {
            const newQuantity = cart.quantity - 1;
            dispatch(updateQuantity({ productId: id, quantity: newQuantity }));
        }
        navigate("/cart");
    };
    const removeProduct = (id) => {
        dispatch(removeFromCart(id));
        navigate("/cart");
    };
    if (carts.length === 0) {
        return _jsx(CartIsEmpty, {});
    }
    return (_jsx(_Fragment, { children: _jsx("section", { className: "min-vh-100", children: _jsx("div", { className: "container py-2 h-100", children: _jsx("div", { className: "row d-flex justify-content-center align-items-center h-100", children: _jsx("div", { className: "col-12", children: _jsx("div", { className: "card-body p-0", children: _jsxs("div", { className: "row g-0", children: [_jsx("div", { className: "col-lg-8", children: _jsxs("div", { className: "p-5", children: [_jsxs("div", { className: "d-flex justify-content-between align-items-center mb-5", children: [_jsx("h1", { className: "fw-bold mb-0 text-black", children: "Cart" }), _jsxs("h6", { className: "mb-0 text-muted", children: [total, " items"] })] }), _jsx("hr", { className: "my-4" }), carts === null || carts === void 0 ? void 0 : carts.map((cart) => {
                                                    const { id, quantity, price, title, image } = cart;
                                                    return (_jsxs(_Fragment, { children: [_jsxs("div", { className: "row mb-4 d-flex justify-content-center align-items-center", children: [_jsx("div", { className: "col-6 col-sm-4 col-md-2 col-lg-2 col-xl-2 ", children: _jsx("img", { src: image, alt: title, className: "img-fluid rounded-3 " }, title) }), _jsx("div", { className: "col-md-3 col-lg-3 col-xl-3 ", children: _jsx("h6", { className: "text-black m-3 text-center", children: title }) }), _jsxs("div", { className: "col-md-3 col-lg-3 col-xl-2 d-flex justify-content-center", children: [_jsx("button", { className: "btn btn-link ", onClick: () => handleDec(id), children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-dash-lg", viewBox: "0 0 16 16", children: _jsx("path", { fillRule: "evenodd", d: "M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" }) }) }), _jsx("input", { style: { width: "70px" }, value: cart.quantity, onChange: (e) => dispatch(updateQuantity({
                                                                                    productId: id,
                                                                                    quantity: +e.target.value,
                                                                                })), className: "form-control text-center form-fs-sm mb-3 mt-3" }), _jsx("button", { className: "btn btn-link ", onClick: () => handleInc(id), children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-plus", viewBox: "0 0 16 16", children: _jsx("path", { d: "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" }) }) })] }), _jsx("div", { className: "col-md-3 col-lg-2 col-xl-2 offset-lg-1", children: _jsxs("h6", { className: "m-3 text-center", children: ["$", (price * quantity).toFixed(2)] }) }), _jsx("div", { className: "col-md-1 col-lg-1 col-xl-1 text-center ", children: _jsx(Link, { to: "", onClick: () => removeProduct(id), className: "text-muted ", children: _jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-trash", viewBox: "0 0 16 16", children: [_jsx("path", { d: "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" }), _jsx("path", { d: "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" })] }) }) })] }), _jsx("hr", { className: "my-4" })] }));
                                                }), _jsx("div", { className: "pt-5", children: _jsx("h6", { className: "mb-0", children: _jsxs(Link, { to: "/products", className: "btn  py-2 px-5 ", children: [_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", fill: "currentColor", className: "bi bi-arrow-left", viewBox: "0 0 16 16", children: _jsx("path", { fillRule: "evenodd", d: "M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" }) }), " ", "Back to shop"] }) }) })] }) }), _jsx("div", { className: "col-lg-4 bg-grey", children: _jsxs("div", { className: "p-5", children: [_jsx("h3", { className: "fw-bold mb-5 mt-2 pt-1", children: "Summary" }), _jsx("hr", { className: "my-4" }), _jsxs("div", { className: "d-flex justify-content-between mb-4", children: [_jsxs("h5", { className: "text-uppercase", children: [total, " items"] }), _jsxs("h5", { children: [totalValue.toFixed(2), "$"] })] }), _jsx("h5", { className: "text-uppercase mb-3", children: "Shipping" }), _jsx("div", { className: "mb-4 pb-2", children: _jsxs("select", { className: "select", children: [_jsx("option", { value: "1", children: "Standard-Delivery- $10.00" }), " "] }) }), _jsx("hr", { className: "my-4" }), _jsxs("div", { className: "d-flex justify-content-between mb-5", children: [_jsx("h5", { className: "text-uppercase", children: "Total price" }), _jsxs("h5", { children: ["$", (totalValue + 10).toFixed(2)] })] }), _jsx("div", { className: "text-center", children: _jsx("button", { className: "btn btn-outline-dark py-2 px-5", children: "Pay" }) })] }) })] }) }) }) }) }) }) }));
};
export default Cart;
