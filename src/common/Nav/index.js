import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { selectCartTotalQuantity } from "../Cart/cartSlice";
import "./index.css";


const Nav = () => {
  const location = useLocation();
  const total = useSelector(selectCartTotalQuantity);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 px-3">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand mx-auto fw-bold fs-1 ">
          THE SECOND LIFE
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
            <Link
                className={`nav-link ${location.pathname === "/products" ? "active" : ""}`}
                to="/products"
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
            <Link
                className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
            <Link className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="buttons">
            <Link to={"/login"} className="btn btn-outline-dark">
              <span className="fa fa-sign-in me-1"></span> Login
            </Link>
            <Link to={"/cart"} className="btn btn-outline-dark ms-2">
              <span className="fa fa-shopping-cart me-1"></span> Cart({total})
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
