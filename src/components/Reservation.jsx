import { useState } from 'react'
import './Reservation.css'

const INITIAL_FORM = {
  name: '',
  phone: '',
  date: '',
  time: '',
  guests: '',
}

function validate(form) {
  const errors = {}

  if (!form.name.trim()) {
    errors.name = 'Please enter your name.'
  }

  const phonePattern = /^[0-9+\s-]{7,15}$/
  if (!form.phone.trim()) {
    errors.phone = 'Please enter your phone number.'
  } else if (!phonePattern.test(form.phone.trim())) {
    errors.phone = 'Enter a valid phone number.'
  }

  if (!form.date) {
    errors.date = 'Please select a date.'
  }

  if (!form.time) {
    errors.time = 'Please select a time.'
  }

  if (!form.guests) {
    errors.guests = 'Please select the number of guests.'
  }

  return errors
}

function Reservation() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const validationErrors = validate(form)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true)
      setForm(INITIAL_FORM)
    }
  }

  return (
    <section id="reservation" className="reservation section">
      <div className="container reservation__inner">
        <div className="reservation__info">
          <p className="kicker">Book a table</p>
          <h2>Save your seat at Brew &amp; Bite</h2>
          <p className="reservation__desc">
            Tell us when you're coming and how many are joining you. We hold
            reservations for 15 minutes past the booked time.
          </p>

          <ul className="reservation__facts">
            <li><strong>Lunch &amp; Dinner</strong><span>Tue–Sun, 8am – 10pm</span></li>
            <li><strong>Group bookings</strong><span>Call ahead for 6+ guests</span></li>
            <li><strong>Walk-ins</strong><span>Always welcome, subject to space</span></li>
          </ul>
        </div>

        <form className="reservation__form" onSubmit={handleSubmit} noValidate>
          {isSubmitted && (
            <p className="reservation__success" role="status">
              Thank you! Your table reservation request has been received.
            </p>
          )}

          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Your full name"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && <span id="name-error" className="form-error">{errors.name}</span>}
          </div>

          <div className="form-field">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder="e.g. +91 98765 43210"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
            />
            {errors.phone && <span id="phone-error" className="form-error">{errors.phone}</span>}
          </div>

          <div className="form-row">
            <div className="form-field">
              <label htmlFor="date">Date</label>
              <input
                id="date"
                name="date"
                type="date"
                value={form.date}
                onChange={handleChange}
                aria-invalid={Boolean(errors.date)}
                aria-describedby={errors.date ? 'date-error' : undefined}
              />
              {errors.date && <span id="date-error" className="form-error">{errors.date}</span>}
            </div>

            <div className="form-field">
              <label htmlFor="time">Time</label>
              <input
                id="time"
                name="time"
                type="time"
                value={form.time}
                onChange={handleChange}
                aria-invalid={Boolean(errors.time)}
                aria-describedby={errors.time ? 'time-error' : undefined}
              />
              {errors.time && <span id="time-error" className="form-error">{errors.time}</span>}
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="guests">Number of Guests</label>
            <select
              id="guests"
              name="guests"
              value={form.guests}
              onChange={handleChange}
              aria-invalid={Boolean(errors.guests)}
              aria-describedby={errors.guests ? 'guests-error' : undefined}
            >
              <option value="">Select guests</option>
              {[1, 2, 3, 4, 5, 6, '7+'].map((num) => (
                <option key={num} value={num}>{num} {num === 1 ? 'guest' : 'guests'}</option>
              ))}
            </select>
            {errors.guests && <span id="guests-error" className="form-error">{errors.guests}</span>}
          </div>

          <button type="submit" className="btn btn-primary reservation__submit">
            Confirm Reservation
          </button>
        </form>
      </div>
    </section>
  )
}

export default Reservation
