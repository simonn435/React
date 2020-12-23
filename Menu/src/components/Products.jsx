import React from "react";
const Product = ({ items }) => {
  return (
    <section className="products">
      {items.map(({ id, title, desc, category, price, img }) => {
        return (
          <div className="product" key={id}>
            <img src={img} alt={title} />
            <div className="product-info">
              <div className="product-header">
                <h4>{title}</h4>
                <span>{price}</span>
              </div>
              <div className="product-footer">
                <p>{desc}</p>
                <span>{category}</span>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Product;
