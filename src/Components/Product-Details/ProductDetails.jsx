import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import ReactStars from "react-rating-stars-component";

import "./ProductDetails.css";

export default function ProductDetails() {
  const [prodcut, setProduct] = useState({});
  const { id } = useParams();

  const getProductData = () => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };
  useEffect(() => {
    getProductData();
  }, []);
  console.log(prodcut);
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <section
      id="product-details"
      className="d-flex justify-content-center align-items-center "
    >
      <div className="container">
        <div className="product d-flex gap-5 p-">
          <figure className=" d-flex justify-content-center align-items-center shadow-lg">
            <img src={prodcut.image} alt="" />
          </figure>
          <div className="product-info d-flex flex-column gap-3">
            <h2 className="title">{prodcut.title}</h2>

            <h3 className="price">${prodcut.price}</h3>
            <Badge bg="primary">{prodcut.category}</Badge>
            <p className="desc w-75">{prodcut.description}</p>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
              isHalf={true}
              value={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
