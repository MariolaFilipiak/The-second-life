import { Route, Routes } from "react-router-dom";
import Product from "./feature/Products/Product";
import Products from "./feature/Products";
import About from "./feature/About";
import Contact from "./feature/Contact";
import CategoryProducts from "./feature/Categories/CategoryProducts";
import Cart from "./common/Cart";
import Login from "./feature/Login";
import Footer from "./feature/Footer";
import { ScrollToTop } from "./common/ScrollToTop";
import Nav from "./common";
import Content from "./feature/Content";


function App() {
  return (
    <>
      <Nav />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/category/:name" element={<CategoryProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
