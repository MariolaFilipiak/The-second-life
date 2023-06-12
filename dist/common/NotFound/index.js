import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import "./style.css";
const NotFound = () => {
    return (_jsx("div", { id: "notfound", children: _jsxs("div", { className: "notfound", children: [_jsxs("div", { className: "notfound-404", children: [_jsx("h1", { children: "Oops!" }), _jsx("h2", { children: "404 - The Page can't be found" })] }), _jsx(Link, { to: "/", children: "Go To Homepage" })] }) }));
};
export default NotFound;
