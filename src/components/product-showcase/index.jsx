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
        <div className="product-name">{product.name}</div>
      </div>
      <div className="product-description">{product.description}</div>
      <div>De: R${product.oldPrice}</div>
      <div>Por: R${product.price} </div>
      <div>
        ou: {product.installments.count}x de R${product.installments.value}{" "}
      </div>

      <div>
        <button className="buy-button">Comprar</button>
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
