import "./Shop.css";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaSlidersH, FaTh, FaBars } from "react-icons/fa";
import Syltherine from './Syltherine';
import Leviosa from './Leviosa';
import Lolito from './Lolito';
import Respira from './Respira';

// Logo Component
const Logo: React.FC = () => {
  const location = useLocation();
  return location.pathname !== "/" ? (
    <nav className="nav">
      <Link to="/">
        <img src="./images/Logo.svg" alt="Funiro Logo" />
      </Link>
    </nav>
  ) : null;
};

interface CartItem {
  id: string;
  name: string;
  price: string;
  image: string;
  originalPrice?: string;
}

function calculateTotal(items: CartItem[]): string {
  return items.length.toString();
}

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

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<App />} />
              <Route path="/Syltherine" element={<Syltherine />} />
              <Route path="/Leviosa" element={<Leviosa />} />
              <Route path="/Lolito" element={<Lolito />} />
              <Route path="/Respira" element={<Respira />} />

          </Routes>
      </Router>
  );
}
<App />

// Shop Page Component
const Shop: React.FC = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [itemsToShow, setItemsToShow] = useState<number>(16);

  const products = [
    {
      id: "1",
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: "Rp 3.500.000",
      image: "/images/Syltherine.svg",
      link: "/Syltherine"
    },
    {
      id: "2",
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      image: "/images/Leviosa.svg",
      link: "/Leviosa"
    },
    {
      id: "3",
      name: "Lolito",
      description: "Luxury big sofa",
      price: "Rp 7.000.000",
      originalPrice: "Rp 14.000.000",
      image: "/images/lolito.svg",
      link: "/Lolito"
    },
    {
      id: "4",
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: "Rp 500.000",
      image: "/images/respira.svg",
      link: "/Respira"
    },
  ];

  const addToCart = (product: CartItem) => {
    setCartItems([...cartItems, product]);
    setCartOpen(true); // Open the cart when an item is added
  };

  const removeFromCart = (index: number) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

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
              <button><img src="/images/blog.svg" alt="" /></button>
              <button><img src="/images/Search.svg" alt="" /></button>
              <button><img src="/images/likes.svg" alt="" /></button>
                <button onClick={() => setCartOpen(true)}>
                  <img src="/images/shop.svg" alt="Cart" />
                  {cartItems.length > 0 && (
                    <span className="cart-count">{cartItems.length}</span>
                  )}
                </button>
              </div>
            </div>
          </nav>
        </div>
      </header>

          {cartOpen && <div className="over" onClick={() => setCartOpen(false)}></div>}
      
      <div className={`cart ${cartOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setCartOpen(false)}>
          <img src="/images/back.svg" alt="Close" />
        </button>
        <h2>Shopping Cart</h2>
        <div className="cart-items">
                {cartItems.length === 0 ? (
                  <p>Your cart is empty</p>
                ) : (
                  <>
                    {cartItems.map((item, index) => (
                      <div key={`${item.id}-${index}`} className="cart-item">
                        <img src={item.image} alt={item.name} />
                        <div className="cart-item-details">
                          <h4>{item.name}</h4>
                          <p>{item.price}</p>
                        </div>
                        <button onClick={() => removeFromCart(index)} className="image_btn">
                          <img src="/images/btn_x.svg" alt="Remove" />
                        </button>
                      </div>
                    ))}
                  </>
                )}
              </div>
        <div className="cart-footer">
          <div className='calculate'>
            <p>Subtotal: Rp {calculateTotal(cartItems)}</p>
          </div>
          <div className="btns">
          <button className="btn_cart">Cart</button>
          <Link to={'/Checkout'}><button className="btn_checkout">Checkout</button></Link>
          <button className="btn_comparison">Comparison</button>
          </div>
        </div>
      </div>


      {/* Hero Section */}
      <section className="hero_section">
        <div className="container">
          <div className="hero_title">
            <h2>Shop</h2>
            <h5>Home <img src="/images/vector.svg" alt="Breadcrumb" /> Shop</h5>
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
        <div className='products'>
            {products.slice(0, 4).map(product => (
                    <Link to={product.link} key={product.id} style={{ listStyle: 'none', textDecoration: 'none' }}>
                      <div className='about_Leviosa'>
                        <div className="product-card">
                          <img src={product.image} alt={product.name} />
                          <div className="overlay">
                            <button onClick={(e) => {
                              e.preventDefault();
                              addToCart({
                                id: product.id,
                                name: product.name,
                                price: product.price,
                                image: product.image
                              });
                            }}>Add to cart</button>
                            <img src="/images/link.svg" alt="" />
                          </div>
                          <h4>{product.name}</h4>
                          <p>{product.description}</p>
                          {product.originalPrice ? (
                            <div className='prices'>
                              <h5>{product.price}</h5>
                              <p>{product.originalPrice}</p>
                            </div>
                          ) : (
                            <h5>{product.price}</h5>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
            </div>
            <div className='products'>
            {products.slice(0, 4).map(product => (
                    <Link to={product.link} key={product.id} style={{ listStyle: 'none', textDecoration: 'none' }}>
                      <div className='about_Leviosa'>
                        <div className="product-card">
                          <img src={product.image} alt={product.name} />
                          <div className="overlay">
                            <button onClick={(e) => {
                              e.preventDefault();
                              addToCart({
                                id: product.id,
                                name: product.name,
                                price: product.price,
                                image: product.image
                              });
                            }}>Add to cart</button>
                            <img src="/images/link.svg" alt="" />
                          </div>
                          <h4>{product.name}</h4>
                          <p>{product.description}</p>
                          {product.originalPrice ? (
                            <div className='prices'>
                              <h5>{product.price}</h5>
                              <p>{product.originalPrice}</p>
                            </div>
                          ) : (
                            <h5>{product.price}</h5>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
            </div>
            <div className='products'>
            {products.slice(0, 4).map(product => (
                    <Link to={product.link} key={product.id} style={{ listStyle: 'none', textDecoration: 'none' }}>
                      <div className='about_Leviosa'>
                        <div className="product-card">
                          <img src={product.image} alt={product.name} />
                          <div className="overlay">
                            <button onClick={(e) => {
                              e.preventDefault();
                              addToCart({
                                id: product.id,
                                name: product.name,
                                price: product.price,
                                image: product.image
                              });
                            }}>Add to cart</button>
                            <img src="/images/link.svg" alt="" />
                          </div>
                          <h4>{product.name}</h4>
                          <p>{product.description}</p>
                          {product.originalPrice ? (
                            <div className='prices'>
                              <h5>{product.price}</h5>
                              <p>{product.originalPrice}</p>
                            </div>
                          ) : (
                            <h5>{product.price}</h5>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
            </div>
            <div className='products'>
            {products.slice(0, 4).map(product => (
                    <Link to={product.link} key={product.id} style={{ listStyle: 'none', textDecoration: 'none' }}>
                      <div className='about_Leviosa'>
                        <div className="product-card">
                          <img src={product.image} alt={product.name} />
                          <div className="overlay">
                            <button onClick={(e) => {
                              e.preventDefault();
                              addToCart({
                                id: product.id,
                                name: product.name,
                                price: product.price,
                                image: product.image
                              });
                            }}>Add to cart</button>
                            <img src="/images/link.svg" alt="" />
                          </div>
                          <h4>{product.name}</h4>
                          <p>{product.description}</p>
                          {product.originalPrice ? (
                            <div className='prices'>
                              <h5>{product.price}</h5>
                              <p>{product.originalPrice}</p>
                            </div>
                          ) : (
                            <h5>{product.price}</h5>
                          )}
                        </div>
                      </div>
                    </Link>
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
            <img src={`/images/${item.img}.svg`} alt={item.title} />
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
