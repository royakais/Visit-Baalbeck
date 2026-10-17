import { useState } from 'react'
import { photoFor } from '../data/photos.js'
import Icon from './Icon.jsx'
import { categories } from '../data/categories.js'

/** A place photo with credit line. Falls back to a drawn limestone plate when there is
 *  no photo yet, or when the image cannot load (offline, blocked, removed). */
export default function Photo({ place, width = 1200, credit = true, className = '' }) {
  const photo = photoFor(place.photo)
  const [failed, setFailed] = useState(false)
  const icon = categories.find((c) => c.slug === place.category)?.icon ?? 'columns'

  if (!photo || failed) {
    return (
      <figure className={`photo photo--plate ${className}`}>
        <div className="plate" aria-hidden="true">
          <span className="plate__icon"><Icon name={icon} size={40} /></span>
          <span className="plate__name">{place.name}</span>
          <span className="plate__ar" lang="ar" dir="rtl">{place.arabic}</span>
        </div>
      </figure>
    )
  }

  const src = typeof photo.src === 'function' ? photo.src(width) : photo.src
  return (
    <figure className={`photo ${className}`}>
      <img src={src} alt={photo.alt} loading="lazy" decoding="async" onError={() => setFailed(true)} />
      {credit && photo.page && (
        <figcaption>
          Photo: <a href={photo.page} target="_blank" rel="noreferrer">{photo.author}</a>
          {photo.license !== 'see file page' && `, ${photo.license}`}, via Wikimedia Commons
        </figcaption>
      )}
    </figure>
  )
}
