import React from "react";
import "./CartManager.css";
function CartRow(props) {
  return (
    <>
      <tr>
        <td>{props.msp}</td>
        <td>
          <img className="img_product" src={props.imgUrl} alt="Lỗi" />
        </td>
        <td>{props.name}</td>
        <td>
          <p style={{ textAlign: "start", marginLeft: "10px" }}>
            Tên:
            {props.customer_name}
          </p>
          <p style={{ textAlign: "start", marginLeft: "10px" }}>
            Số điện thoại:
            {props.numberPhone}
          </p>
          <p style={{ textAlign: "start", marginLeft: "10px" }}>
            Địa chỉ: {props.inf}
          </p>
        </td>
        <td>{props.message}</td>
        <td>{props.quantity}</td>
        <td>{props.price}đ</td>
        <td>{props.order_date}</td>
        <td>
          <button className="w3-yellow">Xác nhận</button>
        </td>
      </tr>
    </>
  );
}

export default CartRow;
