import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="hero__kicker">A neighbourhood coffeehouse kitchen</p>
          <h1>
            Slow mornings,<br />honest food,<br /><span>really good coffee.</span>
          </h1>
          <p className="hero__desc">
            Brew &amp; Bite pairs hand-pulled espresso with a kitchen that cooks
            from scratch every morning — from weekday breakfast plates to
            unhurried weekend brunches.
          </p>
          <div className="hero__actions">
            <a href="#menu" className="btn btn-primary">View Menu</a>
            <a href="#reservation" className="btn btn-outline">Book a Table</a>
          </div>
          <div className="hero__stats">
            <div>
              <strong>12+</strong>
              <span>years on the corner</span>
            </div>
            <div>
              <strong>40</strong>
              <span>menu items, made fresh</span>
            </div>
            <div>
              <strong>4.8</strong>
              <span>average guest rating</span>
            </div>
          </div>
        </div>

        <div className="hero__media">
          <img
            className="hero__img-main"
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80"
            alt="Latte art in a warm ceramic cup at Brew & Bite"
          />
          <img
            className="hero__img-small"
            src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=500&q=80"
            alt="Freshly baked pastries on the counter"
          />
          <div className="hero__badge">
            <span className="hero__badge-num">Est.</span>
            <span className="hero__badge-year">2013</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
