import React from "react";
import ProductShowcase from "../product-item";

const ProductsGrid = ({ products, onRequest }) => {
  return (
    <article className="products-container-article">
      <h1>Sua seleção especial</h1>
      <div className="products-grid">
        <div className="grid-row">
          {products.map(product => (
            <ProductShowcase product={product} key={product.id} />
          ))}
        </div>
      </div>
      <button
        className="article-end-button"
        onClick={() => {
          onRequest();
        }}
      >
        Ainda mais produtos aqui!
      </button>
    </article>
  );
};

export default ProductsGrid;
