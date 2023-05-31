import { Link } from "react-router-dom";
import "./index.css";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

const ProductsCard = ({ products = [] }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
      <div className="row  row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4  ">
        {products.map((product) => (
          <div className="col" key={product.id}>
            <div className="mx-1 mb-4 w-100 ">
              <div className="card  text-center">
                <img
                  src={product.image}
                  alt={product.title}
                  height={"70%"}
                  onClick={() => openModal(product.image)}
                />
                <div className="card-body card-body-height">
                  <h5 className="card-title mb-2">{product.title}</h5>
                  <p className="card-text lead fw-bold">${product.price}</p>
                  <Link
                    to={`/products/${product.id}`}
                    className="btn btn-outline-dark  py-2"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Body>
          <img src={selectedImage} alt="Product" className="img-fluid" />
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-outline-muted rounded-circle"
            onClick={closeModal}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              width: "40px",
              height: "40px",
              padding: "0",
              color: "gray",
            }}
          >
            X
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProductsCard;
