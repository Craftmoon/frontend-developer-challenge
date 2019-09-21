import React from "react";

const ProductItem = ({ product }) => {
  const {
    id,
    image,
    name,
    description,
    oldPrice,
    price,
    installments
  } = product;

  return (
    <article className="grid-item" key={id}>
      <section style={{ maxWidth: 200 }}>
        <img src={`http:${image}`} alt={name} />
        <div className="product-name">{name}</div>
        <div className="product-content">
          {description}
          <div className="old-price">De: R${oldPrice}</div>
          <div className="price">Por: R${price} </div>
          <div className="installments">
            ou: {installments.count}x de R${installments.value}{" "}
          </div>
        </div>
        <button className="buy-button">Comprar</button>
      </section>
    </article>
  );
};

export default ProductItem;
