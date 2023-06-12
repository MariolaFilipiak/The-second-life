import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import "./style.css";
const Error = () => {
    return (_jsx("div", { id: "notfound", children: _jsxs("div", { className: "notfound", children: [_jsx("div", { className: "notfound-404", children: _jsxs("h2", { children: ["Ooops! Something went wrong... ", _jsx("br", {}), "Please check your network connection and try again"] }) }), _jsx(Link, { to: "/", children: "Go To Homepage" })] }) }));
};
export default Error;
