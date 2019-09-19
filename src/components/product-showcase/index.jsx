import React from "react";
import "./styles.css";

const ProductShowcase = props => {
  const product = props.product;

  return (
    <section className="grid-item" key={product.id}>
      <div style={{ maxWidth: 200 }}>
        <img
          src={`http:${product.image}`}
          alt={product.name}
          className="product-image"
        />
        <div className="row">
          <div className="col product-name">{product.name}</div>
        </div>
        <div className="row">
          <div className="col product-description">{product.description}</div>
        </div>
        <div className="row">
          <div className="col"></div>
        </div>
        <div className="row">
          <div className="col">
            <button className="buy-button">Comprar</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;

// id,
//   description,
//   image,
//   name,
//   installments,
//   price,
//   oldPrice
