import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, selectProducts } from "../productsSlice";
import { shuffleProducts } from "../shufleProducts";
import Categories from "../../Categories";
import ProductsCard from "../ProductsCard";
import { Loading } from "../../../common/Loading";
import { Product } from "../type";

interface PopularProductsProps {
  products: Product[];
}

const PopularProducts = ({ products }: PopularProductsProps) => {
  const dispatch = useDispatch();
  const fetchedProducts = useSelector(selectProducts) as Product[];
  const displayedProducts = shuffleProducts(fetchedProducts).slice(0, 8);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="container-fluid">
      <div className=" mb-5">
        <h1 className="display-6 fw-bolder text-center">POPULAR PRODUCTS</h1>
        <hr />
      </div>
      <div>
        <div className="d-flex flex-wrap my-3 py-3 justify-content-center ">
          <Categories />
        </div>
        {displayedProducts.length > 0 ? (
          <ProductsCard products={displayedProducts} />
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default PopularProducts;
