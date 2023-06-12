var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import CategoriesButtons from "./CategoriesButtons";
import axios from "axios";
const Categories = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const fetchCategories = () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const response = yield axios.get("/The-second-life/products.json");
                const data = response.data;
                const uniqueCategories = [
                    ...new Set(data.map((product) => product.category)),
                ];
                setCategories(uniqueCategories);
            }
            catch (error) {
                console.error(error);
            }
        });
        fetchCategories();
    }, []);
    return _jsx(CategoriesButtons, { cards: categories });
};
export default Categories;
