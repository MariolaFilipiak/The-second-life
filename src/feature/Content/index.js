import Intro from "../Intro";
import PopularProducts from "../Products/PopularProducts"
const Content = ({ products }) => {
  return (
    <>
      <Intro />
      <PopularProducts products={products} />
    </>
  );
};

export default Content;
