import React from "react";
import "./CartManager.css";
function CartRow(props) {
  return (
    <>
      <tr>
        <td>{props.msp}</td>
        <td>{props.th}</td>
        <td>
          <img src={props.imgUrl} alt="Lỗi" />
        </td>
        <td>{props.name}</td>
        <td>{props.status}</td>
        <td>{props.message}</td>
        <td>{props.quantity}</td>
        <td>{props.price}</td>
      </tr>
    </>
  );
}

export default CartRow;
