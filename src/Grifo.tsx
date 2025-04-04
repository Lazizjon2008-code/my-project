import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import  { useState } from 'react';
import './Syltherine.css'
import Checkout from "./Checkout";


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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Checkout" element={<Checkout />}/>
      </Routes>
    </Router>
  );
}

<App />


function Logo() {
  const location = useLocation();

  return location.pathname !== "/" ? (
    <nav className="nav">
      <Link to="/"  ><img src="/images/Logo.svg" alt="" /></Link>
    </nav>
  ) : null;
}

function Navigation() {
  const location = useLocation();

  return location.pathname !== "/Grifo" ? (
      <nav className="nav">
          <Link to="/" >Home</Link>
          <Link to="/shop" style={{ marginLeft: '60px' }}>Shop</Link>
          <Link to="/blog" style={{ marginLeft: '60px' }}>About</Link>
          <Link to="/contact" style={{ marginLeft: '60px' }}>Contact</Link>
      </nav>
  ) : null;
}


function Grifo() {

  const [cartOpen, setCartOpen] = useState(false);
  const [count, setCount] = useState(1);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

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
  };

  const removeFromCart = (index: number) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

    return (
    <>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
    <header>
    <Navigation />
      <div className="container">
        <nav className='navbar'>
          <div className='headers'>
            <div className='logo'>
            <Logo />
            </div>

            <div className='connect_pages'>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/blog">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className='btns_of_header'>
              <button><img src="/images/blog.svg" alt="" /></button>
              <button><img src="/images/search.svg" alt="" /></button>
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
  <p>Subtotal: Rp {calculateTotal(cartItems)}</p>
    <div className="btns ">
    <button className="btn_cart">Cart</button>
    <Link to={'/Checkout'}><button className="btn_checkout">Checkout</button></Link>
    <button className="btn_comparison">Comparison</button>
    </div>
  </div>
</div>

    <div className="product-detail">
      
      <div className="product-content">
        <div className="product-gallery">
        <div className="thumbnail-list">
            <img src="/images/grifo.svg" alt="Thumbnail 1" />
            <img src="/images/grifo.svg" alt="Thumbnail 2" />
            <img src="/images/grifo.svg" alt="Thumbnail 3" />
            <img src="/images/grifo.svg" alt="Thumbnail 4" />
          </div>
          <img src="/images/grifo.svg" alt="Asgaard Sofa" className="main-image" />
        </div>
        
        <div className="product-info">
          <h1>Grifo</h1>
          <p className="price">Rp 1.500.000</p>
          <p className="rating">⭐⭐⭐⭐⭐ (5 Customer Reviews)</p>
          <p className="description">
          Setting the bar as one of the loudest speakers in its class, the <br /> Kilburn is a compact, stout-hearted hero with a well-balanced <br /> audio which boasts a clear midrange and extended highs for a sound.
          </p>
          <div className="size-options">
            <span>Size:</span> <br />
            <button className="size-btn">XL</button>
            <button className="size-btn">L</button>
            <button className="size-btn">XS</button>
          </div>
          <div className="color-options">
            <span>Color:</span> <br />
            <div className="color-box color-blue"></div>
            <div className="color-box color-gold"></div>
            <div className="color-box color-black"></div>
          </div>
          <div className="btn-box">
            <div className="quantity-selector">
              <button className="btn" onClick={() => setCount(count > 1 ? count - 1 : 1)}>−</button>
              <span className="count">{count}</span>
              <button className="btn" onClick={() => setCount(count + 1)}>+</button>
            </div>
              <button className="Add">Add To Cart</button>
              <button className="Add">+ Compare</button>
          </div>
        </div>
      </div>
    </div>

    <div className="container">
    <div className="tabs">
            <h1 className="active">Description</h1>
            <h1>Additional Information</h1>
            <h1>Reviews [5]</h1>
        </div>
        <div className="check_content">
            <p>
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and <br /> sound of Marshall, unplugs the chords, and takes the show on the road.
            </p>
            <p>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest <br /> speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange <br /> and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls <br /> to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
            </p>
        </div>
    </div>

    <section>
      <div className="container">
        <div className="images">
          <img src="/images/grifo.svg" alt="" />
          <img src="/images/grifo.svg" alt="" />
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="related">
          <h1>Related Products</h1>

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

            <button className='show_another_products'>Show More</button>
        </div>
      </div>
    </section>

    <footer style={{marginTop: '100px'}} className="footer">
      <div className="footer-container">    
        <div className="footer-section company-info">
          <h2 className="logo">Funiro.</h2>
          <address>
            400 University Drive Suite 200 Coral <br /> Gables, <br />
            FL 33134 USA
          </address>
        </div>

        
        <div className="footer-section links-help many-links">
          <div className="footer-links">
            <h4>Links</h4>
            <a href="#">Home</a>
            <a href="#">Shop</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>

          <div className="footer-help">
            <h4>Help</h4>
            <a href="#">Payment Options</a>
            <a href="#">Returns</a>
            <a href="#">Privacy Policies</a>
          </div>
        </div>

        
        <div className="footer-section newsletter">
          <h4>Newsletter</h4>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter Your Email Address" className="email-input" required/>
            <button type="submit" className="subscribe-btn">SUBSCRIBE</button>
          </form>
        </div>

      </div>

      
      <div className="footer-bottom">
        <p>2023 funiro. All rights reserved</p>
      </div>
    </footer>
        </>
    )
} 

export default Grifo