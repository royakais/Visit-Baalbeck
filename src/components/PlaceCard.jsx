import { Link } from 'react-router-dom'
import Photo from './Photo.jsx'

export default function PlaceCard({ place }) {
  return (
    <Link to={`/place/${place.slug}`} className="pcard">
      <Photo place={place} width={800} credit={false} className="pcard__photo" />
      <span className="pcard__body">
        <span className="pcard__name">{place.name}</span>
        <span className="pcard__ar" lang="ar" dir="rtl">{place.arabic}</span>
        <span className="pcard__short">{place.short}</span>
      </span>
    </Link>
  )
}
