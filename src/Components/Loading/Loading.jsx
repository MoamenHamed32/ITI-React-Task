import React from "react";
import Spinner from "react-bootstrap/Spinner";
import "./Loading.css";

export default function Loading({ loading, error, children }) {
  console.log(children);
  if (loading) {
    return (
      <div className="container loading-container">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }
  if (error) {
    return console.error(error);
  }
  return <div>{children}</div>;
}
