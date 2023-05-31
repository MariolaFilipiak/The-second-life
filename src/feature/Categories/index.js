import React, { useEffect, useState } from "react";
import CategoriesButtons from "./CategoriesButtons";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
        const response = await fetch("/products.json");
        if (response.ok) {
          const data = await response.json();
          const uniqueCategories = [
            ...new Set(data.map((product) => product.category)),
          ];
          setCategories(uniqueCategories);
        }
      }
      

    fetchCategories();
  }, []);

  return <CategoriesButtons cards={categories} />;
};

export default Categories;
