import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Link } from "react-router-dom";
const CategoriesButtons = ({ cards }) => {
    return (_jsx(_Fragment, { children: cards === null || cards === void 0 ? void 0 : cards.map((card) => {
            return (_jsx("div", { className: "buttons", style: { marginTop: "10px" }, children: _jsx(Link, { to: `/category/${card}`, className: "btn btn-outline-dark me-2", children: card || "Example card" }) }, card));
        }) }));
};
export default CategoriesButtons;
