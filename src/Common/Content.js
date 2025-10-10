import React from "react";
import Products from "./Products";
import Welcome from "./Welcome";

// ✅ import รูปจากโฟลเดอร์ imgs (4 รูปแรก)
import blanket from "../imgs/blanket.jpg";
import bolster from "../imgs/bolster.jpg";
import bedcover from "../imgs/bedcover.webp";
import pillow from "../imgs/pillow.jpg";

import notebook from "../imgs/notebook.jpg";
import fridge from "../imgs/fridge.jpg";
import washing from "../imgs/washing.jpg";
import microwave from "../imgs/microwave.jpg";

import pen from "../imgs/pen.jpg";
import eraser from "../imgs/eraser.jpg";
import ruler from "../imgs/ruler.jpg";

const Content = () => {
  const product1 = [
    { name: "ผ้านวม", price: "1800", image: blanket },
    { name: "หมอนข้าง", price: "900", image: bolster },
    { name: "ผ้าปูที่นอน", price: "2500", image: bedcover },
    { name: "หมอน", price: "1500", image: pillow },
  ];

    const product2 = [
    { name: "โน๊ตบุ๊ค", price: "25000", image: notebook },
    { name: "ตู้เย็น", price: "7500", image: fridge },
    { name: "เครื่องซักผ้า", price: "8900", image: washing },
    { name: "เตาไมโครเวฟ", price: "3200", image: microwave },
  ];

  // 🔹 เครื่องเขียน
  const product3 = [
    { name: "ปากกา", price: "15", image: pen },
    { name: "ยางลบ", price: "20", image: eraser },
    { name: "ไม้บรรทัด", price: "30", image: ruler },
  ];


  return (
    <div className="container mt-4">
      <Welcome />
      <hr />
      <Products title="🛏️ ชุดเครื่องนอน" products={product1} />
      <Products title="⚡ เครื่องใช้ไฟฟ้า" products={product2} />
      <Products title="✏️ เครื่องเขียน" products={product3} />
    </div>
  );
};

export default Content;