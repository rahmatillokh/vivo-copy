import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { PRODUCTS, product__buttons } from "../../static/data";

import "./css/products.css";

function Products() {
  return (
    <div className="product__bolim">
      <Navbar />
      <h2>Find the phone that's right for you</h2>
      <div className="buttons">
        {product__buttons?.map((item, id) => (
          <button type="button" key={id}>
            {item}
          </button>
        ))}
      </div>
      <div className="products">
        {PRODUCTS?.map((item, id) => (
          <div className="product">
            <img src={`${item.img}`} alt="" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
