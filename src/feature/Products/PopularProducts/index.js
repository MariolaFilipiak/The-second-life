import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, selectProducts } from "../productsSlice";
import { shuffleProducts } from "../shufleProducts";
import Categories from "../../Categories";
import ProductsCard from "../ProductsCard";
import { Loading } from "../../../common/Loading";


const PopularProducts = () => {
  const dispatch= useDispatch();
  const products = useSelector(selectProducts);
  const displayedProducts = shuffleProducts(products).slice(0, 8);

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
