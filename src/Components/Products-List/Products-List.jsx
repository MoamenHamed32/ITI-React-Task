import React from "react";
import ProductCard from "../Product-Card/ProductCard";

export default function ProductsList({ products }) {
  const cards =
    products.length > 0 ? (
      products.map((card) => {
        return (
          <div className="col-lg-3 my-3" key={card.id}>
            <ProductCard product={card} />
          </div>
        );
      })
    ) : (
      <p>data not found</p>
    );

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
