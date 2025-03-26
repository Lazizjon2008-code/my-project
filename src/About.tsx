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
        <div>

          <div className='planning'>
            <img src="src/images/planning_work.svg" alt="" />

            <div className='about_plan'>
              <div className='person'>
                <img src="src/images/people.svg" alt="" />
                <p>Admin</p>
              </div>
              <div className='Data'>
                <img src="src/images/data.svg" alt="" />
                <p>14 Oct 2022</p>
              </div>
              <div className='Wood'>
                <img src="src/images/wood.svg" alt="" />
                <p>Wood</p>
              </div>
            </div>
          </div>

          <div className='categories'>
            <form action="">
              <input type="search" id='search' required />
            </form>
            <h3>Categories</h3>
          </div>
        </div>
      </div>
    </section>
        </>
    )
}

export default About