import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import Intro from "../Intro";
import PopularProducts from "../Products/PopularProducts";
const Content = ({ products }) => {
    return (_jsxs(_Fragment, { children: [_jsx(Intro, {}), _jsx(PopularProducts, { products: products })] }));
};
export default Content;
