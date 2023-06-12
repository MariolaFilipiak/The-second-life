import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { selectCartTotalQuantity } from "../Cart/cartSlice";
import "./style.css";
const Navigation = ({ total }) => {
    const location = useLocation();
    const cartTotal = useSelector(selectCartTotalQuantity);
    return (_jsx("nav", { className: "navbar navbar-expand-lg bg-body-tertiary py-3 px-3", children: _jsxs("div", { className: "container-fluid", children: [_jsx(Link, { to: "/", className: "navbar-brand mx-auto fw-bold fs-1", children: "THE SECOND LIFE" }), _jsx("button", { className: "navbar-toggler", type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#navbarSupportedContent", "aria-controls": "navbarSupportedContent", "aria-expanded": "false", "aria-label": "Toggle navigation", children: _jsx("span", { className: "navbar-toggler-icon" }) }), _jsxs("div", { className: "collapse navbar-collapse", id: "navbarSupportedContent", children: [_jsxs("ul", { className: "navbar-nav mx-auto mb-2 mb-lg-0", children: [_jsx("li", { className: "nav-item", children: _jsx(Link, { className: `nav-link ${location.pathname === "/" ? "active" : ""}`, to: "/", children: "Home" }) }), _jsx("li", { className: "nav-item", children: _jsx(Link, { className: `nav-link ${location.pathname === "/products" ? "active" : ""}`, to: "/products", children: "Products" }) }), _jsx("li", { className: "nav-item", children: _jsx(Link, { className: `nav-link ${location.pathname === "/about" ? "active" : ""}`, to: "/about", children: "About" }) }), _jsx("li", { className: "nav-item", children: _jsx(Link, { className: `nav-link ${location.pathname === "/contact" ? "active" : ""}`, to: "/contact", children: "Contact" }) })] }), _jsxs("div", { className: "buttons", children: [_jsxs(Link, { to: "/login", className: "btn btn-outline-dark", children: [_jsx("span", { className: "fa fa-sign-in me-1" }), " Login"] }), _jsxs(Link, { to: "/cart", className: "btn btn-outline-dark ms-2", children: [_jsx("span", { className: "fa fa-shopping-cart me-1" }), " Cart(", cartTotal, ")"] })] })] })] }) }));
};
export default Navigation;
