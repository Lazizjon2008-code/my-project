import { Link, useLocation } from "react-router-dom";
import  { useState } from 'react';
import './Syltherine.css'


function Logo() {
  const location = useLocation();

  return location.pathname !== "/" ? (
    <nav className="nav">
      <Link to="/"  ><img src="src/images/Logo.svg" alt="" /></Link>
    </nav>
  ) : null;
}

function Navigation() {
  const location = useLocation();

  return location.pathname !== "/Syltherine" ? (
      <nav className="nav">
          <Link to="/" >Home</Link>
          <Link to="/shop" style={{ marginLeft: '60px' }}>Shop</Link>
          <Link to="/blog" style={{ marginLeft: '60px' }}>About</Link>
          <Link to="/contact" style={{ marginLeft: '60px' }}>Contact</Link>
      </nav>
  ) : null;
}


function Syltherine() {
  const [count, setCount] = useState(1);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => {
    if (count > 1) setCount(prev => prev - 1);
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
              <button><img src="src/images/blog.svg" alt="" /></button>
              <button><img src="src/images/search.svg" alt="" /></button>
              <button><img src="src/images/likes.svg" alt="" /></button>
              <button><img src="src/images/shop.svg" alt="" /></button>
            </div>
          </div>
        </nav>
      </div>
    </header>

    <div className="product-detail">
      <nav className="breadcrumb">
        Home &gt; Shop &gt; Asgaard sofa
      </nav>
      
      <div className="product-content">
        <div className="product-gallery">
        <div className="thumbnail-list">
            <img src="src/images/Syltherine.svg" alt="Thumbnail 1" />
            <img src="src/images/Syltherine.svg" alt="Thumbnail 2" />
            <img src="src/images/Syltherine.svg" alt="Thumbnail 3" />
            <img src="src/images/Syltherine.svg" alt="Thumbnail 4" />
          </div>
          <img src="src/images/Syltherine.svg" alt="Asgaard Sofa" className="main-image" />
        </div>
        
        <div className="product-info">
          <h1>Asgaard sofa</h1>
          <p className="price">Rs. 250,000.00</p>
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
          <div className="cart-actions">
          <div className="counter">
            <button className="counter-button" onClick={decrement}>-</button>
            <span className="counter-value">{count}</span>
            <button className="counter-button" onClick={increment}>+</button>
           </div>
            <button className="add-to-cart">Add To Cart</button>
            <button className="compare">+ Compare</button>
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
          <img src="src/images/Syltherine.svg" alt="" />
          <img src="src/images/Syltherine.svg" alt="" />
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className="related">
          <h1>Related Products</h1>

          <div className='products'>
              <div className='about_Syltherine'>
                <div className="product-card">
                <img src="src/images/Syltherine.svg" alt="" />
                <div className="overlay">
                    <button>Add to cart</button>
                    <img src="/src/images/link.svg" alt="" />
                  </div>
                <h4>Syltherine</h4>
                <p>Stylish cafe chair</p>
                <div className='prices'>
                  <h5>Rp 2.500.000</h5>
                  <p>Rp 3.500.000</p>
                </div>
                </div>
              </div>
              <div className='about_Leviosa'>
                <div className="product-card">
                <img src="src/images/Leviosa.svg" alt="" />
                  <div className="overlay">
                    <button>Add to cart</button>
                    <img src="/src/images/link.svg" alt="" />
                  </div>
                <h4>Leviosa</h4>
                <p>Stylish cafe chair</p>
                <h5>Rp 2.500.000</h5>
                </div>
              </div>
              <div className='about_Lolito'>
                <div className="product-card">
                <img src="src/images/lolito.svg" alt="" />
                <div className="overlay">
                    <button>Add to cart</button>
                    <img src="/src/images/link.svg" alt="" />
                  </div>
                <h4>Lolito</h4>
                <p>Luxury big sofa</p>
                <div className='prices'>
                  <h5>Rp 7.000.000</h5>
                  <p>Rp 14.000.000</p>
                </div>
                </div>
              </div>
              <div className='about_Respira'>
                <div className="product-card">
                <img src="src/images/respira.svg" alt="" />
                  <div className="overlay">
                    <button>Add to cart</button>
                    <img src="/src/images/link.svg" alt="" />
                  </div>
                <h4>Respira</h4>
                <p>Outdoor bar table and stool</p>
                <h5>Rp 500.000</h5>
                </div>
              </div>
            </div>

            <button className='show_another_products'>Show More</button>
        </div>
      </div>
    </section>

    <footer className="footer">
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

export default Syltherine