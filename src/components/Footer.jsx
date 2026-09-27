import './Footer.css'

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="navbar__brand-mark">B&amp;B</span>
          <span>Brew &amp; Bite</span>
        </div>
        <p className="footer__tag">A neighbourhood coffeehouse kitchen.</p>
        <nav className="footer__links" aria-label="Footer">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#reservation">Reservation</a>
          <a href="#contact">Contact</a>
        </nav>
        <p className="footer__copy">© {year} Brew &amp; Bite. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
