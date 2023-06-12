import {Route, Routes } from "react-router-dom";
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
  return (
    <>
    <Navigation total={0} />
    <ScrollToTop/>
    <Routes>
      <Route path="/" element={<Content products={[]} />} />
      <Route path="/products/:id" element={<ProductDetail />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/category/:name" element={<CategoryProducts />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    <Footer />
  </>
  );
}

export default App;