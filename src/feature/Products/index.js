import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, selectProducts, selectProductsStatus } from "./productsSlice";
import { Loading } from "../Loading";
import Categories from "../Categories";
import ProductsCard from "./ProductsCard";


const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const status = useSelector(selectProductsStatus);
  const displayedProducts = products.slice(0, 40);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return {
    loading: <Loading />,
    success: (
      <>
      <div className="container">
        <div className="mb-3">
          <h1 className="display-6 fw-bolder text-center mt-3">ALL PRODUCTS</h1>
          <hr />
        </div>
      </div>
      <div className="container text-center d-flex flex-wrap my-3 py-3 justify-content-center">
        <Categories />
      </div>
        <ProductsCard products={displayedProducts} />    </>
    ),
    error: <p>error</p>
  }[status];
  };

export default Products;

