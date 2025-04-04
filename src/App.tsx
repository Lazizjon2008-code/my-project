import './Home.css';
import  { useState } from 'react';
import './main.css';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Shop from './Shop';
import About from './About';
import Contact from './Contact';
import Syltherine from './Syltherine';
import Leviosa from './Leviosa';
import Lolito from './Lolito';
import Respira from './Respira';
import Grifo from './Grifo';
import Muggo from './Muggo';
import Pingky from './Pingky';
import Potty from './Potty';
import Checkout from './Checkout';

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

  return location.pathname !== "/shop" ? (
    <nav className="nav">
      <Link to="/" style={{textDecoration: 'none'}} >Home</Link>
      <Link to="/shop" style={{ marginLeft: '60px', textDecoration: 'none' }}>Shop</Link>
      <Link to="/blog" style={{ marginLeft: '60px', textDecoration: 'none' }}>About</Link>
      <Link to="/contact" style={{ marginLeft: '60px', textDecoration: 'none' }}>Contact</Link>
    </nav>
  ) : null;
}
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<About />} />
        <Route path="/contact" element={<Contact />}/>
        <Route path="/Syltherine" element={<Syltherine />}/>
        <Route path="/Leviosa" element={<Leviosa />}/>
        <Route path="/Lolito" element={<Lolito />}/>
        <Route path="/Respira" element={<Respira/>}/>
        <Route path="/Grifo" element={<Grifo />}/>
        <Route path="/Muggo" element={<Muggo />}/>
        <Route path="/Pingky" element={<Pingky />}/>
        <Route path="/Potty" element={<Potty />}/>
        <Route path="/Checkout" element={<Checkout />}/>
      </Routes>
    </Router>
  );
}



function HomePage() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const products = [
    {
      id: "1",
      name: "Syltherine",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      originalPrice: "Rp 3.500.000",
      image: "Public/images/Syltherine.svg",
      link: "/Syltherine"
    },
    {
      id: "2",
      name: "Leviosa",
      description: "Stylish cafe chair",
      price: "Rp 2.500.000",
      image: "Public/images/Leviosa.svg",
      link: "/Leviosa"
    },
    {
      id: "3",
      name: "Lolito",
      description: "Luxury big sofa",
      price: "Rp 7.000.000",
      originalPrice: "Rp 14.000.000",
      image: "Public/images/lolito.svg",
      link: "/Lolito"
    },
    {
      id: "4",
      name: "Respira",
      description: "Outdoor bar table and stool",
      price: "Rp 500.000",
      image: "Public/images/respira.svg",
      link: "/Respira"
    },
    {
      id: "5",
      name: "Grifo",
      description: "Night lamp",
      price: "Rp 1.500.000",
      image: "Public/images/grifo.svg",
      link: "/Grifo"
    },
    {
      id: "6",
      name: "Muggo",
      description: "Small mug",
      price: "Rp 150.000",
      image: "Public/images/muggo.svg",
      link: "/Muggo"
    },
    {
      id: "7",
      name: "Pingky",
      description: "Cute bed set",
      price: "Rp 7.000.000",
      originalPrice: "Rp 14.000.000",
      image: "Public/images/pinckgy.svg",
      link: "/Pingky"
    },
    {
      id: "8",
      name: "Potty",
      description: "Minimalist flower pot",
      price: "Rp 500.000",
      image: "Public/images/potty.svg",
      link: "/Potty"
    }
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
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
    <header>
      <div className="container">
        <nav className='navbar'>
          <div className='headers'>
            <div className='logo_header'>
              <Logo />
            </div>

            <div className='connect_pages'>
              <Navigation />
            </div>

            <div className='btns_of_header'>
              <button><img src="Public/images/blog.svg" alt="" /></button>
              <button><img src="Public/images/search.svg" alt="" /></button>
              <button><img src="Public/images/likes.svg" alt="" /></button>
              <button onClick={() => setCartOpen(true)}>
                  <img src="Public/images/shop.svg" alt="Cart" />
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
    <img src="Public/images/back.svg" alt="Close" />
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
                    <img src="Public/images/btn_x.svg" alt="Remove" />
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



    <section className='hero_of_page'>
      <div className="container">
        <div className='content_of_hero'>
          <h3>New Arrival</h3>
          <h1>Discover Our <br/> New Collection</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut <br /> elit tellus, luctus nec ullamcorper mattis.</p>
          <button>BUY NOW</button>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className='section_of_range'>
          <div className='name_of_range'>
            <h2>Browse The Range</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className='rooms'>
            <div>
              <img src="Public/images/dining.svg" alt="" />
              <h5>Dining</h5>
            </div>
            <div>
              <img src="Public/images/living.svg" alt="" />
              <h5>Living</h5>
            </div>
            <div>
              <img src="Public/images/bedroom.svg" alt="" />
              <h5>Bedroom</h5>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className='our_products'>
          <h2>Our Products</h2>

          <div className='Products_to_sell'>
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
                            <img src="Public/images/link.svg" alt="" />
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
            <div className='another_products'>
            {products.slice(4, 8).map(product => (
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
                            <img src="Public/images/link.svg" alt="" />
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
      </div>
    </section>

    <section>
      <div className='beautiful_rooms'>

        <div className='many_rooms'>
          <h2>50+ Beautiful rooms <br /> inspiration</h2>
          <p>Our designer already made a lot of beautiful <br /> prototipe of rooms that inspire you</p>
          <button>Explore More</button>
        </div>
        <div className='pictures_of_rooms'>

          <div className='first_picture'>
            <img src="Public/images/bed_room.svg" alt="" />

              <div className='recomandation'>

                <div className='box_of_picture'>
                  <p>01 - Bed Room</p>
                  <h4>Inner Peace</h4>
                </div>
                  <button><img src="Public/images/arrow.svg" alt="" /></button>
              </div>
          </div>
          <div>
            <img src="Public/images/chairs.svg" alt="" />
            <div className='all_rounds'>
              <div className='biggest_round'>
                <div className="in_the_round"></div>
              </div>
              <div className='round'></div>
              <div className='round'></div>
              <div className='round'></div>
            </div>
          </div>
          <div className='small_pictures'>
            <img src="Public/images/smallimg.svg" alt="" />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
          <div className='shares'>
          <h5>link your setup with</h5>
          <h2>#FuniroFurniture</h2>
      </div>

      <div className='all_images_of_section'>

        <div className='left_images'>
          <div className='books_and_laptop'>
            <img src="Public/images/books.svg" alt="" />
            <img src="Public/images/laptop.svg" alt="" />
          </div>
          <div className='knight_and_tables'>
            <img src="Public/images/knight.svg" alt="" />
            <img src="Public/images/tables.svg" alt="" />
          </div>
        </div>

        <div className='center_images'>
          <img src="Public/images/kitchen.svg" alt="" />
        </div>

        <div className='right_images'>
          <div className='bed_and_kitchen'>
            <img src="Public/images/beds.svg" alt="" />
            <img src="Public/images/another_kitchen.svg" alt="" />
          </div>
          <div className='vase_and_wall'>
            <img src="Public/images/vase.svg" alt="" />
            <img src="Public/images/wall.svg" alt="" />
          </div>
        </div>
      </div>
      </div>
    </section>

 <footer style={{marginTop: '120px'}} className="footer">
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

export default App

