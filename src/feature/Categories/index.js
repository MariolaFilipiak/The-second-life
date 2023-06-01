import React, { useEffect, useState } from "react";
import CategoriesButtons from "./CategoriesButtons";
import axios from "axios";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("/The-second-life/products.json");
        const data = response.data;
        const uniqueCategories = [
          ...new Set(data.map((product) => product.category)),
        ];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCategories();
  }, []);

  return <CategoriesButtons cards={categories} />
};

export default Categories;
