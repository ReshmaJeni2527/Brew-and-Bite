import './About.css'

const REASONS = [
  {
    title: 'Roasted in-house',
    text: 'Beans are roasted twice a week in small batches, so every cup is a few days old, never a few months.',
  },
  {
    title: 'Scratch kitchen',
    text: 'Sauces, breads and desserts are made on site each morning — nothing arrives frozen.',
  },
  {
    title: 'Sourced locally',
    text: 'Produce and dairy come from growers within 60km, listed by name on our seasonal board.',
  },
]

function About() {
  return (
    <section id="about" className="about section">
      <div className="container about__inner">
        <div className="about__media">
          <img
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80"
            alt="Interior of Brew & Bite with wooden tables and warm lighting"
            className="about__img"
          />
        </div>

        <div className="about__content">
          <p className="kicker">Our story</p>
          <h2>A corner café built around a good cup and a full table</h2>
          <p className="about__lead">
            Brew &amp; Bite opened as a single espresso counter in 2013. Over
            the years the kitchen grew alongside it, and the café became the
            kind of place regulars plan their mornings around — part coffee
            bar, part neighbourhood dining room.
          </p>
          <p className="about__body">
            We still keep things simple: good beans, real ingredients, and a
            room that feels unhurried whether you're stopping in for a
            flat white or settling in for a long Sunday brunch.
          </p>

          <h3 className="about__why-title">Why choose us?</h3>
          <ul className="about__reasons">
            {REASONS.map((reason) => (
              <li key={reason.title}>
                <span className="about__reason-mark" aria-hidden="true" />
                <div>
                  <h4>{reason.title}</h4>
                  <p>{reason.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
