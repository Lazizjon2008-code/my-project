import './Checkout.css'

function Checkout () {
    return(
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
          <h2>Checkout</h2>
          <h5>Home <img src="src/images/vector.svg" alt="" /> Checkout</h5>
        </div>
      </div>
    </section>

    <section>
        <div className="container">
            <div>

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

                <div>
                  <div>
                    <h2>Product</h2>
                    <h2>Subtotal</h2>
                  </div>
                </div>

            </div>
        </div>
    </section>
        </>
    )
}

export default Checkout