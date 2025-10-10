import React, { useState } from "react";

const ProductsItem = (props) => {
  const [added, setAdded] = useState(false);

  return (
    <div className="col-md-3 col-sm-6 mb-4">
      <div className="thumbnail text-center p-3">
        <img
          src={props.image}
          alt={props.name}
          className="img-fluid rounded mb-3"
        />
        <h5>{props.name}</h5>
        <p className="text-muted">ราคา {props.price} บาท</p>
        <button
          className={`btn ${added ? "btn-success" : "btn-primary"} me-2`}
          onClick={() => setAdded(true)}
        >
          {added ? "✅ เพิ่มแล้ว" : "เพิ่มลงตะกร้า"}
        </button>
        <button className="btn btn-outline-secondary">รายละเอียด</button>
      </div>
    </div>
  );
};

export default ProductsItem;
