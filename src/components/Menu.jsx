import { useState, useMemo } from 'react'
import { categories, menuItems } from '../data/menuData.js'
import MenuCard from './MenuCard.jsx'
import './Menu.css'

function Menu() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') return menuItems
    return menuItems.filter((item) => item.category === activeCategory)
  }, [activeCategory])

  return (
    <section id="menu" className="menu section">
      <div className="container">
        <div className="section-head">
          <p className="kicker">On the menu</p>
          <h2>Cooked to order, every day</h2>
          <p className="desc">
            Filter by category to find exactly what you're craving — from an
            early breakfast plate to something sweet at the end of the meal.
          </p>
        </div>

        <div className="menu__filters" role="tablist" aria-label="Menu categories">
          {categories.map((category) => (
            <button
              key={category}
              role="tab"
              aria-selected={activeCategory === category}
              className={`menu__filter-btn ${activeCategory === category ? 'is-active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="menu__grid">
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu
