import React from "react";

const Welcome = () => {
  return (
    <header className="jumbotron mt-4">
      <h1>ยินดีต้อนรับสู่ร้าน MyShop</h1>
      <p>
        ศูนย์รวมสินค้าคุณภาพดี ราคาย่อมเยา พร้อมส่งตรงถึงหน้าบ้านคุณ ❤️
      </p>
      <p>
        <a href="#products" className="btn btn-primary btn-lg mt-2">
          ดูสินค้าทั้งหมด
        </a>
      </p>
    </header>
  );
};

export default Welcome;
