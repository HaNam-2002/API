import React, { useState , useEffect} from 'react';
import './Menu.css';


function Menu() {
  const [searchTerm, setSearchTerm] = useState('');
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Lấy danh sách tất cả các sản phẩm và lưu vào allProducts
  useEffect(() => {
    fetch(`http://localhost:8083/products`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setAllProducts(data);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
        alert('There was an error with the search. Please try again.');
      });
  }, []);

  // Lọc danh sách các sản phẩm trùng với tên tìm kiếm và lưu vào filteredProducts
  useEffect(() => {
    const filtered = allProducts.filter(
      (product) => product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, allProducts]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Cập nhật giá trị tìm kiếm
    setSearchTerm(e.target.elements.search.value);
  };
  
  return (
    <>
      <div className="site-branding-area">
        <div className="container">
          <div className="row">
            <div className="col-sm-6" style={{ width: '30%' }}>
              <div className="logo">
                <h1>
                  <a href="/home">
                    <img className="logo_img" src="assets/img/logo.png" alt="Lỗi" />
                  </a>
                </h1>
              </div>
            </div>

            <div className="col-sm-6" style={{ width: '70%' }}>
              <div className="shopping-item">
                <a href="cart.html">
                  Cart - <span className="cart-amunt">$100</span>
                  <i className="fa fa-shopping-cart"></i>
                  <span className="product-count">5</span>
                </a>
              </div>
              <div className="shopping-search">
                <form onSubmit={handleSearch}>
                  <input
                    type="search"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mainmenu-area">
        <div className="container">
          <div className="row">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li>
                  <a href="/home">Home</a>
                </li>
                <li>
                  <a href="/">Shop page</a>
                </li>
                <li>
                  <a href="/detail">Single product</a>
                </li>
                <li>
                  <a href="cart.html">Cart</a>
                </li>
                <li>
                  <a href="checkout.html">Checkout</a>
                </li>
                <li>
                  <a href="a">Category</a>
                </li>
                <li>
                  <a href="a">Others</a>
                </li>
                <li>
                  <a href="a">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
