import './About.css'

function About() {
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
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
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
          <h2>Blog</h2>
          <h5>Home <img src="src/images/vector.svg" alt="" /> Shop</h5>
        </div>
      </div>
    </section>

    <section>
      <div className="container">
        <div className='blog'>

          <div className='planning'>
            <img src="src/images/planning_work.svg" alt="" />

            <div className='about_plan'>
              <div className='person'>
                <img src="src/images/people.svg" alt="" />
                <p>Admin</p>
              </div>
              <div className='person'>
                <img src="src/images/data.svg" alt="" />
                <p>14 Oct 2022</p>
              </div>
              <div className='person'>
                <img src="src/images/wood.svg" alt="" />
                <p>Wood</p>
              </div>
            </div>
          </div>

          <div className='categories'>
            <form action="">
              <input type="search" id='search' required />
              <button><img src="src/images/searching.svg" alt="" /></button>
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
            <img className='image' src="src/images/hand.svg" alt="" />
            <div className='about_plan'>
              <div className='person'>
                <img src="src/images/people.svg" alt="" />
                <p>Admin</p>
              </div>
              <div className='person'>
                <img src="src/images/data.svg" alt="" />
                <p>14 Oct 2022</p>
              </div>
              <div className='person'>
                <img src="src/images/wood.svg" alt="" />
                <p>Wood</p>
              </div>
            </div>
            <h1>Exploring new ways of decorating</h1>
            <div className='Lorem_of_blog'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin <br /> aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis <br /> in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit <br /> ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
              <button>Read more</button>
            </div>
            <img className='image' src="src/images/sunglasses.svg" alt="" />
            <div className='about_plan'>
              <div className='person'>
                <img src="src/images/people.svg" alt="" />
                <p>Admin</p>
              </div>
              <div className='person'>
                <img src="src/images/data.svg" alt="" />
                <p>14 Oct 2022</p>
              </div>
              <div className='person'>
                <img src="src/images/wood.svg" alt="" />
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
                <img src="src/images/pen.svg" alt="" />
                <div>
                  <h5>Going all-in with <br /> millennial design</h5>
                  <p>03 Aug 2022</p>
                </div>
              </div>
              <div className='posts'>
                <img src="src/images/more.svg" alt="" />
                <div>
                  <h5>Going all-in with <br /> millennial design</h5>
                  <p>03 Aug 2022</p>
                </div>
              </div>
              <div className='posts'>
                <img src="src/images/cofee.svg" alt="" />
                <div>
                  <h5>Going all-in with <br /> millennial design</h5>
                  <p>03 Aug 2022</p>
                </div>
              </div>
              <div className='posts'>
                <img src="src/images/flower.svg" alt="" />
                <div>
                  <h5>Going all-in with <br /> millennial design</h5>
                  <p>03 Aug 2022</p>
                </div>
              </div>
              <div className='posts'>
                <img src="src/images/chair.svg" alt="" />
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

export default About