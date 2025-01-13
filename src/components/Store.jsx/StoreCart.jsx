import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function StoreCart(props) {
  const codeCoupon = 'one';
  const [code,setCode] = useState(1)

  const {
    image,
    productNumber,
    counter,
    price,
    increase,
    decrease,
    boolean,
    removeFromCart
  } = props;
  
  const discount=(e)=>{
    e.target.value == codeCoupon?setCode(0.5):setCode(1);
  }

  return (
    <div>
      {!boolean ? (
        <></>
      ) : (
        <div className="d-flex justify-content-evenly align-items-center border mb-3">
          <img src={image} style={{ width: "100px" }}/>
          <div>product {productNumber}</div>
          <div>
            <Button variant="info" onClick={() => increase(productNumber - 1)}>
              +
            </Button>{" "}
            <span className="mx-3">{counter}</span>{" "}
            <Button
              variant="danger"
              onClick={() => decrease(productNumber - 1)}
            >
              -
            </Button>
          </div>
          <div>{(price * counter)*code}$</div>
          <div>
            <input onChange={(e)=>discount(e)}></input>
          </div>
          
          <div>
            <Button variant="danger">
              <i
                className="fa-solid fa-trash-can"
                onClick={() => removeFromCart(productNumber - 1)}
              ></i>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
