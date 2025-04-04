import './Contaxt.css'
import { useState } from 'react';
import { Link, useLocation } from "react-router-dom";

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

function Logo() {
  const location = useLocation();

  return location.pathname !== "/ " ? (
    <nav className="nav">
      <Link to="/"  ><img src="src/images/Logo.svg" alt="" /></Link>
    </nav>
  ) : null;
}

function Navigation() {
  const location = useLocation();

  return location.pathname !== "/contact" ? (
      <nav className="nav">
          <Link to="/" >Home</Link>
          <Link to="/shop" style={{ marginLeft: '60px' }}>Shop</Link>
          <Link to="/blog" style={{ marginLeft: '60px' }}>About</Link>
          <Link to="/contact" style={{ marginLeft: '60px' }}>Contact</Link>
      </nav>
  ) : null;
}


function Contact() {
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

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
            <div className='logo_header'>
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
              <button onClick={() => setCartOpen(true)}>
                  <img src="src/images/shop.svg" alt="Cart" />
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
            <img src="src/images/back.svg" alt="Close" />
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
                            <img src="src/images/btn_x.svg" alt="Remove" />
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
            <div className="btns ">
            <button className="btn_cart">Cart</button>
            <Link to={'/Checkout'}><button className="btn_checkout">Checkout</button></Link>
            <button className="btn_comparison">Comparison</button>
            </div>
          </div>
        </div>

    <section className='contact_section'>
      <div className="container">
        <div className='title_of_hero'>
          <img src="src/images/half_logo.svg" alt="" />
          <h2>Contact</h2>
          <h5>Home <img src="src/images/vector.svg" alt="" /> Contact</h5>
        </div>
      </div>
    </section>

    <section>
        <div className="container">
            <div className='title_section'>
                <h1>Get In Touch With Us</h1>
                <p>For More Information About Our Product & Services. Please Feel Free To Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            </div>

            <div className='informations'>

                <div className='address'>
                    <div className='location'>
                        <img src="src/images/Map.svg" alt="" />
                        <div>
                            <h3>Address</h3>
                            <p>236 5th SE Avenue, New <br /> York NY10000, United <br /> States</p>
                        </div>
                    </div>
                    <div className='number'>
                        <img src="src/images/phone.svg" alt="" />
                        <div>
                            <h3>Phone</h3>
                            <p>Mobile: +(84) 546-6789</p>
                            <p>Hotline:  +(84) 456-6789</p>
                        </div>
                    </div>
                    <div className='date'>
                        <img src="src/images/time.svg" alt="" />
                        <div>
                            <h3>Working Time</h3>
                            <p>Monday-Friday: 9:00 - <br /> 22:00</p>
                            <p>Saturday-Sunday: 9:00 - <br /> 21:00</p>
                        </div>
                    </div>
                </div>

                <div className='contacts'>
                    <form action="">
                        <label className='label' htmlFor="name">Your name</label> <br />
                        <input type="text" id='name' className='input'  placeholder='Abc' required/>
                    </form>
                    <form action="">
                        <label className='label' htmlFor="email">Emaill Address</label> <br />
                        <input type="email" className='input' id='email' placeholder='Abc@def.com' required/>
                    </form>
                    <form action="">
                        <label className='label' htmlFor="subject">Subject</label> <br />
                        <input type="text" className='input' id='subject' placeholder='This is an optional' required/>
                    </form>
                    <form action="">
                        <label className='label' htmlFor="message">Message</label> <br />
                        <input className='message' type="text" id='message' placeholder='Hi! i’d like to ask about' /> <br />
                        <button className='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <section>
    <div className='about_shop'>
                <div className='quality'>
                    <img src="src/images/trophy.svg" alt="" />
                    <div>
                        <h4>High Quality</h4>
                        <p>crafted from top materials</p>
                    </div>
                </div>
                <div className='quality'>
                    <img src="src/images/true.svg" alt="" />
                    <div>
                        <h4>Warranty Protection</h4>
                        <p>Over 2 years</p>
                    </div>
                </div>
                <div className='quality'>
                    <img src="src/images/shipping.svg" alt="" />
                    <div>
                        <h4>Free Shipping</h4>
                        <p>Order over 150 $</p>
                    </div>
                </div>
                <div className='quality'>
                    <img src="src/images/operator.svg" alt="" />
                    <div>
                        <h4>24 / 7 Support</h4>
                        <p>Dedicated support</p>
                    </div>
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

export default Contact