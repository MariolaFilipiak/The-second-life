import axios from "axios";

export const getProductsData = async () => {
  const response = await axios.get("/products.json");
  return{
    products:response.data,
  } 
};

