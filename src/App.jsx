import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Menu from './components/Menu.jsx'
import Offers from './components/Offers.jsx'
import Gallery from './components/Gallery.jsx'
import Reservation from './components/Reservation.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Offers />
        <Gallery />
        <Reservation />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
