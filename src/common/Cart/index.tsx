import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  selectCartItems,
  selectCartTotalQuantity,
  selectCartTotalValue,
  updateQuantity,
} from "./cartSlice";
import CartIsEmpty from "./CartIsEmpty";

const Cart = () => {
  const navigate = useNavigate();
  const carts = useSelector(selectCartItems);
  const total = useSelector(selectCartTotalQuantity);
  const totalValue = useSelector(selectCartTotalValue);
  const dispatch = useDispatch();

  const handleInc = (id: any) => {
    const cart = carts.find((item) => item.id === id);
    if (cart) {
      const newQuantity = cart.quantity + 1;
      dispatch(updateQuantity({ productId: id, quantity: newQuantity }));
    }
    navigate("/cart");
  };

  const handleDec = (id: any) => {
    const cart = carts.find((item) => item.id === id);
    if (cart && cart.quantity > 1) {
      const newQuantity = cart.quantity - 1;
      dispatch(updateQuantity({ productId: id, quantity: newQuantity }));
    }
    navigate("/cart");
  };

  const removeProduct = (id: any) => {
    dispatch(removeFromCart(id));
    navigate("/cart");
  };

  if (carts.length === 0) {
    return <CartIsEmpty />;
  }

  return (
    <>
      <section className="min-vh-100">
        <div className="container py-2 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-lg-8">
                    <div className="p-5">
                      <div className="d-flex justify-content-between align-items-center mb-5">
                        <h1 className="fw-bold mb-0 text-black">Cart</h1>
                        <h6 className="mb-0 text-muted">{total} items</h6>
                      </div>
                      <hr className="my-4" />
                      {carts?.map((cart) => {
                        const { id, quantity, price, title, image } = cart;
                        return (
                          <>
                            <div className="row mb-4 d-flex justify-content-center align-items-center">
                              <div className="col-6 col-sm-4 col-md-2 col-lg-2 col-xl-2 ">
                                <img
                                  key={title}
                                  src={image}
                                  alt={title}
                                  className="img-fluid rounded-3 "
                                />
                              </div>
                              <div className="col-md-3 col-lg-3 col-xl-3 ">
                                <h6 className="text-black m-3 text-center">
                                  {title}
                                </h6>
                              </div>
                              <div className="col-md-3 col-lg-3 col-xl-2 d-flex justify-content-center">
                                <button
                                  className="btn btn-link "
                                  onClick={() => handleDec(id)}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-dash-lg"
                                    viewBox="0 0 16 16"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                                    />
                                  </svg>
                                </button>

                                <input
                                  style={{ width: "70px" }}
                                  value={cart.quantity}
                                  onChange={(e) =>
                                    dispatch(
                                      updateQuantity({
                                        productId: id,
                                        quantity: +e.target.value,
                                      })
                                    )
                                  }
                                  className="form-control text-center form-fs-sm mb-3 mt-3"
                                />

                                <button
                                  className="btn btn-link "
                                  onClick={() => handleInc(id)}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-plus"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                                  </svg>
                                </button>
                              </div>
                              <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                <h6 className="m-3 text-center">
                                  ${(price * quantity).toFixed(2)}
                                </h6>
                              </div>
                              <div className="col-md-1 col-lg-1 col-xl-1 text-center ">
                                <Link
                                  to={""}
                                  onClick={() => removeProduct(id)}
                                  className="text-muted "
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-trash"
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z" />
                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z" />
                                  </svg>
                                </Link>
                              </div>
                            </div>

                            <hr className="my-4" />
                          </>
                        );
                      })}

                      <div className="pt-5">
                        <h6 className="mb-0">
                          <Link to={"/products"} className="btn  py-2 px-5 ">
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
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 bg-grey">
                    <div className="p-5">
                      <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                      <hr className="my-4" />

                      <div className="d-flex justify-content-between mb-4">
                        <h5 className="text-uppercase">{total} items</h5>
                        <h5>{totalValue.toFixed(2)}$</h5>
                      </div>
                      <h5 className="text-uppercase mb-3">Shipping</h5>
                      <div className="mb-4 pb-2">
                        <select className="select">
                          <option value="1">Standard-Delivery- $10.00</option>{" "}
                        </select>
                      </div>

                      <hr className="my-4" />
                      <div className="d-flex justify-content-between mb-5">
                        <h5 className="text-uppercase">Total price</h5>
                        <h5>${(totalValue + 10).toFixed(2)}</h5>
                      </div>
                      <div className="text-center">
                        <button className="btn btn-outline-dark py-2 px-5">
                          Pay
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
