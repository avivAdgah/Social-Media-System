import React from "react";
import { Button } from "react-bootstrap";

export default function Store(props) {
  const {
    image,
    productNumber,
    category,
    price,
    counter,
    increase,
    decrease,
    addtoCart,
  } = props;
  return (
    <div className="d-flex flex-wrap flex-column">
      <img src={image} style={{ width: "700px" }} className="img-fluid w-100" alt="Product"></img>
      <div className="text-center">
        <h3>Product {productNumber}</h3>
        <p>
          category {category} {price}$
        </p>
        <Button variant="info" onClick={() => increase(productNumber - 1)}>
          +
        </Button>{" "}
        <span className="mx-3">{counter}</span>{" "}
        <Button variant="danger" onClick={() => decrease(productNumber - 1)}>
          -
        </Button>
        <Button
          variant="success"
          className="d-block m-auto mt-3"
          onClick={() => addtoCart(productNumber - 1)}
        >
          addToCart
        </Button>{" "}
      </div>
    </div>
  );
}
