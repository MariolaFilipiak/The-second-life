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
import { Loading } from "../../Loading";


const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [showModal, setShowModal] = useState(false);
  const products = useSelector(selectProducts);
  const displayedProducts = shuffleProducts(products).slice(0, 4);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await axios.get(`/products.json`);
      const productsData = response.data;
      const selectedProduct = productsData.find(
        (product) => product.id === parseInt(id)
      );
      setProduct(selectedProduct);
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

  return (
    <>
      <div className="container py-5 d-flex flex-wrap">
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
    </>
  );
};

export default Product;
