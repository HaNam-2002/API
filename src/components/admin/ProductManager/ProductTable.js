import React from "react";
import ProductRow from "./ProductRow";
import "./ProductManager.css";
function ProductTable() {
  return (
    <table>
      <tr>
        <th>MSP</th>
        <th>THƯƠNG HIỆU</th>
        <th>HÌNH ẢNH</th>
        <th>TÊN SẢN PHẨM</th>
        <th>TIÊU ĐỀ</th>
        <th>MIÊU TẢ</th>
        <th>GIÁ</th>
        <th></th>
      </tr>
      <ProductRow
        msp="01"
        th="XIAOMI"
        imgUrl="https://cdn.mobilecity.vn/mobilecity-vn/images/2022/10/w300/xiaomi-redmi-note-12-xanh.png.webp"
        name="Điện thoại Xiaomi Redmi Note 12"
        title="Thời gian bảo hành: BH Thường 12 Tháng"
        description="Xiaomi Redmi Note 12 5G được trình làng vào ngày 27/10/2022. Ngoài sở hữu thiết kế đẹp mắt, máy còn có thông số kỹ thuật ấn tượng: Chip mạnh hỗ trợ 5G, màn hình siêu đẹp, pin trâu camera chất lượng. Trong các mẫu điện thoại Note 12 Series, Redmi Note 12 là sản phẩm chủ đạo kỳ vọng mang lại doanh thu cực đỉnh cho hãng."
        price="5.000.000đ"
      />{" "}
      <ProductRow
        msp="01"
        th="XIAOMI"
        imgUrl="https://cdn.mobilecity.vn/mobilecity-vn/images/2022/10/w300/xiaomi-redmi-note-12-xanh.png.webp"
        name="Điện thoại Xiaomi Redmi Note 12"
        title="Thời gian bảo hành: BH Thường 12 Tháng"
        description="Xiaomi Redmi Note 12 5G được trình làng vào ngày 27/10/2022. Ngoài sở hữu thiết kế đẹp mắt, máy còn có thông số kỹ thuật ấn tượng: Chip mạnh hỗ trợ 5G, màn hình siêu đẹp, pin trâu camera chất lượng. Trong các mẫu điện thoại Note 12 Series, Redmi Note 12 là sản phẩm chủ đạo kỳ vọng mang lại doanh thu cực đỉnh cho hãng."
        price="5.000.000đ"
      />
      <ProductRow
        msp="01"
        th="XIAOMI"
        imgUrl="https://cdn.mobilecity.vn/mobilecity-vn/images/2022/10/w300/xiaomi-redmi-note-12-xanh.png.webp"
        name="Điện thoại Xiaomi Redmi Note 12"
        title="Thời gian bảo hành: BH Thường 12 Tháng"
        description="Xiaomi Redmi Note 12 5G được trình làng vào ngày 27/10/2022. Ngoài sở hữu thiết kế đẹp mắt, máy còn có thông số kỹ thuật ấn tượng: Chip mạnh hỗ trợ 5G, màn hình siêu đẹp, pin trâu camera chất lượng. Trong các mẫu điện thoại Note 12 Series, Redmi Note 12 là sản phẩm chủ đạo kỳ vọng mang lại doanh thu cực đỉnh cho hãng."
        price="5.000.000đ"
      />
    </table>
  );
}
export default ProductTable;
