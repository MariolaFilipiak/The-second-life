import axios from "axios";
export const getProductsData = async () => {

  const response = await axios.get("/the-second-life/products.json");
  return{
    products:response.data,
  } 
};

