import './Home.css'
import './main.css'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Shop from './Shop';
import About from './About';
import Contact from './Contact';


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
        <Route path="/" element={<MainPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/blog" element={<About />} />
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </Router>
  );
}



function MainPage() {

  return (
    <>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
    <header>
      <div className="container">
        <nav className='navbar'>
          <div className='headers'>
            <div className='logo_header'>
              <img src="src/images/Logo.svg" alt="" />
            </div>

            <div className='connect_pages'>
              <Navigation />
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
              <img src="src/images/dining.svg" alt="" />
              <h5>Dining</h5>
            </div>
            <div>
              <img src="src/images/living.svg" alt="" />
              <h5>Living</h5>
            </div>
            <div>
              <img src="src/images/bedroom.svg" alt="" />
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
              <div className='about_Syltherine'>
                <img src="src/images/Syltherine.svg" alt="" />
                <h4>Syltherine</h4>
                <p>Stylish cafe chair</p>
                <div className='prices'>
                  <h5>Rp 2.500.000</h5>
                  <p>Rp 3.500.000</p>
                </div>
              </div>
              <div className='about_Leviosa'>
                <img src="src/images/Syltherine.svg" alt="" />
                <h4>Leviosa</h4>
                <p>Stylish cafe chair</p>
                <h5>Rp 2.500.000</h5>
              </div>
              <div className='about_Lolito'>
                <img src="src/images/lolito.svg" alt="" />
                <h4>Lolito</h4>
                <p>Luxury big sofa</p>
                <div className='prices'>
                  <h5>Rp 7.000.000</h5>
                  <p>Rp 14.000.000</p>
                </div>
              </div>
              <div className='about_Respira'>
                <img src="src/images/respira.svg" alt="" />
                <h4>Respira</h4>
                <p>Outdoor bar table and stool</p>
                <h5>Rp 500.000</h5>
              </div>
            </div>
            <div className='another_products'>
              <div className='about_grifo'>
                <img src="src/images/grifo.svg" alt="" />
                <h4>Grifo</h4>
                <p>Night lamp</p>
                <h5>Rp 1.500.000</h5>
              </div>
              <div className='about_grifo'>
                <img src="src/images/muggo.svg" alt="" />
                <h4>Muggo</h4>
                <p>Small mug</p>
                <h5>Rp 150.000</h5>
              </div>
              <div className='about_Syltherine'>
                <img src="src/images/pinckgy.svg" alt="" />
                <h4>Pingky</h4>
                <p>Cute bed set</p>
                <div className='prices'>
                  <h5>Rp 7.000.000</h5>
                  <p>Rp 14.000.000</p>
                </div>
              </div>
              <div className='about_grifo'>
                <img src="src/images/potty.svg" alt="" />
                <h4>Potty</h4>
                <p>Minimalist flower pot</p>
                <h5>Rp 500.000</h5>
              </div>
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
            <img src="src/images/bed_room.svg" alt="" />

              <div className='recomandation'>

                <div className='box_of_picture'>
                  <p>01 - Bed Room</p>
                  <h4>Inner Peace</h4>
                </div>
                  <button><img src="src/images/arrow.svg" alt="" /></button>
              </div>
          </div>
          <div>
            <img src="src/images/chairs.svg" alt="" />
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
            <img src="src/images/smallimg.svg" alt="" />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
              <div className='shares'>
          <h5>Share your setup with</h5>
          <h2>#FuniroFurniture</h2>
      </div>

      <div className='all_images_of_section'>

        <div className='left_images'>
          <div className='books_and_laptop'>
            <img src="src/images/books.svg" alt="" />
            <img src="src/images/laptop.svg" alt="" />
          </div>
          <div className='knight_and_tables'>
            <img src="src/images/knight.svg" alt="" />
            <img src="src/images/tables.svg" alt="" />
          </div>
        </div>

        <div className='center_images'>
          <img src="src/images/kitchen.svg" alt="" />
        </div>

        <div className='right_images'>
          <div className='bed_and_kitchen'>
            <img src="src/images/beds.svg" alt="" />
            <img src="src/images/another_kitchen.svg" alt="" />
          </div>
          <div className='vase_and_wall'>
            <img src="src/images/vase.svg" alt="" />
            <img src="src/images/wall.svg" alt="" />
          </div>
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

export default App

