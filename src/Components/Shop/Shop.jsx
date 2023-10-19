import { useEffect, useState } from "react";
import ProductCard from "../Product-Card/ProductCard";

export default function Shop() {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };
  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);

  let cards = products.map((card) => {
    return (
      <div className="col-lg-3 my-3" key={card.id}>
        <ProductCard product={card} />
      </div>
    );
  });
  return (
    <section
      id="shop"
      className="d-flex justify-content-center align-items-center my-5"
    >
      <div className="container">
        <div className="row">{cards}</div>
      </div>
    </section>
  );
}
