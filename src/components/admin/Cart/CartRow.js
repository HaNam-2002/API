import React from "react";
import "./CartManager.css";

const CartRow = (props) => {
  const {
    msp,
    imgUrl,
    name,
    customer_name,
    numberPhone,
    inf,
    message,
    quantity,
    price,
    order_date,
  } = props;

  return (
    <tr>
      <td>{msp}</td>
      <td>
        <img className="img_product" src={imgUrl} alt="Lỗi" />
      </td>
      <td>{name}</td>
      <td>
        <p className="cart-info">{`Tên: ${customer_name}`}</p>
        <p className="cart-info">{`Số điện thoại: ${numberPhone}`}</p>
        <p className="cart-info">{`Địa chỉ: ${inf}`}</p>
      </td>
      <td>{message}</td>
      <td>{quantity}</td>
      <td>{`${price}đ`}</td>
      <td>{order_date}</td>
      <td>
        <button className="w3-yellow button_admin">Xác nhận</button>
      </td>
    </tr>
  );
};

export default CartRow;
