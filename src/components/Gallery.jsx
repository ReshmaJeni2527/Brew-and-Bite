import { useState, useCallback, useEffect } from 'react'
import { galleryImages } from '../data/galleryData.js'
import './Gallery.css'

function Gallery() {
  const [activeImage, setActiveImage] = useState(null)

  const closeLightbox = useCallback(() => setActiveImage(null), [])

  useEffect(() => {
    if (!activeImage) return
    const onKeyDown = (e) => { if (e.key === 'Escape') closeLightbox() }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [activeImage, closeLightbox])

  return (
    <section id="gallery" className="gallery section">
      <div className="container">
        <div className="section-head">
          <p className="kicker">A look inside</p>
          <h2>The room, the counter, the plates</h2>
        </div>

        <div className="gallery__grid">
          {galleryImages.map((image) => (
            <button
              key={image.id}
              className={`gallery__item ${image.tall ? 'gallery__item--tall' : ''}`}
              onClick={() => setActiveImage(image)}
              aria-label={`Open larger view: ${image.alt}`}
            >
              <img src={image.src} alt={image.alt} loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      {activeImage && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={closeLightbox}>
          <button className="lightbox__close" onClick={closeLightbox} aria-label="Close preview">×</button>
          <img
            src={activeImage.src}
            alt={activeImage.alt}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}

export default Gallery
