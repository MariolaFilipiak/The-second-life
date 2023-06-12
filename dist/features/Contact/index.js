import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        setName("");
        setEmail("");
        setMessage("");
    };
    return (_jsx("div", { className: "container py-4 min-vh-100 d-flex flex-column justify-content-center", children: _jsx("div", { className: "row", children: _jsx("div", { className: "col-xl-10 mx-auto", children: _jsx("div", { className: " border-0 shadow", children: _jsxs("div", { className: "row no-gutters justify-content-center", children: [_jsxs("div", { className: "col-sm-6 text-center py-5", children: [_jsx("h3", { className: "font-weight-bold", children: "Contact Us" }), _jsxs("form", { onSubmit: handleSubmit, children: [_jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "inputName", className: "sr-only control-label", children: "Name" }), _jsx("div", { className: "col-8 col-sm-12 col-md-10 mx-auto", children: _jsx("input", { type: "text", className: "form-control", id: "inputName", placeholder: "Your Name", value: name, onChange: (e) => setName(e.target.value), required: true }) })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "inputEmail", className: "sr-only control-label", children: "Email" }), _jsx("div", { className: "col-8 col-sm-12 col-md-10 mx-auto", children: _jsx("input", { type: "email", className: "form-control", id: "inputEmail", placeholder: "Your Email", value: email, onChange: (e) => setEmail(e.target.value), required: true }) })] }), _jsxs("div", { className: "form-group", children: [_jsx("label", { htmlFor: "inputMessage", className: "sr-only control-label", children: "Message" }), _jsx("div", { className: "col-8 col-sm-12 col-md-10 mx-auto", children: _jsx("textarea", { className: "form-control", id: "inputMessage", placeholder: "Your Message", value: message, onChange: (e) => setMessage(e.target.value), required: true }) })] }), _jsx("div", { className: "form-group justify-content-center", children: _jsx("div", { className: "pb-3 pt-2", children: _jsx("button", { type: "submit", className: "btn btn-dark rounded-pill", children: "Submit" }) }) })] })] }), _jsx("div", { className: "col-sm-6 rounded text-white text-center", children: _jsxs("div", { className: "bg-dark rounded p-5 h-100 d-flex flex-column align-items-center justify-content-center", children: [_jsx("h3", { className: "font-weight-bold", children: "Hello!" }), _jsx("p", { className: "small my-3", children: "We would love to hear from you" })] }) })] }) }) }) }) }));
};
export default Contact;
