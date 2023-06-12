import { Link } from "react-router-dom";

const CartIsEmpty = () => {
  return (
    <div className="container ">
      <div className="row d-flex justify-item-center align-items-center">
        <div className="col-12">
          <div className="p-5">
            <hr className="my-4" />
            <div className="text-center m-5">
              <h3>Your cart is empty</h3>
              <Link to={"/products"} className="btn btn-outline-dark m-3">
                <i className="fas fa-long-arrow-alt-left me-2"></i>
                Back to shop
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartIsEmpty;
