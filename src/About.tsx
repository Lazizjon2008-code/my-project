import { useState } from 'react';
import './About.css'
import { Link, useLocation } from "react-router-dom";
// import Contact from './Contact.tsx';
// import Shop from './Shop.tsx';
// import HomePage from './App.tsx'

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
      <Link to="/"  ><img src="/images/Logo.svg" alt="" /></Link>
    </nav>
  ) : null;
}

function Navigation() {
  const location = useLocation();

  return location.pathname !== "/blog" ? (
      <nav className="nav">
          <Link to="/" >Home</Link>
          <Link to="/shop" style={{ marginLeft: '60px' }}>Shop</Link>
          <Link to="/blog" style={{ marginLeft: '60px' }}>About</Link>
          <Link to="/contact" style={{ marginLeft: '60px' }}>Contact</Link>
      </nav>
  ) : null;
}

function About() {
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
    <Navigation />
    <header>
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
        <div className="btns ">
        <button className="btn_cart">Cart</button>
        <Link to={'/Checkout'}><button className="btn_checkout">Checkout</button></Link>
        <button className="btn_comparison">Comparison</button>
        </div>
      </div>
    </div>

    <section className='hero_of_section'>
      <div className="container">
        <div className='title_of_hero'>
          <img src="/images/half_logo.svg" alt="" />
          <h2>Blog</h2>
          <h5>Home <img src="/images/vector.svg" alt="" /> Shop</h5>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className='blog'>

          <div className='planning'>
            <img src="/images/planning_work.svg" alt="" />

            <div className='about_plan'>
              <div className='person'>
                <img src="/images/people.svg" alt="" />
                <p>Admin</p>
              </div>
              <div className='person'>
                <img src="/images/data.svg" alt="" />
                <p>14 Oct 2022</p>
              </div>
              <div className='person'>
                <img src="/images/wood.svg" alt="" />
                <p>Wood</p>
              </div>
            </div>
          </div>

          <div className='categories'>
            <form action="">
              <input type="search" id='search' required />
              <button><img src="/images/searching.svg" alt="" /></button>
            </form>
            <div className='informations_in_categories'>
            <h3>Categories</h3>
              <div className='all_things'>
                <p>Crafts</p>
                <p>2</p>
              </div >
              <div className='all_things'>
                <p>Design</p>
                <p>8</p>
              </div>
              <div className='all_things'>
                <p>Handmade</p>
                <p>7</p>
              </div>
              <div className='all_things'>
                <p>Interior</p>
                <p>1</p>
              </div>
              <div className='all_things'>
                <p>Wood</p>
                <p>6</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className='all_given_informations'>
          <div className='informations_about_blog'>
            <h1>Going all-in with millennial design</h1>
            <div className='Lorem_of_blog'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin <br /> aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis <br /> in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit <br /> ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
              <button>Read more</button>
            </div>
            <img className='image' src="/images/hand.svg" alt="" />
            <div className='about_plan'>
              <div className='person'>
                <img src="/images/people.svg" alt="" />
                <p>Admin</p>
              </div>
              <div className='person'>
                <img src="/images/data.svg" alt="" />
                <p>14 Oct 2022</p>
              </div>
              <div className='person'>
                <img src="/images/wood.svg" alt="" />
                <p>Wood</p>
              </div>
            </div>
            <h1>Exploring new ways of decorating</h1>
            <div className='Lorem_of_blog'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin <br /> aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis <br /> in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit <br /> ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
              <button>Read more</button>
            </div>
            <img className='image' src="/images/sunglasses.svg" alt="" />
            <div className='about_plan'>
              <div className='person'>
                <img src="/images/people.svg" alt="" />
                <p>Admin</p>
              </div>
              <div className='person'>
                <img src="/images/data.svg" alt="" />
                <p>14 Oct 2022</p>
              </div>
              <div className='person'>
                <img src="/images/wood.svg" alt="" />
                <p>Wood</p>
              </div>
            </div>
            <h1>Handmade pieces that took time to make</h1>
            <div className='Lorem_of_blog'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin <br /> aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis <br /> in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit <br /> ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
              <button>Read more</button>
            </div>
          </div>

          <div className='main_recent'>
            <div className='recent'>
            <h3>Recent Posts</h3>
              <div className='posts'>
                <img src="/images/pen.svg" alt="" />
                <div>
                  <h5>Going all-in with <br /> millennial design</h5>
                  <p>03 Aug 2022</p>
                </div>
              </div>
              <div className='posts'>
                <img src="/images/more.svg" alt="" />
                <div>
                  <h5>Going all-in with <br /> millennial design</h5>
                  <p>03 Aug 2022</p>
                </div>
              </div>
              <div className='posts'>
                <img src="/images/cofee.svg" alt="" />
                <div>
                  <h5>Going all-in with <br /> millennial design</h5>
                  <p>03 Aug 2022</p>
                </div>
              </div>
              <div className='posts'>
                <img src="/images/flower.svg" alt="" />
                <div>
                  <h5>Going all-in with <br /> millennial design</h5>
                  <p>03 Aug 2022</p>
                </div>
              </div>
              <div className='posts'>
                <img src="/images/chair.svg" alt="" />
                <div>
                  <h5>Going all-in with <br /> millennial design</h5>
                  <p>03 Aug 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='btns_of_shop'>
          <button className='page_btn'>1</button>
          <button className='page_btn'>2</button>
          <button className='page_btn'>3</button>
          <button className='next_btn'>Next</button>
        </div>
      </div>
    </section>

    <section>
    <div className='about_shop'>
                <div className='quality'>
                    <img src="/images/trophy.svg" alt="" />
                    <div>
                        <h4>High Quality</h4>
                        <p>crafted from top materials</p>
                    </div>
                </div>
                <div className='quality'>
                    <img src="/images/true.svg" alt="" />
                    <div>
                        <h4>Warranty Protection</h4>
                        <p>Over 2 years</p>
                    </div>
                </div>
                <div className='quality'>
                    <img src="/images/shipping.svg" alt="" />
                    <div>
                        <h4>Free Shipping</h4>
                        <p>Order over 150 $</p>
                    </div>
                </div>
                <div className='quality'>
                    <img src="/images/operator.svg" alt="" />
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

export default About