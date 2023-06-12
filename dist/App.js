import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./features/Products/ProductDetail";
import Products from "./features/Products";
import About from "./features/About";
import Contact from "./features/Contact";
import CategoryProducts from "./features/Categories/CategoryProducts";
import Cart from "./common/Cart";
import Login from "./common/Login";
import Footer from "./features/Footer";
import { ScrollToTop } from "./common/ScrollToTop";
import Content from "./features/Content";
import NotFound from "./common/NotFound";
import Navigation from "./common/Navigation";
function App() {
    return (_jsxs(_Fragment, { children: [_jsx(Navigation, { total: 0 }), _jsx(ScrollToTop, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Content, { products: [] }) }), _jsx(Route, { path: "/products/:id", element: _jsx(ProductDetail, {}) }), _jsx(Route, { path: "/products", element: _jsx(Products, {}) }), _jsx(Route, { path: "/about", element: _jsx(About, {}) }), _jsx(Route, { path: "/contact", element: _jsx(Contact, {}) }), _jsx(Route, { path: "/category/:name", element: _jsx(CategoryProducts, {}) }), _jsx(Route, { path: "/cart", element: _jsx(Cart, {}) }), _jsx(Route, { path: "/login", element: _jsx(Login, {}) }), _jsx(Route, { path: "*", element: _jsx(NotFound, {}) })] }), _jsx(Footer, {})] }));
}
export default App;
