function MenuCard({ item }) {
  return (
    <article className="menu-card">
      <div className="menu-card__img-wrap">
        <img src={item.image} alt={item.name} loading="lazy" />
        <span className="menu-card__tag">{item.category}</span>
      </div>
      <div className="menu-card__body">
        <div className="menu-card__row">
          <h3>{item.name}</h3>
          <span className="menu-card__price">${item.price.toFixed(2)}</span>
        </div>
        <p>{item.description}</p>
      </div>
    </article>
  )
}

export default MenuCard
