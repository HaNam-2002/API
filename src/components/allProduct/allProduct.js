import React, { useState, useEffect } from 'react';
function AllProduct({ searchKeyword })  {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  // cấu hình routing: http://localhost:3000/:search -> trang chủ
  // lấy search ra -> không có: get all
  // nếu có có: search
  useEffect(() => {
    fetch('http://localhost:8083/products')
      .then(response => response.json())
      .then(data => {
        setFilteredProducts(data);
        setProducts(data); // lấy tất cả -> search
      })
      .catch(error => console.error(error));
  }, []);
  useEffect(() => {
    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchKeyword, products]);
  return (
    <div className="single-product-area">
      <div className="zigzag-bottom"></div>
      <div className="container">
        <div className="row">
        {filteredProducts.map(product => (
            <div className="col-md-3 col-sm-6" key={product.pID}>
              <div className="single-shop-product">
                <div className="product-upper">
                  <img src={product.image} alt="" />
                </div>
                <h2>
                  <a href={"/detail?id=" + product.pID}>{product.name}</a>
                </h2>
                <div className="product-carousel-price">
                  <ins>{product.price}$</ins> 
                </div>

                <div className="product-option-shop">
                  <a
                    className="add_to_cart_button"
                    data-quantity="1"
                    data-product_sku=""
                    data-product_id="70"
                    rel="nofollow"
                    href="/canvas/shop/?add-to-cart=70"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>


        <div className="row">
          <div className="col-md-12">
            <div className="product-pagination text-center">
              <nav>
                <ul className="pagination">
                  <li>
                    <a href="a" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li>
                    <a href="a">1</a>
                  </li>
                  <li>
                    <a href="a">2</a>
                  </li>
                  <li>
                    <a href="a">3</a>
                  </li>
                  <li>
                    <a href="a">4</a>
                  </li>
                  <li>
                    <a href="a">5</a>
                  </li>
                  <li>
                    <a href="a" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllProduct;
