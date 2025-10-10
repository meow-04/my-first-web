import React from "react";
import ProductsItem from "./ProductsItem";

const Products = (props) => {
  const { products, title } = props;
  return (
    <div className="my-4">
      <h3 className="mb-3">{title}</h3>
      <div className="row">
        {products.map((p, index) => (
          <ProductsItem key={index} name={p.name} price={p.price} image={p.image} />
        ))}
      </div>
    </div>
  );
};

export default Products;
