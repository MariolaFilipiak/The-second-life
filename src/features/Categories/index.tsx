import { useEffect, useState } from "react";
import axios from "axios";
import CategoriesButtons from "./CategoriesButtons";
import { Product } from "../Products/type";

const Categories = () => {
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

  return <CategoriesButtons cards={categories} />;
};

export default Categories;
