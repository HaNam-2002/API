import React from "react";
import CartRow from "./CartRow";
import "./CartManager.css";

const CartTable = () => {
  const rowData = {
    msp: "1",
    imgUrl:
      "https://cdn.mobilecity.vn/mobilecity-vn/images/2022/10/w300/xiaomi-redmi-note-12-xanh.png.webp",
    name: "Xiaomiiiiii",
    customer_name: "Nguyễn Thanh Minh",
    numberPhone: "0123456742",
    inf: "25-27 Ngô Văn Sở, Hoà Khánh Nam, Liên Chiểu, Đà Nẵng",
    message: "Cho thì lấy chứ không mua",
    quantity: "3",
    price: "15.000.000",
    order_date: "16/03/2023",
  };

  return (
    <table>
      <thead>
        <tr>
          <th>MSP</th>
          <th>HÌNH ẢNH</th>
          <th>TÊN SẢN PHẨM</th>
          <th>THÔNG TIN KHÁCH HÀNG</th>
          <th>LỜI NHẮN</th>
          <th>SỐ LƯỢNG</th>
          <th>TỔNG TIỀN</th>
          <th>NGÀY ĐẶT</th>
          <th style={{ width: "8%" }}>TRẠNG THÁI</th>
        </tr>
      </thead>
      <tbody>
        <CartRow {...rowData} />
      </tbody>
    </table>
  );
};

export default CartTable;
