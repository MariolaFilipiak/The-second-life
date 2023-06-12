import Intro from "../Intro";
import PopularProducts from "../Products/PopularProducts";

type Product = {
  products: [];
};

const Content = ({ products }: Product) => {
  return (
    <>
      <Intro />
      <PopularProducts products={products} />
    </>
  );
};

export default Content;
