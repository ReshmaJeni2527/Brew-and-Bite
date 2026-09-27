# Brew & Bite

A modern, responsive restaurant/café website built with **React + Vite**. Created as a front-end web development portfolio project — no backend or database required.

## Description

Brew & Bite is a fictional neighbourhood coffeehouse-kitchen. The site presents its story, menu, offers, gallery and a working reservation flow in a warm, editorial visual style (deep espresso brown, cream and copper-amber palette, paired with a serif/sans type system).

## Features

- Responsive layout for mobile, tablet, laptop and desktop, with no horizontal scroll at any breakpoint
- Sticky navbar with smooth-scrolling links and an animated mobile hamburger menu (React state)
- Hero section with clear "View Menu" / "Book a Table" calls to action
- About section with restaurant story and a "Why Choose Us?" list
- Dynamic **menu category filtering** (All / Breakfast / Main Course / Snacks / Desserts / Beverages) built with React state and reusable `MenuCard` components
- Special Offers section (Weekend Special, Family Combo, Today's Special) using a reusable `OfferCard` component
- Responsive masonry-style Gallery with a simple lightbox preview (React state)
- **Reservation form** with controlled inputs and front-end validation (name, phone, date, time, guests) and a success message on submit
- Contact section with address, phone, email, hours, social links and an embedded map
- Accessible markup: semantic elements, labelled form fields, alt text, visible focus states

## Technologies Used

React.js · JavaScript (JSX) · CSS · Vite

## How to Install

```bash
npm install
```

## How to Run Locally

```bash
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/       # Navbar, Hero, About, Menu, MenuCard, Offers, OfferCard,
│                      # Gallery, Reservation, Contact, Footer (+ matching .css files)
├── data/              # menuData.js, offersData.js, galleryData.js
├── App.jsx            # Composes all sections
├── main.jsx           # React entry point
└── index.css           # Design tokens + base styles
```

## Deploying

1. **GitHub** — initialize a repo, commit, and push:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Brew & Bite"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. **Vercel** — import the GitHub repo at vercel.com, keep the default Vite build settings (`npm run build`, output directory `dist`), and deploy.

## Future Improvements

- Connect the reservation form to a real backend/email service
- Add an online ordering flow
- Add a CMS-driven menu so items can be updated without touching code
- Add multi-language support

## Note on Design

The visual layout of this project was designed originally for Brew & Bite. A reference image was used only for general layout inspiration during planning — no branding, text, images or copyrighted assets from that reference were used in the final code.

---

**Portfolio description:**

> Brew & Bite is a modern responsive restaurant website built with React.js, featuring dynamic menu category filtering, reservation form validation, responsive navigation, special offers, and an interactive food gallery.
>
> **Technologies:** React.js · JavaScript · JSX · CSS · Vite
