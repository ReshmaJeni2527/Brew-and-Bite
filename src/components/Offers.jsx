import { offers } from '../data/offersData.js'
import OfferCard from './OfferCard.jsx'
import './Offers.css'

function Offers() {
  return (
    <section id="offers" className="offers section">
      <div className="container">
        <div className="section-head">
          <p className="kicker">Worth planning around</p>
          <h2>Special offers this month</h2>
          <p className="desc">Three standing offers, always on the board — ask your server for the current daily special.</p>
        </div>

        <div className="offers__grid">
          {offers.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Offers
