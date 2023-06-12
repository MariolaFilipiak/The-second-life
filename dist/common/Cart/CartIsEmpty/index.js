import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
const CartIsEmpty = () => {
    return (_jsx("div", { className: "container ", children: _jsx("div", { className: "row d-flex justify-item-center align-items-center", children: _jsx("div", { className: "col-12", children: _jsxs("div", { className: "p-5", children: [_jsx("hr", { className: "my-4" }), _jsxs("div", { className: "text-center m-5", children: [_jsx("h3", { children: "Your cart is empty" }), _jsxs(Link, { to: "/products", className: "btn btn-outline-dark m-3", children: [_jsx("i", { className: "fas fa-long-arrow-alt-left me-2" }), "Back to shop"] })] })] }) }) }) }));
};
export default CartIsEmpty;
