import { useEffect, useState } from 'react'
import './Navbar.css'

const LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Offers', href: '#offers' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reservation', href: '#reservation' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setIsOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__brand" onClick={handleLinkClick}>
          <span className="navbar__brand-mark">B&amp;B</span>
          <span className="navbar__brand-name">Brew &amp; Bite</span>
        </a>

        <nav className="navbar__links navbar__links--desktop" aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>

        <a href="#reservation" className="btn btn-primary navbar__cta">Book a Table</a>

        <button
          className={`navbar__toggle ${isOpen ? 'is-open' : ''}`}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav
        className={`navbar__links navbar__links--mobile ${isOpen ? 'is-open' : ''}`}
        aria-label="Mobile"
      >
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={handleLinkClick}>{link.label}</a>
        ))}
        <a href="#reservation" className="btn btn-primary" onClick={handleLinkClick}>Book a Table</a>
      </nav>
    </header>
  )
}

export default Navbar
