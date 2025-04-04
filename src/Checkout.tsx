import './Checkout.css'
import { Link, useLocation } from "react-router-dom";

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

  return location.pathname !== "/Checkout" ? (
      <nav className="nav">
          <Link to="/" >Home</Link>
          <Link to="/shop" style={{ marginLeft: '60px' }}>Shop</Link>
          <Link to="/blog" style={{ marginLeft: '60px' }}>About</Link>
          <Link to="/contact" style={{ marginLeft: '60px' }}>Contact</Link>
      </nav>
  ) : null;
}

function Checkout () {
    return(
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
              <button><img src="src/images/shop.svg" alt="" /></button>
            </div>
          </div>
        </nav>
      </div>
    </header>

    <section className='hero_of_section'>
      <div className="container">
        <div className='title_of_hero'>
          <img src="src/images/half_logo.svg" alt="" />
          <h2>Checkout</h2>
          <h5>Home <img src="src/images/vector.svg" alt="" /> Checkout</h5>
        </div>
      </div>
    </section>

    <section>
        <div className="container">
            <div className='information_about_yourself'>

                <div className='datails'> 
                    <h2 className='billing'>Billing details</h2>
                    <div className='names'>
                        <form action="">
                            <label  htmlFor="name">First Name</label> <br />
                            <input type="text" id='name' required />
                        </form>
                        <form action="">
                            <label  htmlFor="surname">Last Name</label> <br />
                            <input type="text"  id='surname' required/>
                        </form>
                    </div>
                    <form style={{marginLeft: '60px', marginTop: '30px'}} action="">
                      <label className='titles' htmlFor="company">Company Name (Optional)</label> <br />
                      <input type="text" id='company'  required/>
                    </form>
                    <form style={{marginLeft: '60px', marginTop: '30px'}} action="">
                      <label className='titles' htmlFor="countries">Country / Region</label> <br />
                      <select name="countries" id="countries">
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="Tashkent">Tashkent</option>                        
                        <option value="Russia">Russia</option>                        
                        <option value="England">England</option>                        
                        <option value="USA">USA</option>                        
                      </select>
                    </form>
                    <form style={{marginLeft: '60px', marginTop: '30px'}} action="">
                      <label className='titles' htmlFor="address">Street address</label> <br />
                      <input type="text" id='address' required/>
                    </form>
                    <form style={{marginLeft: '60px', marginTop: '30px'}} action="">
                      <label htmlFor="city">Town / City</label> <br />
                      <input type="text" id='city' required/>
                    </form>
                    <form style={{marginLeft: '60px', marginTop: '30px'}} action="">
                      <label className='titles' htmlFor="countries">Province</label> <br />
                      <select name="province" id="province">
                        <option value="Western Province">Western Province</option>
                        <option value="Eastern Province">Eastern Province</option>                        
                        <option value="Southern Province">Southern Province</option>                        
                        <option value="Northern Province">Northern Province</option>                        
                      </select>
                    </form>
                    <form style={{marginLeft: '60px', marginTop: '30px'}} action="">
                      <label className='titles' htmlFor="zip">ZIP Code</label> <br />
                      <input type="text" id='zip' required/>
                    </form>
                    <form style={{marginLeft: '60px', marginTop: '30px'}} action="">
                      <label className='titles' htmlFor="phone">Phone</label> <br />
                      <input type="tel"  id='phone' required/>
                    </form>
                    <form style={{marginLeft: '60px', marginTop: '30px'}} action="">
                      <label className='titles' htmlFor="email">Email address</label> <br />
                      <input type="email" id='email' required/>
                    </form>
                    <form style={{marginLeft: '60px', marginTop: '30px'}} action="">
                      <input type="text" id='inform' placeholder='Additional information' />
                    </form>
                </div>

                <div className='product_details'>
                  <div className='sofa'>
                    <div className='rice'>
                      <h2>Product</h2>
                      <p>Asgaard sofa</p>
                      <h4>Subtotal</h4>
                      <h4>Total</h4>
                    </div>
                    <div className='rice'>
                      <h2>Subtotal</h2>
                      <p>Rs. 250,000.00</p>
                      <p>Rs. 250,000.00</p>
                      <h3>Rs. 250,000.00</h3>
                    </div>
                  </div>

                  <div className='payment'>
                    <form  action="">
                      <input id='bank' type="radio" required/>
                      <label style={{marginLeft: '10px'}}  htmlFor="bank">Direct Bank Transfer</label> <br />
                      <p>Make your payment directly into our bank account. Please use <br /> your Order ID as the payment reference. Your order will not be <br /> shipped until the funds have cleared in our account. </p>
                    </form>
                    <form style={{marginTop: "20px"}} action="">
                      <input id='direct' type="radio" required/>
                      <label style={{marginLeft: '10px'}}  htmlFor="direct">Direct Bank Transfer</label> <br />
                    </form>
                    <form style={{marginTop: "10px"}} action="">
                      <input id='cash' type="radio" required/>
                      <label style={{marginLeft: '10px'}}  htmlFor="cash">Cash On Delivery</label> <br />
                      <p>Your personal data will be used to support your experience <br /> throughout this website, to manage access to your account, and <br /> for other purposes described in our privacy policy.</p> <br />
                      <button className='order'>Place order</button>
                    </form>
                  </div>
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

export default Checkout