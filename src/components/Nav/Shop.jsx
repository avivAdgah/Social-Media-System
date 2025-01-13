import React from "react";
import Store from "../Store.jsx/Store";

export default function Shop(props){
  const {data} = props
  return (
    <div className=" d-flex flex-column align-items-center">
      <div className="d-flex">
      <Store
        image={data.images[0]}
        productNumber={1}
        category={1}
        price={data.prices[0]}
        counter={data.counter[0]}
        increase={data.increase}
        decrease={data.decrease}
        addtoCart={data.addtoCart}
      />
      <Store
        image={data.images[1]}
        productNumber={2}
        category={1}
        price={data.prices[1]}
        counter={data.counter[1]}
        increase={data.increase}
        decrease={data.decrease}
        addtoCart={data.addtoCart}
      />
      </div>
      <div className="d-flex">
      <Store
        image={data.images[2]}
        productNumber={3}
        category={2}
        price={data.prices[2]}
        counter={data.counter[2]}
        increase={data.increase}
        decrease={data.decrease}
        addtoCart={data.addtoCart}
      />
      <Store
        image={data.images[3]}
        productNumber={4}
        category={2}
        price={data.prices[3]}
        counter={data.counter[3]}
        increase={data.increase}
        decrease={data.decrease}
        addtoCart={data.addtoCart}
      />
      </div>
      <div className="d-flex">
      <Store
        image={data.images[4]}
        productNumber={5}
        category={3}
        price={data.prices[4]}
        counter={data.counter[4]}
        increase={data.increase}
        decrease={data.decrease}
        addtoCart={data.addtoCart}
      />
      </div>
    </div>
  );
}

