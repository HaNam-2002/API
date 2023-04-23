import React, { useState } from "react";

function CartItem({ index }) {
  const [item, setItem] = useState({
    number: 0,
    color: "",
  });

  const handleIncrease = () => {
    setItem((prevItem) => ({ ...prevItem, number: prevItem.number + 1 }));
  };

  const handleDecrease = () => {
    if (item.number > 0) {
      setItem((prevItem) => ({ ...prevItem, number: prevItem.number - 1 }));
    }
  };

  const handleChangeColor = (event) => {
    setItem((prevItem) => ({ ...prevItem, color: event.target.value }));
  };

  return (
    <li className="product-item">
      <div className="imgsp">
        <a href="#">
          <img
            src="https://cdn.tgdd.vn/Products/Images/42/247508/iphone-14-pro-vang-thumb-600x600.jpg"
            alt="Lỗi"
          />
          <div className="imgsp-btn">
            <button className="btn-delete" type="button">
              Xoá
            </button>
          </div>
        </a>
      </div>
      <div className="infosp">
        <div className="infosp-name">
          <h3>IPHONE 13 PROMAX</h3>
        </div>
        <div className="infosp-color">
          <select value={item.color} onChange={handleChangeColor}>
            <option value="">-- Chọn màu --</option>
            <option value="red">Đỏ</option>
            <option value="blue">Xanh</option>
            <option value="green">Lục</option>
          </select>
        </div>
      </div>
      <div className="infosp-price">
        <h4 className="infosp-price-text">25.000.000đ</h4>
        <div className="choose-number">
          <div className="number-buttons">
            <button onClick={handleDecrease} type="button">
              -
            </button>
            <input type="text" value={item.number} readOnly />
            <button onClick={handleIncrease} type="button">
              +
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
export default CartItem;
