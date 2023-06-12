import React, { useEffect, useState } from "react";
import CategoriesButtons from "./CategoriesButtons";
import axios from "axios";

interface Product {
  category: string;
  // ... inne pola produktu
}
const Categories  = () => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("/The-second-life/products.json");
        const data = response.data as Product[];
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
