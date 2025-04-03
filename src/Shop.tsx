import "./Shop.css";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaSlidersH, FaTh, FaBars } from "react-icons/fa";

// Logo Component
const Logo: React.FC = () => {
  const location = useLocation();
  return location.pathname !== "/" ? (
    <nav className="nav">
      <Link to="/">
        <img src="/src/images/Logo.svg" alt="Funiro Logo" />
      </Link>
    </nav>
  ) : null;
};

// Navigation Component
const Navigation: React.FC = () => {
  const location = useLocation();
  return location.pathname !== "/shop" ? (
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/shop" style={{ marginLeft: "60px" }}>Shop</Link>
      <Link to="/blog" style={{ marginLeft: "60px" }}>About</Link>
      <Link to="/contact" style={{ marginLeft: "60px" }}>Contact</Link>
    </nav>
  ) : null;
};

// Shop Page Component
const Shop: React.FC = () => {
  const [itemsToShow, setItemsToShow] = useState<number>(16);

  return (
    <>
      {/* Google Fonts */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@100..1000&family=Poppins:wght@100..900&display=swap"
      />

      {/* Header Section */}
      <header>
        <Navigation />
        <div className="container">
          <nav className="navbar">
            <div className="headers">
              <div className="logo">
                <Logo />
              </div>

              <div className="connect_pages">
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/shop">Shop</Link></li>
                  <li><Link to="/blog">About</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>

              <div className="btns_of_header">
                <button><img src="/src/images/blog.svg" alt="Blog" /></button>
                <button><img src="/src/images/search.svg" alt="Search" /></button>
                <button><img src="/src/images/likes.svg" alt="Likes" /></button>
                <button><img src="/src/images/shop.svg" alt="Shop" /></button>
              </div>
            </div>
          </nav>
        </div>
      </header>


      {/* Hero Section */}
      <section className="hero_section">
        <div className="container">
          <div className="hero_title">
            <h2>Shop</h2>
            <h5>Home <img src="/src/images/vector.svg" alt="Breadcrumb" /> Shop</h5>
          </div>
        </div>
      </section>

        {/* Filter Bar */}
      <div className="filter-bar">
        <div className="filter-menu">
        <button className="filter-btn"><FaSlidersH /> Filter</button>
        <button className="view-btn"><FaTh /></button>
        <button className="view-btn"><FaBars /></button>
        </div>
        <span className="results">Showing 1–{itemsToShow} of 32 results</span>

        <div className="options">
          <label htmlFor="show">Show</label>
          <input
            type="number"
            id="show"
            value={itemsToShow}
            min={1}
            max={100}
            onChange={(e) => setItemsToShow(Number(e.target.value))}
          />

          <label htmlFor="sort">Sort by</label>
          <select id="sort">
            <option value="default">Default</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>

      {/* Product Section */}
      <section className="product-section">
        <div className="container">
          <div className="products">
            {["Syltherine", "Leviosa", "Lolito", "Respira"].map((product, index) => (
              <div key={index} className={`about_${product}`}>
                <div className="product-card">
                  <img src={`/src/images/${product.toLowerCase()}.svg`} alt={product} />
                  <div className="overlay">
                    <button>Add to cart</button>
                    <img src="/src/images/link.svg" alt="Product Link" />
                  </div>
                  <h4>{product}</h4>
                  <p>{product === "Lolito" ? "Luxury big sofa" : "Stylish cafe chair"}</p>
                  <h5>Rp {product === "Lolito" ? "7.000.000" : "2.500.000"}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pagination */}
      <div className="btns_of_shop">
        <button className="page_btn">1</button>
        <button className="page_btn">2</button>
        <button className="page_btn">3</button>
        <button className="next_btn">Next</button>
      </div>

      {/* Shop Benefits Section */}
      <section className="about_shop">
        {[
          { img: "trophy", title: "High Quality", desc: "crafted from top materials" },
          { img: "true", title: "Warranty Protection", desc: "Over 2 years" },
          { img: "shipping", title: "Free Shipping", desc: "Order over 150 $" },
          { img: "operator", title: "24 / 7 Support", desc: "Dedicated support" },
        ].map((item, index) => (
          <div key={index} className="quality">
            <img src={`/src/images/${item.img}.svg`} alt={item.title} />
            <div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section company-info">
            <h2 className="logo">Funiro.</h2>
            <address>400 University Drive Suite 200 Coral <br /> Gables, FL 33134 USA</address>
          </div>

          <div className="footer-section links-help many-links">
            <div className="footer-links">
              <h4>Links</h4>
              <Link to="/">Home</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>

            <div className="footer-help">
              <h4>Help</h4>
              <Link to="#">Payment Options</Link>
              <Link to="#">Returns</Link>
              <Link to="#">Privacy Policies</Link>
            </div>
          </div>

          <div className="footer-section newsletter">
            <h4>Newsletter</h4>
            <form className="newsletter-form">
              <input type="email" placeholder="Enter Your Email Address" className="email-input" required />
              <button type="submit" className="subscribe-btn">SUBSCRIBE</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>2023 Funiro. All rights reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Shop;
