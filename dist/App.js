import { Route } from "react-router-dom";
import Product from "./features/Products/Product";
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
function App() {
    return (/>
        < ScrollToTop /  >
        path) = "/";
    element = {} < Content /  > ;
}
/>
    < Route;
path = "/products/:id";
element = {} < Product /  > ;
/>
    < Route;
path = "/products";
element = {} < Products /  > ;
/>
    < Route;
path = "/about";
element = {} < About /  > ;
/>
    < Route;
path = "/contact";
element = {} < Contact /  > ;
/>
    < Route;
path = "/category/:name";
element = {} < CategoryProducts /  > ;
/>
    < Route;
path = "/cart";
element = {} < Cart /  > ;
/>
    < Route;
path = "/login";
element = {} < Login /  > ;
/>
    < Route;
path = "*";
element = {} < NotFound /  > ;
/>
    < /Routes>
    < Footer /  >
    />;
;
export default App;
