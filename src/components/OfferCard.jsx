function OfferCard({ offer }) {
  return (
    <article className="offer-card">
      <div className="offer-card__img-wrap">
        <img src={offer.image} alt={offer.title} loading="lazy" />
      </div>
      <div className="offer-card__body">
        <span className="offer-card__note">{offer.note}</span>
        <h3>{offer.title}</h3>
        <p>{offer.description}</p>
        <div className="offer-card__footer">
          <span className="offer-card__price">{offer.price}</span>
          <a href="#reservation" className="btn btn-outline offer-card__cta">Reserve</a>
        </div>
      </div>
    </article>
  )
}

export default OfferCard
