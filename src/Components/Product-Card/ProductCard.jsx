/* eslint-disable react/prop-types */

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./ProductCard.css";
import { LinkContainer } from "react-router-bootstrap";
export default function ProductCard({ product }) {
  return (
    <Card style={{ width: "18rem" }}>
      <figure>
        <Card.Img variant="top" src={product.image} />
      </figure>
      <Card.Body>
        <Card.Title className="d-flex align-items-center">
          {product.title}
        </Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <LinkContainer
          to={`/shop/${encodeURIComponent(product.title)}/${product.id}`}
        >
          <Button variant="primary">View Details</Button>
        </LinkContainer>
      </Card.Body>
    </Card>
  );
}
