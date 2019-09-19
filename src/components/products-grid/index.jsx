import React from "react";
import ProductShowcase from "../product-showcase";

import "./styles.css";

const ProductGrid = props => {
  const { products, onRequest } = props;

  return (
    <article className="container-fluid text-center">
      <h1>Sua seleção especial</h1>
      <div className="container">
        <div className="grid-row">
          {products.map(product => (
            <ProductShowcase product={product} key={product.id} />
          ))}
        </div>
      </div>
      <button
        className="more-products-button"
        onClick={() => {
          onRequest();
        }}
      >
        Ainda mais produtos aqui!
      </button>
    </article>
  );
};

export default ProductGrid;
