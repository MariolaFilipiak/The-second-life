import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Loading } from "../../Loading";
import ProductsCard from "../../Products/ProductsCard";


const CategoryProducts = () => {
  const { name } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const response = await axios.get(`/products.json`);
      const data = response.data;
      const selectedProducts = data.filter(
        (product) => product.category === name
      );
      setProducts(selectedProducts);
      setIsLoading(false);
    };
    fetchProducts();
  }, [name]);

  return (
    <div className="container mb-5 my-5">
      <Link to={"/products"} className="btn py-2 px-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />
        </svg>{" "}
        Back to shop
      </Link>
      <div className="text-center mb-5 mt-5">
        <div>
          {isLoading ? <Loading /> : <ProductsCard products={products} />}
        </div>
      </div>
    </div>
  );
};

export default CategoryProducts;
