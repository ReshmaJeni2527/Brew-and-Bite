import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container contact__inner">
        <div className="section-head" style={{ marginBottom: 0 }}>
          <p className="kicker">Find us</p>
          <h2>Visit Brew &amp; Bite</h2>
          <p className="desc">
            Drop by, call ahead, or send a message — we're a short walk from
            the town square.
          </p>

          <dl className="contact__details">
            <div>
              <dt>Address</dt>
              <dd>24 Maple Street, Riverside District, Chennai 600001</dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd><a href="tel:+914412345678">+91 44 1234 5678</a></dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd><a href="mailto:hello@brewandbite.in">hello@brewandbite.in</a></dd>
            </div>
            <div>
              <dt>Hours</dt>
              <dd>Tue–Sun, 8:00 AM – 10:00 PM · Closed Mondays</dd>
            </div>
          </dl>

          <div className="contact__social">
            <a href="#" aria-label="Brew & Bite on Instagram">Instagram</a>
            <a href="#" aria-label="Brew & Bite on Facebook">Facebook</a>
            <a href="#" aria-label="Brew & Bite on WhatsApp">WhatsApp</a>
          </div>
        </div>

        <div className="contact__map" role="img" aria-label="Map showing the location of Brew & Bite on Maple Street">
          <iframe
            title="Brew & Bite location"
            src="https://www.google.com/maps?q=Chennai&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

export default Contact
