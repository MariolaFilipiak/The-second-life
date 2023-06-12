import { jsx as _jsx } from "react/jsx-runtime";
export const Loading = () => {
    return (_jsx("div", { className: "d-flex justify-content-center align-items-center min-vh-100", children: _jsx("div", { className: "spinner-border", role: "status", children: _jsx("span", { className: "visually-hidden", children: "Loading..." }) }) }));
};
