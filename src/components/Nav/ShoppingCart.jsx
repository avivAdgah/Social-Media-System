import React from "react";
import StoreCart from "../Store.jsx/StoreCart";

export default function ShoppingCart(props) {
  const { data } = props;
  return (
    <div>
      <div className="d-flex justify-content-evenly border-bottom me-3">
        <p>Image</p>
        <p>Product</p>
        <p>Amout</p>
        <p>Price</p>
        <p>Coupon</p>
        <p>*</p>
      </div>
      <StoreCart
        image={data.images[0]}
        counter={data.counter[0]}
        increase={data.increase}
        decrease={data.decrease}
        price={data.prices[0]}
        productNumber={1}
        boolean={data.boolean[0]}
        removeFromCart={data.removeFromCart}
      />
      <StoreCart
        image={data.images[1]}
        counter={data.counter[1]}
        increase={data.increase}
        decrease={data.decrease}
        price={data.prices[1]}
        productNumber={2}
        boolean={data.boolean[1]}
        removeFromCart={data.removeFromCart}
      />
      <StoreCart
        image={data.images[2]}
        counter={data.counter[2]}
        increase={data.increase}
        decrease={data.decrease}
        price={data.prices[2]}
        productNumber={3}
        boolean={data.boolean[2]}
        removeFromCart={data.removeFromCart}
      />
      <StoreCart
        image={data.images[3]}
        counter={data.counter[3]}
        increase={data.increase}
        decrease={data.decrease}
        price={data.prices[3]}
        productNumber={4}
        boolean={data.boolean[3]}
        removeFromCart={data.removeFromCart}
      />
      <StoreCart
        image={data.images[4]}
        counter={data.counter[4]}
        increase={data.increase}
        decrease={data.decrease}
        price={data.prices[4]}
        productNumber={5}
        boolean={data.boolean[4]}
        removeFromCart={data.removeFromCart}
      />
    </div>
  );
}
