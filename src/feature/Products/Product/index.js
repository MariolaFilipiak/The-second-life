import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { selectProducts } from "../productsSlice";
import { shuffleProducts } from "../shufleProducts";
import { getProductsData } from "../../../common/getData";
import { addToCart } from "../../../common/Cart/cartSlice";
import ProductsCard from "../ProductsCard";
import { Loading } from "../../../common/Loading";
import Error from "../../../common/Error";
const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [showModal, setShowModal] = useState(false);
  const products = useSelector(selectProducts);
  const displayedProducts = shuffleProducts(products).slice(0, 4);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/The-second-life/products.json`);
        const productsData = response.data;
        const selectedProduct = productsData.find(
          (product) => product.id === parseInt(id)
        );
        if (selectedProduct) {
          setProduct(selectedProduct);
        } else {
          setError(true); 
        }
      } catch (error) {
        setError(true);
      }
    };
    fetchProduct();
    getProductsData();
  }, [id]);

  const handleCart = (product, redirect) => {
    dispatch(addToCart(product));
    if (redirect) {
      navigate("/cart");
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  if (error) {
    return (
     <Error/>
    );
  }
  return (
    <div className="container mb-5 ">
      <Link to={"/products"} className="btn  mb-5 my-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />
        </svg>{" "}
        Back to shop
      </Link>
      <div className="d-flex flex-wrap mb-5">
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.title}
            height="100%"
            width="80%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
          <p className="lead">{product.description}</p>
          <button
            className="btn btn-outline-dark px-4 py-2"
            onClick={() => handleCart(product)}
          >
            Add to Cart
          </button>
          <Link
            to="/cart"
            className="btn btn-dark ms-2 px-3 py-2"
            onClick={() => handleCart(product, true)}
          >
            Go to Cart
          </Link>
        </div>
      </div>
      <div className="container">
        <div className=" mb-5">
          <h1 className="display-6 fw-bolder text-center text-uppercase">
            you may like
          </h1>
          <hr />
        </div>
      </div>
      {displayedProducts.length > 0 ? (
        <ProductsCard products={displayedProducts} />
      ) : (
        <Loading />
      )}
      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Product Added</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>The product has been added to your cart.</p>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-dark" onClick={closeModal}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Product;
