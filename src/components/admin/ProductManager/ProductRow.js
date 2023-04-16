import React from "react";
import "./ProductManager.css";
function ProductRow(props) {
  return (
    <>
      <tr>
        <td>{props.msp}</td>
        <td>{props.th}</td>
        <td>
          <img className="image_edit" src={props.imgUrl} alt="Lỗi" />
        </td>
        <td>{props.name}</td>
        <td>{props.title}</td>
        <td>{props.description}</td>
        <td>{props.price}</td>
        <td>
          <button className="w3-red">Xoá</button>
          <button
            className="w3-green"
            onClick={() =>
              (document.getElementById("id02").style.display = "block")
            }
          >
            Sửa
          </button>
        </td>
      </tr>
      <div id="id02" className="w3-modal">
        <div className="w3-modal-content w3-card-4 w3-animate-zoom">
          <header className="w3-container w3-blue">
            <span
              onClick={() =>
                (document.getElementById("id02").style.display = "none")
              }
              className="w3-button w3-blue w3-xlarge w3-display-topright"
            >
              &times;
            </span>
            <h2 className="title">SỬA SẢN PHẨM</h2>
          </header>
          <div className="w3-container w3-light-grey w3-padding">
            <form className="w3-container w3-card-4" action="">
              <div className="image_edit">
                <img
                  className="image_edit"
                  src="https://cdn.mobilecity.vn/mobilecity-vn/images/2022/10/w300/xiaomi-redmi-note-12-xanh.png.webp"
                  alt="lỗi"
                />
              </div>
              <p>
                <label className="w3-text-blue">
                  <b>Tên sản phẩm</b>
                </label>
                <input
                  className="w3-input w3-border"
                  name="name_product"
                  type="text"
                  required
                />
              </p>
              <p>
                <label className="w3-text-blue">
                  <b>Tiêu đề</b>
                </label>
                <input
                  className="w3-input w3-border"
                  name="title"
                  type="text"
                  required
                />
              </p>
              <p>
                <label className="w3-text-blue">
                  <b>Miêu tả</b>
                </label>
                <textarea
                  className="w3-input w3-border"
                  name="description"
                  type="text"
                ></textarea>
              </p>
              <p>
                <label className="w3-text-blue">
                  <b>Giá</b>
                </label>
                <input
                  className="w3-input w3-border"
                  name="price"
                  type="text"
                  required
                />
              </p>
              <p>
                <button className="w3-btn w3-blue">XONG</button>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductRow;
