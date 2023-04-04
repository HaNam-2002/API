import React, { useState, useEffect } from "react";

function ProductContent(props) {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const pID = queryParams.get('id');
    if(pID) {
      fetch(`http://localhost:8083/products/${pID}`)
      .then(response => response.json())
      .then(data => setProduct(data));
    } else {
      window.location.href = "/";
    }
  });
  return (
    <div className="col-md-8">
      <div className="product-content-right">
        <div className="product-breadcroumb">
          <a href="home">Home</a>
          <a href="a">Category Name</a>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="product-images">
              <div className="product-main-img">
                 <img src={product.image} alt="" /> 
              </div>

              <div className="product-gallery">
                <img src="./assets/img/product-thumb-1.jpg" alt="" />
                <img src="./assets/img/product-thumb-2.jpg" alt="" />
                <img src="./assets/img/product-thumb-3.jpg" alt="" />
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div className="product-inner">
              <h2 className="product-name">{product.name}</h2>
              <div className="product-inner-price">
                <ins>${product.price}</ins> <del>${product.price * 1.5}</del>
              </div>

              <form action="" className="cart">
                <div className="quantity">
                  <input
                    type="number"
                    size="4"
                    className="input-text qty text"
                    title="Qty"
                    value="1"
                    name="quantity"
                    min="1"
                    step="1"
                  />
                </div>
                <button className="add_to_cart_button" type="submit">
                  Add to cart
                </button>
              </form>

              <div className="product-inner-category">
                <p>
                  Category: <a href="a">Summer</a>. Tags:{" "}
                  <a href="a">awesome</a>, <a href="a">best</a>,{" "}
                  <a href="a">sale</a>, <a href="a">shoes</a>.{" "}
                </p>
              </div>

              <div role="tabpanel">
                <ul className="product-tab" role="tablist">
                  <li role="presentation" className="active">
                    <a
                      href="#home"
                      aria-controls="home"
                      role="tab"
                      data-toggle="tab"
                    >
                      Description
                    </a>
                  </li>
                  <li role="presentation">
                    <a
                      href="#profile"
                      aria-controls="profile"
                      role="tab"
                      data-toggle="tab"
                    >
                      Reviews
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div
                    role="tabpanel"
                    className="tab-pane fade in active"
                    id="home"
                  >
                    <h2>Product Description</h2>
                    <p>
                     {product.description}
                    </p>
                  </div>
                  <div role="tabpanel" className="tab-pane fade" id="profile">
                    <h2>Reviews</h2>
                    <div className="submit-review">
                      <p>
                        <label for="name">Name</label>{" "}
                        <input name="name" type="text" />
                      </p>
                      <p>
                        <label for="email">Email</label>{" "}
                        <input name="email" type="email" />
                      </p>
                      <div className="rating-chooser">
                        <p>Your rating</p>

                        <div className="rating-wrap-post">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                      </div>
                      <p>
                        <label for="review">Your review</label>{" "}
                        <textarea
                          name="review"
                          id=""
                          cols="30"
                          rows="10"
                        ></textarea>
                      </p>
                      <p>
                        <input type="submit" value="Submit" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="related-products-wrapper">
          <h2 className="related-products-title">Related Products</h2>
          <div className="related-products-carousel">
            <div className="single-product">
              <div className="product-f-image">
                <img src="./assets/img/product-1.jpg" alt="" />
                <div className="product-hover">
                  <a href="a" className="add-to-cart-link">
                    <i className="fa fa-shopping-cart"></i> Add to cart
                  </a>
                  <a href="a" className="view-details-link">
                    <i className="fa fa-link"></i> See details
                  </a>
                </div>
              </div>

              <h2>
                <a href="a">Sony Smart TV - 2015</a>
              </h2>

              <div className="product-carousel-price">
                <ins>$700.00</ins> <del>$100.00</del>
              </div>
            </div>
            <div className="single-product">
              <div className="product-f-image">
                <img src="./assets/img/product-2.jpg" alt="" />
                <div className="product-hover">
                  <a href="a" className="add-to-cart-link">
                    <i className="fa fa-shopping-cart"></i> Add to cart
                  </a>
                  <a href="a" className="view-details-link">
                    <i className="fa fa-link"></i> See details
                  </a>
                </div>
              </div>

              <h2>
                <a href="a">Apple new mac book 2015 March :P</a>
              </h2>
              <div className="product-carousel-price">
                <ins>$899.00</ins> <del>$999.00</del>
              </div>
            </div>
            <div className="single-product">
              <div className="product-f-image">
                <img src="./assets/img/product-3.jpg" alt="" />
                <div className="product-hover">
                  <a href="a" className="add-to-cart-link">
                    <i className="fa fa-shopping-cart"></i> Add to cart
                  </a>
                  <a href="a" className="view-details-link">
                    <i className="fa fa-link"></i> See details
                  </a>
                </div>
              </div>

              <h2>
                <a href="a">Apple new i phone 6</a>
              </h2>

              <div className="product-carousel-price">
                <ins>$400.00</ins> <del>$425.00</del>
              </div>
            </div>
            <div className="single-product">
              <div className="product-f-image">
                <img src="./assets/img/product-4.jpg" alt="" />
                <div className="product-hover">
                  <a href="a" className="add-to-cart-link">
                    <i className="fa fa-shopping-cart"></i> Add to cart
                  </a>
                  <a href="a" className="view-details-link">
                    <i className="fa fa-link"></i> See details
                  </a>
                </div>
              </div>

              <h2>
                <a href="a">Sony playstation microsoft</a>
              </h2>

              <div className="product-carousel-price">
                <ins>$200.00</ins> <del>$225.00</del>
              </div>
            </div>
            <div className="single-product">
              <div className="product-f-image">
                <img src="./assets/img/product-5.jpg" alt="" />
                <div className="product-hover">
                  <a href="a" className="add-to-cart-link">
                    <i className="fa fa-shopping-cart"></i> Add to cart
                  </a>
                  <a href="a" className="view-details-link">
                    <i className="fa fa-link"></i> See details
                  </a>
                </div>
              </div>

              <h2>
                <a href="a">Sony Smart Air Condtion</a>
              </h2>

              <div className="product-carousel-price">
                <ins>$1200.00</ins> <del>$1355.00</del>
              </div>
            </div>
            <div className="single-product">
              <div className="product-f-image">
                <img src="./assets/img/product-6.jpg" alt="" />
                <div className="product-hover">
                  <a href="a" className="add-to-cart-link">
                    <i className="fa fa-shopping-cart"></i> Add to cart
                  </a>
                  <a href="a" className="view-details-link">
                    <i className="fa fa-link"></i> See details
                  </a>
                </div>
              </div>
              <h2>
                <a href="a">Samsung gallaxy note 4</a>
              </h2>

              <div className="product-carousel-price">
                <ins>$400.00</ins>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductContent;
// dòng16
// fetch('http://localhost:8083/products/' + id)
      // .then(response => response.json()) //convert data api to json
      // .then(data => {
      //   setProduct(data);
      //   console.log(data);
      // })